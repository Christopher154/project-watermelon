const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('hi');
    console.log('Request Processed');
});

app.listen(7999, function(){
    console.log('Express Started');
});
