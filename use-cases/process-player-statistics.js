const { savePlayerStatistics } = require('../service/player-statistics-service');

const processPlayerStatistics = async (messageBody) => {
    const { teamId, season, leagueId, players } = messageBody;

    console.log(`Processando estatísticas do time ${teamId} para a temporada ${season} na liga ${leagueId}`);

    // Salva as estatísticas dos jogadores no MongoDB
    await savePlayerStatistics(teamId, season, leagueId, players);

    console.log('Processamento concluído.');
};

module.exports = {
    processPlayerStatistics
};
