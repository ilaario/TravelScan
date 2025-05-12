const express = require('express');
const router = express.Router();

router.use('/airports',   require('./airportRoutes'));
router.use('/stations',   require('./stationRoutes'));
router.use('/destinations', require('./destinationRoutes'));

module.exports = router;
