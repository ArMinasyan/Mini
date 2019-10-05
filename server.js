var server = require('http');
var app=require('express')();
var i=require('./routes/insert_data.js');
var insert=require('./routes/insert_data');
var get=require('./routes/get_data');
//var update=require('./routes/update_data');

app.use('/insert',insert);
app.use('/get',get);
//app.use('/update',update);
server.createServer(app,function (req, res) {}).listen(8080, function () {
    console.log('Start...');
});


