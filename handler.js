const { validateEnvVars } = require('./config/config');
const { processPlayerStatistics } = require('./use-cases/process-player-statistics');
const { buildResponse } = require('./utils/response-utils');
const { connectToDatabase, closeDatabaseConnection } = require('./infraestructure/mongo-connection');

exports.handler = async (event) => {

    try {
        validateEnvVars();

        await connectToDatabase(process.env.MONGODB_USERNAME, process.env.MONGODB_PASSWORD, process.env.DATABASE);

        // Processa cada mensagem recebida da fila SQS
        for (const record of event.Records) {
            const messageBody = JSON.parse(record.body);
            await processPlayerStatistics(messageBody);
        }

        return buildResponse(200, 'Mensagens processadas com sucesso.');
    } catch (error) {
        console.error('Erro ao processar as mensagens:', error);
        return buildResponse(500, 'Erro ao processar as mensagens.');
    } finally {
        // Fecha a conexão com o MongoDB
        await closeDatabaseConnection();
    }
};
