INSERT INTO users (username, email) VALUES ('admin', 'admin@email.com');
INSERT INTO expenses (user_id, amount, category, payment_method, card_id) VALUES 
(1, 20, 'Dining', 'card', 1), 
(1, 40, 'Dining', 'card', 1), 
(1, 60, 'Dining', 'card', 1);
INSERT INTO cards (title, description, rules, bank, billing_date) VALUES ('Lady''s Card', 'You''ll earn 10X UNI$ (or 20 miles) per S$5 spent on your chosen category(ies) with no minimum spend required.', 'Choose one category', 'UOB', 20);