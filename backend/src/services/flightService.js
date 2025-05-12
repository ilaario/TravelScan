const pool = require('../config/db');

async function getDestinations(originIata) {
    const { rows } = await pool.query(
        `
    SELECT
      a.iata_code AS destination_airport_iata,
      a.name,
      a.city,
      a.country,
      a.latitude,
      a.longitude,
      f.price,
      f.currency
    FROM airports o
    JOIN flight_routes r
      ON o.id = r.origin_airport_id
    JOIN airports a
      ON a.id = r.destination_airport_id
    LEFT JOIN flight_fares f
      ON f.origin_airport_id = o.id
     AND f.destination_airport_id = a.id
    WHERE o.iata_code = $1
    ORDER BY f.price NULLS LAST, a.name;
  `,
        [originIata]
    );
    return rows;
}

module.exports = { getDestinations };
