-- to create a new database
-- CREATE DATABASE js-nodejs-mysql-crud;

-- to use database
-- use js-nodejs-mysql-crud;

-- creating a new table
CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);