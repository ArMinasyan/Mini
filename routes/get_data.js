var app = require('express').Router();
var city = require('../models/cities');
var region = require('../models/regions');
var country = require('../models/country');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', function (req, res) {

    city.find({
        name: req.body.name_of_city,
    }, function (err, res) {
        console.log(res[0]);
    }).populate('country',{'_id':0,'__v':0});
});

module.exports=app;
