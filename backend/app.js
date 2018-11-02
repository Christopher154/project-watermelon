const express = require('express');
const app = express();
const db = require('./db.js');

courses = [];

app.get('/courses', function(req, res){
    updateCourses(function(){
        res.send(courses);
    });
});

app.get('/courses/:id', (req, res) => {
    db.getCourseById(req.params.id, (course) => {
        res.send(course)
    })
})

app.listen(7999, function(){
});

function updateCourses(coursesReady){
    db.getCoursesInCourse(function(rows){
        courses = rows;
        coursesReady();
    });
};

