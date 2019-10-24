CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);
CREATE TABLE IF NOT EXISTS expenses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    date_added DATE NOT NULL DEFAULT CURRENT_DATE,
    amount FLOAT,
    category TEXT,
    payment_method TEXT,
    card_id INTEGER
);
CREATE TABLE IF NOT EXISTS cards (
    id SERIAL PRIMARY KEY,
    bank TEXT,
    name TEXT,
    description TEXT,
    type TEXT,
    min_spend INTEGER,
    max_spend INTEGER,
    base_rate FLOAT,
    next_rate FLOAT,
    billing_date INTEGER
);
CREATE TABLE IF NOT EXISTS card_owners (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    card_id INTEGER
);