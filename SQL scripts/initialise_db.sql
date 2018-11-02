DROP DATABASE IF EXISTS courses;
CREATE DATABASE IF NOT EXISTS courses;
USE courses;

CREATE TABLE Course (
	id int AUTO_INCREMENT PRIMARY KEY,
	title varchar(100) NOT NULL,
    course_date date NOT NULL,
    course_location varchar(25) NOT NULL,
    info text NOT NULL,
    trainer_name varchar(50) NOT NULL,
    audience varchar(100) NOT NULL,
    duration varchar(20) NOT NULL
);

INSERT INTO Course (title, course_date, course_location, info, trainer_name, audience, duration) VALUES 
("Coaching Foundation",	'2019-04-13', "Belfast", "For those who coach", "Trainer McTrainee", "Senior Associate +", "4 hours"),
("Kimble Basics", '2019-07-30', "Derry-Londonderry", "the basics of kimble", "Kimbley Garends", "Anyone", "2 hours"),
("Performance Testing; Introduction to jmeter", '2019-01-15', "Belfast", "jmeter introduction", "Trainer McTrainee", "Trainee +", "3 hours"),
("Crucial Conversations", '2018-12-04', "Gdansk", "For people managers - conversations that are crucial", "Chattington McDonald", "Manager +", "2 hours"),
("Kimble Advanced", '2019-08-25', "Derry-Londonderry", "the advanced teachings of kimble", "Kimbley Garends", "Associate +", "6 hours"),
("Kimble Basics", '2019-07-11', "London", "the basics of kimble", "Trainer McTrainee", "Anyone", "2 hours")