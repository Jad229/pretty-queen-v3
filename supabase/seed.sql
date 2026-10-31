INSERT INTO customers (id, name, phone_number, created_at, updated_at)
VALUES ('711b9d12-9dd4-4cb8-a0b3-105e1e4dc1f8', 'John Doe', '1234567890', '2026-01-01 10:00:00', '2026-01-01 10:00:00'),
       ('b3eb849a-96c5-4968-88b1-e9f3ff5df363', 'Maria Diaz', '0987654321', '2026-01-01 11:00:00', '2026-01-01 11:00:00'),
       ('fc8329ef-d7b1-487e-9c19-bc565ac62c2e', 'Jim Beam', '2881151141', '2026-01-01 12:00:00', '2026-01-01 12:00:00'),
       ('8c2e1f44-6a3b-4d15-9e70-2b6f8a91c0d3', 'Aurelkis Perez', '6221262227', '2026-01-01 13:00:00', '2026-01-01 13:00:00'),
       ('4e7a9c21-1b58-4f6d-8c33-0d5e6a7b8c94', 'Jack Daniels', '3333333333', '2026-01-01 14:00:00', '2026-01-01 14:00:00');

INSERT INTO services (id, name, description, price)
VALUES ('17cf2b0d-4192-4ff8-b0fb-a99cb3ce4651', 'Haircut', 'A basic haircut', 20.00),
       ('6d4a8b21-5e73-4c09-b1f2-83a4c5d6e708', 'Haircut and shave', 'A haircut and shave', 30.00);

INSERT INTO staff (id, name, email, phone_number, created_at, updated_at)
VALUES ('668114b8-a084-47a7-a52e-a0409d31b348', 'Yuberkis Hernandez', 'yuberkis@example.com', '1234567890', '2026-01-01 10:00:00', '2026-01-01 10:00:00'),
       ('2f6d8a10-3c4b-4e91-b7a2-15c6d8e9f041', 'Jeremy Ortiz', 'jeremy@example.com', '0987654321', '2026-01-01 11:00:00', '2026-01-01 11:00:00'),
       ('9a3c5e72-8d14-4b60-a1f3-67c2d4e5b806', 'Luis Miguel Rodriguez', 'jim@example.com', '1111111111', '2026-01-01 12:00:00', '2026-01-01 12:00:00'),
       ('5b1d7f83-2e46-4c90-9a18-34d6e7f8a052', 'Jill Cassidy', 'jill@example.com', '2222222222', '2026-01-01 13:00:00', '2026-01-01 13:00:00'),
       ('0c8e4a65-7b23-4d11-8f56-91a2b3c4d507', 'Jack Daniels', 'jack@example.com', '3333333333', '2026-01-01 14:00:00', '2026-01-01 14:00:00');

INSERT INTO appointments (customer_id, staff_id, service_id, date, status, created_at, updated_at)
VALUES ('711b9d12-9dd4-4cb8-a0b3-105e1e4dc1f8', '668114b8-a084-47a7-a52e-a0409d31b348', '17cf2b0d-4192-4ff8-b0fb-a99cb3ce4651', '2026-01-01 10:00:00', 'booked', '2026-01-01 10:00:00', '2026-01-01 10:00:00'),
       ('b3eb849a-96c5-4968-88b1-e9f3ff5df363',  '668114b8-a084-47a7-a52e-a0409d31b348', '17cf2b0d-4192-4ff8-b0fb-a99cb3ce4651', '2026-01-01 12:00:00', 'booked', '2026-01-01 12:00:00', '2026-01-01 12:00:00'),
       ('fc8329ef-d7b1-487e-9c19-bc565ac62c2e',  '668114b8-a084-47a7-a52e-a0409d31b348', '17cf2b0d-4192-4ff8-b0fb-a99cb3ce4651', '2026-01-01 14:00:00', 'booked', '2026-01-01 14:00:00', '2026-01-01 14:00:00');