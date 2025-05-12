const pool = require('../config/db');

async function getDestinations(originUic) {
    const { rows } = await pool.query(
        `
    SELECT
      s.uic_code AS destination_station_uic,
      s.name,
      s.city,
      s.country,
      s.latitude,
      s.longitude,
      f.price,
      f.currency
    FROM stations o
    JOIN train_routes r
      ON o.id = r.origin_station_id
    JOIN stations s
      ON s.id = r.destination_station_id
    LEFT JOIN train_fares f
      ON f.origin_station_id = o.id
     AND f.destination_station_id = s.id
    WHERE o.uic_code = $1
    ORDER BY f.price NULLS LAST, s.name;
  `,
        [originUic]
    );
    return rows;
}

module.exports = { getDestinations };
