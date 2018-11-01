const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'conor', 
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

exports.addEmployee = function(data){
    db.query('INSERT INTO Employees (name, email) VALUES (?)', data, function(error, results, fields){
        if(err) throw error;
        console.log();
    })
};