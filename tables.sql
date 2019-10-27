CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT,
  password TEXT
);
CREATE TABLE IF NOT EXISTS expenses (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  date DATE,
  amount FLOAT,
  category TEXT,
  payment_method TEXT,
  card_id INTEGER
);
CREATE TABLE IF NOT EXISTS cards (
  id SERIAL PRIMARY KEY,
  bank TEXT,
  name TEXT UNIQUE,
  description TEXT,
  type TEXT,
  billing_date INTEGER,
  max INTEGER
);
CREATE TABLE IF NOT EXISTS card_owners (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  card_id INTEGER
);
CREATE TABLE IF NOT EXISTS card_rates (
  id SERIAL PRIMARY KEY,
  card_id INTEGER,
  spend_threshold INTEGER,
  rate FLOAT
);