const flightService = require('../services/flightService');
const trainService  = require('../services/trainService');

async function getDestinations(req, res, next) {
    try {
        const { type, origin } = req.query;
        if (type === 'airport') {
            const dests = await flightService.getDestinations(origin);
            res.json(dests);
        } else if (type === 'station') {
            const dests = await trainService.getDestinations(origin);
            res.json(dests);
        } else {
            res.status(400).json({ message: 'Parametro "type" non valido' });
        }
    } catch (err) {
        next(err);
    }
}

module.exports = { getDestinations };
