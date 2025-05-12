-- rotte di volo (connessioni dirette tra aeroporti)
CREATE TABLE flight_routes (
    id SERIAL PRIMARY KEY,
    origin_airport_id      INTEGER NOT NULL REFERENCES airports(id) ON DELETE CASCADE,
    destination_airport_id INTEGER NOT NULL REFERENCES airports(id) ON DELETE CASCADE,
    UNIQUE (origin_airport_id, destination_airport_id)
);
