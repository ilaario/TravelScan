-- tariffe minime cache per voli
INSERT INTO flight_fares (origin_airport_id, destination_airport_id, price, currency) VALUES
(
      (SELECT id FROM airports WHERE iata_code='FCO'),
      (SELECT id FROM airports WHERE iata_code='MXP'),
      80.50, 'EUR'
),
(
      (SELECT id FROM airports WHERE iata_code='FCO'),
      (SELECT id FROM airports WHERE iata_code='CDG'),
      120.75, 'EUR'
),
(
      (SELECT id FROM airports WHERE iata_code='MXP'),
      (SELECT id FROM airports WHERE iata_code='CDG'),
      70.00, 'EUR'
),
(
      (SELECT id FROM airports WHERE iata_code='CDG'),
      (SELECT id FROM airports WHERE iata_code='FCO'),
      110.00, 'EUR'
);
