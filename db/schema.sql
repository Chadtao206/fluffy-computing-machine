DROP DATABASE IF EXISTS thirty_one_flavors;
CREATE DATABASE thirty_one_flavors;

USE thirty_one_flavors;

CREATE TABLE flavors (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    flavor VARCHAR(30) NOT NULL,
    calories INT NOT NULL,
    price INT NOT NULL
);

CREATE TABLE toppings (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    topping VARCHAR(30) NOT NULL,
    calories INT NOT NULL,
    price INT NOT NULL
);

CREATE TABLE containers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    container VARCHAR(30) NOT NULL
    calories INT NOT NULL,
    price INT NOT NULL
);
