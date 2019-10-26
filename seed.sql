INSERT INTO expenses (
    user_id,
    amount,
    category,
    payment_method,
    card_id
  )
VALUES
  (1, 20, 'Dining', 'card', 1),
  (1, 20, 'Fashion', 'card', 2),
  (1, 40, 'Dining', 'card', 2),
  (1, 60, 'Dining', 'card', 2);
INSERT INTO cards (bank, name, description, type, billing_date)
VALUES
  (
    'UOB',
    'Lady''s Card',
    'You''ll earn 10X UNI$ (or 20 miles) per S$5 spent on your chosen category(ies) with no minimum spend required.',
    'Rewards',
    20
  ),
  (
    'UOB',
    'One',
    'Great rebate card',
    'Cashback',
    29
  ),
  (
    'Citi',
    'PremierMiles',
    'Great foreign currency earnings',
    'Rewards',
    7
  );
INSERT INTO card_owners (user_id, card_id)
VALUES
  (1, 1),
  (1, 2)
INSERT INTO card_rates (card_id, spend_threshold, rate)
VALUES
  (1, 0, 0.4),
  (1, 1000, 4),
  (2, 500, 0.0333),
  (2, 1000, 0.0333),
  (2, 2000, 0.05),
  (3, 0, 1.2),
  (3, 3000, 1.5);