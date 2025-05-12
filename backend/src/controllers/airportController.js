const airportService = require('../services/airportService');

async function getAirports(req, res, next) {
    try {
        const airports = await airportService.getAllAirports();
        res.json(airports);
    } catch (err) {
        next(err);
    }
}

module.exports = { getAirports };
