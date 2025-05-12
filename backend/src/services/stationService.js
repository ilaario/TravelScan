const pool = require('../config/db');

async function getAllStations() {
    const { rows } = await pool.query(`
    SELECT uic_code, name, city, country, latitude, longitude
      FROM stations
     ORDER BY name;
  `);
    return rows;
}

module.exports = { getAllStations };
