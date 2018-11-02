const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'chris', 
    password: 'password',
    database: 'courses'
});

db.connect(function(err){
    if(err) throw err;
    console.log("Connected to MySQL");
});

exports.getCoursesInCourse = function(callback){
    db.query(
        "SELECT * FROM Course",
        function(err, rows){
            if(err) throw err;
            callback(rows);
        }
    );
}

exports.getCourseById = function(id, callback){

    console.log(id)
    db.query(
        "SELECT * FROM Course WHERE id = ?",
        id,
        function(err, rows){
            if(err) throw err;
            console.log(rows)
            callback(rows);
        }
    )
}