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
    title TEXT,
    description TEXT,
    rules TEXT,
    bank TEXT,
    billing_date INTEGER
);