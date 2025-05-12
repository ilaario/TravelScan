-- crea tabella aeroporti
CREATE TABLE airports (
    id SERIAL PRIMARY KEY,
    iata_code CHAR(3) NOT NULL UNIQUE,
    name TEXT         NOT NULL,
    city TEXT         NOT NULL,
    country TEXT      NOT NULL,
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
