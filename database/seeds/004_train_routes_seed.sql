-- connessioni dirette tra stazioni
INSERT INTO train_routes (origin_station_id, destination_station_id) VALUES
(
     (SELECT id FROM stations WHERE uic_code='8000150'),
     (SELECT id FROM stations WHERE uic_code='8000238')
),
(
     (SELECT id FROM stations WHERE uic_code='8000150'),
     (SELECT id FROM stations WHERE uic_code='8000264')
),
(
     (SELECT id FROM stations WHERE uic_code='8000238'),
     (SELECT id FROM stations WHERE uic_code='8000264')
);
