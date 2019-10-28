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
    'One',
    'Great rebate card',
    'Cashback',
    29
  ),
  (
    'Standard Chartered',
    'Unlimited Cashback',
    'What it says in the name',
    'Cashback',
    2
  ),
  (
    'UOB',
    'Lady''s Card',
    'You''ll earn 10X UNI$ (or 20 miles) per S$5 spent on your chosen category(ies) with no minimum spend required.',
    'Rewards',
    20
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
  (1, 2);
INSERT INTO card_rates (card_id, spend_threshold, rate)
VALUES
  -- for cashback card rates --> need min spend $0 and rate = 0% if applicable
  (1, 500, 0.0333),
  (1, 1000, 0.0333),
  (1, 2000, 0.05),
  (2, 0, 0.0015),
  (3, 0, 4),
  (3, 1000, 0),
  (4, 0, 1.2),
  (4, 3000, 1.5);
INSERT INTO users (username, password)
VALUES
  (
    'calvin',
    'a7fe9dcbcafa8559ea3617a3a21af7b8aa06c2badf7322c67c5ee6b6f880cdb1'
  );