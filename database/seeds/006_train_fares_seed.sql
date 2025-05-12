-- tariffe minime cache per treni
INSERT INTO train_fares (origin_station_id, destination_station_id, price, currency) VALUES
(
     (SELECT id FROM stations WHERE uic_code='8000150'),
     (SELECT id FROM stations WHERE uic_code='8000238'),
     40.00, 'EUR'
),
(
     (SELECT id FROM stations WHERE uic_code='8000150'),
     (SELECT id FROM stations WHERE uic_code='8000264'),
     25.00, 'EUR'
),
(
     (SELECT id FROM stations WHERE uic_code='8000238'),
     (SELECT id FROM stations WHERE uic_code='8000264'),
     35.00, 'EUR'
);
