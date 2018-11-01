DROP DATABASE IF EXISTS courses;
CREATE DATABASE IF NOT EXISTS courses;
USE courses;

CREATE TABLE Course (
	id int AUTO_INCREMENT PRIMARY KEY,
	title varchar(100) NOT NULL,
    course_date date NOT NULL,
    course_location varchar(25),
    info text NOT NULL,
    attendees int DEFAULT 0
);

CREATE TABLE Employee (
	id int AUTO_INCREMENT PRIMARY KEY,
	employee_name varchar(50) NOT NULL,
    email varchar(100) NOT NULL
);

CREATE TABLE Course_Employee (
	courseID int,
	employeeID int,
	CONSTRAINT PK_CourseEmployee PRIMARY KEY(courseID, employeeID), 
	CONSTRAINT FK_courseID FOREIGN KEY (courseID) REFERENCES Course(id),
	CONSTRAINT FK_employeeID FOREIGN KEY (employeeID) REFERENCES Employee(id)
);

