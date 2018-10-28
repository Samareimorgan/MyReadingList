CREATE DATABASE readinglist_db;

USE readinglist_db;

CREATE TABLE books
(
    id INT (6) AUTO_INCREMENT,
    book_title VARCHAR (200) NOT NULL,
    book_author VARCHAR(150),
    book_info VARCHAR(200),
    complete BOOLEAN DEFAULT false,
    PRIMARY KEY (id)

);