CREATE DATABASE readinglist_db;

USE readinglist_db;

CREATE TABLE books
(
    id INT (6) AUTO_INCREMENT,
    book_title VARCHAR (200) NOT NULL,
    complete BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)

);

USE readinglist_db;
SELECT * FROM books;
