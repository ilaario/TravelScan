-- tariffe treni minime cache
CREATE TABLE train_fares (
    id SERIAL PRIMARY KEY,
    origin_station_id      INTEGER NOT NULL REFERENCES stations(id) ON DELETE CASCADE,
    destination_station_id INTEGER NOT NULL REFERENCES stations(id) ON DELETE CASCADE,
    price                  NUMERIC(10,2) NOT NULL,
    currency               CHAR(3)      NOT NULL,
    retrieved_at           TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (origin_station_id, destination_station_id)
);

CREATE INDEX idx_train_fares_origin
    ON train_fares(origin_station_id);
