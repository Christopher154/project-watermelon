const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'course_admin', 
    password: 'password',
    database: 'courses'
});

db.connect(function(err){
    if(err) throw err;
    console.log("Connected to MySQL");
});

exports.getCoursesInCourse = function(callback){
    db.query(
        "SELECT title, course_date, course_location FROM Course",
        function(err, rows){
            if(err) throw err;
            callback(rows);
        }
    );
}