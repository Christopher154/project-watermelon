const express = require('express');
const app = express();
const db = require('./db.js');

courses = [];

app.get('/courses', function(req, res){
    updateCourses(function(){
        res.send(courses);
    });
    console.log('Request Processed');
});

app.get('/courses/:id', (req, res) => {
    db.getCourseById(req.params.id, (course) => {
        console.log(course)
        res.send(course)
    })
})

app.listen(7999, function(){
    console.log('Express Started');
});

function updateCourses(coursesReady){
    db.getCoursesInCourse(function(rows){
        courses = rows;
        coursesReady();
    });
};

