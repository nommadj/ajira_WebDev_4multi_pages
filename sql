CREATE DATABASE tech_company;
USE tech_company;

CREATE TABLE users (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(50)
);
