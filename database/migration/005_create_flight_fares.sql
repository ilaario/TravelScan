-- tariffe voli minime cache
CREATE TABLE flight_fares (
    id SERIAL PRIMARY KEY,
    origin_airport_id      INTEGER NOT NULL REFERENCES airports(id) ON DELETE CASCADE,
    destination_airport_id INTEGER NOT NULL REFERENCES airports(id) ON DELETE CASCADE,
    price                  NUMERIC(10,2) NOT NULL,
    currency               CHAR(3)      NOT NULL,
    retrieved_at           TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (origin_airport_id, destination_airport_id)
);

CREATE INDEX idx_flight_fares_origin
    ON flight_fares(origin_airport_id);
