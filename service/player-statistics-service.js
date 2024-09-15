const { savePlayerStatisticsToDb } = require('../repositories/player-statistics-repository');

const savePlayerStatistics = async (teamId, season, leagueId, players) => {
    for (const player of players) {
        // Aqui você pode adicionar cálculos ou transformações adicionais, se necessário.
        await savePlayerStatisticsToDb(player, teamId, season, leagueId);
    }
};

module.exports = {
    savePlayerStatistics
};
