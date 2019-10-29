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
INSERT INTO cards (
    bank,
    name,
    description,
    type,
    category_based,
    max,
    unit
  )
VALUES
  (
    'UOB',
    'One',
    'Great rebate card',
    'Rebate',
    false,
    100,
    '$',
    'https://images.contentstack.io/v3/assets/bltc05b5aa7ae1c3a47/blt79eb73bac8e08ada/5c52b703da4c5b970f6f1820/UOBOneCard.png?width=178&height=112&auto=webp'
  ),
  (
    'Standard Chartered',
    'Unlimited Cashback',
    'What it says in the name',
    'Cashback',
    false,
    0,
    '$',
    'https://images.contentstack.io/v3/assets/bltc05b5aa7ae1c3a47/blt4d5280b5b3eb1fa9/5c52b6f8d626b8290a8e50aa/StandardCharteredUnlimitedMasterCard.png?width=178&height=112&auto=webp'
  ),
  (
    'HSBC',
    'Advance',
    'a really advanced card from HSBC',
    'Cashback',
    false,
    70,
    '$',
    'https://images.contentstack.io/v3/assets/bltc05b5aa7ae1c3a47/bltf53fdbcd58ea2fce/5d48c6d0f9ece57fa9a823bf/HSBCAdvanceCreditCard.png?width=178&height=112&auto=webp'

  ),
  (
    'OCBC',
    '365',
    'a card you can use for as many days as its name',
    'Cashback',
    true,
    80,
    '$',
    'https://images.contentstack.io/v3/assets/bltc05b5aa7ae1c3a47/blt73c89b003e63cdda/5c52b6ddb7efe88b0c90d275/OCBC365CreditCard.png?width=178&height=112&auto=webp'
  );
-- (
  --   'UOB',
  --   'Lady''s Card',
  --   'You''ll earn 10X UNI$ (or 20 miles) per S$5 spent on your chosen category(ies) with no minimum spend required.',
  --   'Rewards',
  --   20
  -- ),
  -- (
  --   'Citi',
  --   'PremierMiles',
  --   'Great foreign currency earnings',
  --   'Rewards',
  --   7
  -- );
INSERT INTO card_owners (user_id, card_id)
VALUES
  (1, 1),
  (1, 2);
  -- for cashback card rates --> need min spend $0 and rate = 0% if applicable
INSERT INTO card_rates (card_id, spend_threshold, rate)
VALUES
  (1, 500, 3.33),
  (1, 1000, 3.33),
  (1, 2000, 5),
  (2, 0, 1.5),
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