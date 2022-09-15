DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_event VARCHAR(20) NOT NULL,
  price NUMERIC(100, 2) NOT NULL,
  details VARCHAR(500) NOT NULL,
  club_event VARCHAR(500) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  nick_name VARCHAR(20) NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_user TEXT NOT NULL
);