DROP DATABASE IF EXISTS contactsdb;
CREATE DATABASE contactsdb;

\c contacts;

DROP TABLE IF EXISTS contacts;
CREATE TABLE contacts (
  id serial PRIMARY KEY,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  telephone_number varchar(255) NOT NULL,
  date_of_birth varchar(255),
  eye_color varchar(255)
);
