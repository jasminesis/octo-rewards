INSERT INTO users (username, email) VALUES ('admin', 'admin@email.com');
INSERT INTO expenses (user_id, amount, category, payment_method, card_id) VALUES 
(1, 20, 'Dining', 'card', 2), 
(1, 40, 'Dining', 'card', 2), 
(1, 60, 'Dining', 'card', 2);
INSERT INTO cards (bank, name, description, type, min_spend, max_spend, base_rate, next_rate, billing_date) VALUES 
('UOB', 'Lady''s Card', 'You''ll earn 10X UNI$ (or 20 miles) per S$5 spent on your chosen category(ies) with no minimum spend required.', 'Rewards', 0, 1000, 0.4, 4, 20),
('UOB', 'One', 'Great rebate card', 'Cashback', 500, 0, 0.03333, 0.05, 29 );
INSERT INTO cards (bank, name, description, type, min_spend, max_spend, base_rate, next_rate, billing_date) VALUES ('Citi', 'PremierMiles', 'Great foreign currency earnings', 'Rewards', 0, 3000, 1.2, 1.5, 7)

INSERT INTO card_owners(user_id, card_id) VALUES (1, 1);