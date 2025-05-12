-- crea tabella stazioni ferroviarie
CREATE TABLE stations (
    id SERIAL PRIMARY KEY,
    uic_code TEXT     NOT NULL UNIQUE,
    name TEXT         NOT NULL,
    city TEXT         NOT NULL,
    country TEXT      NOT NULL,
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
