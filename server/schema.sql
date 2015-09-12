CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  message TEXT,
  user_id INT(11) NOT NULL,
  roomname VARCHAR(200) NOT NULL,
  INDEX(user_id),
  INDEX(room_id)
);

/* Create other tables and define schemas for them here! s*/
CREATE TABLE users (
  id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(200) NOT NULL
);

CREATE TABLE rooms (
  id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  roomname VARCHAR(200) NOT NULL
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

