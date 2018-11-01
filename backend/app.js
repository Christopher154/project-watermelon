const express = require('express');
const app = express();
const db = require('./db.js');

courses = [];

app.get('/', function(req, res){
    updateCourses(function(){
        res.send(courses);
    });
    console.log('Request Processed');
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

