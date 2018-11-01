const express = require('express');
const app = express();
const db = require('./db.js');

courses = [];

app.get('/courses', function(req, res){
    updateCourses(function(){
        res.send(courses);
    });
    console.log('GET courses request processed');
});

app.post('/employee', function(req, res){
    db.addEmployee(req.body)
    console.log('POST employee request processed');
});

app.listen(7999, function(){
    console.log('Express Started');
});

function updateCourses(coursesReady){
    db.getCoursesInCourse(function(rows){
        courses = rows;
        coursesReady();
    });
};

