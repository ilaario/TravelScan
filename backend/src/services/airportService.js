const pool = require('../config/db');

async function getAllAirports() {
    const { rows } = await pool.query(`
    SELECT iata_code, name, city, country, latitude, longitude
      FROM airports
     ORDER BY name;
  `);
    return rows;
}

module.exports = { getAllAirports };
