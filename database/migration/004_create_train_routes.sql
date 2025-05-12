-- rotte di treno (connessioni dirette tra stazioni)
CREATE TABLE train_routes (
    id SERIAL PRIMARY KEY,
    origin_station_id      INTEGER NOT NULL REFERENCES stations(id) ON DELETE CASCADE,
    destination_station_id INTEGER NOT NULL REFERENCES stations(id) ON DELETE CASCADE,
    UNIQUE (origin_station_id, destination_station_id)
);
