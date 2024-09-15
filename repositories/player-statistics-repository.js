const { Statistics } = require('../model/players-statistics-model');

const savePlayerStatisticsToDb = async (player, teamId, season, leagueId) => {
    try {
        // Cria um novo registro diretamente
        const newRecord = new Statistics({
            player: player.player,
            statistics: player.statistics
        });
        await newRecord.save();
        console.log(`Estatísticas para o jogador ${player.player.name} salvas com sucesso.`);
    } catch (error) {
        console.error(`Erro ao salvar estatísticas no MongoDB para o jogador ${player.player.name}:`, error);
        throw error;
    }
};

module.exports = {
    savePlayerStatisticsToDb
};