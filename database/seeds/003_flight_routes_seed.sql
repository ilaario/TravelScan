-- connessioni dirette tra aeroporti
INSERT INTO flight_routes (origin_airport_id, destination_airport_id) VALUES
    (
      (SELECT id FROM airports WHERE iata_code='FCO'),
      (SELECT id FROM airports WHERE iata_code='MXP')
    ),
    (
      (SELECT id FROM airports WHERE iata_code='FCO'),
      (SELECT id FROM airports WHERE iata_code='CDG')
    ),
    (
      (SELECT id FROM airports WHERE iata_code='MXP'),
      (SELECT id FROM airports WHERE iata_code='CDG')
    ),
    (
      (SELECT id FROM airports WHERE iata_code='CDG'),
      (SELECT id FROM airports WHERE iata_code='FCO')
    );
