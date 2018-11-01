DROP DATABASE IF EXISTS courses;
CREATE DATABASE IF NOT EXISTS courses;
USE courses;

CREATE TABLE Course (
	id int AUTO_INCREMENT PRIMARY KEY,
	title varchar(100) NOT NULL,
    course_date date NOT NULL,
    course_location varchar(25),
    info text NOT NULL
);

INSERT INTO Course (title, course_date, course_location, info) VALUES 
("Coaching Foundation",	'2019-04-13', "Belfast", "For those who coach (Snr Associate +)"),
("Kimble Basics", '2019-07-30', "Derry-Londonderry", "the basics of kimble"),
("Performance Testing; Introduction to jmeter", '2019-01-15', "Belfast", "jmeter introduction"),
("Crucial Conversations", '2018-12-04', "Gdansk", "For people managers - conversations that are crucial"),
("Kimble Advanced", '2019-08-25', "Derry-Londonderry", "the advanced teachings of kimble"),
("Kimble Basics", '2019-07-11', "London", "the basics of kimble")