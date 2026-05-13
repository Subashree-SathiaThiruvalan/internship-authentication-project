CREATE DATABASE internship;

USE internship;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    age INT,
    dob DATE,
    contact VARCHAR(15)
);