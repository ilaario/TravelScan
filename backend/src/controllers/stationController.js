const stationService = require('../services/stationService');

async function getStations(req, res, next) {
    try {
        const stations = await stationService.getAllStations();
        res.json(stations);
    } catch (err) {
        next(err);
    }
}

module.exports = { getStations };
