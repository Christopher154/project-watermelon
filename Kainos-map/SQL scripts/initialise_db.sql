DROP DATABASE IF EXISTS courses;
CREATE DATABASE IF NOT EXISTS courses;
USE courses;

DROP TABLE IF EXISTS Course;

CREATE TABLE Course (
	id int AUTO_INCREMENT PRIMARY KEY,
	title varchar(100) NOT NULL,
    course_date datetime NOT NULL,
    course_location varchar(25),
    info text NOT NULL
);
