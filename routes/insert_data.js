var app = require('express').Router();
var city = require('../models/cities');
var region = require('../models/regions');
var country = require('../models/country');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));

app.post('/', function (req, res) {
    var reg = new region({
        name: req.body.region,
    });

    reg.save(function (err, result) {
        var count = new country({
            name: req.body.name_of_country,
            alpha2Code: req.body.alpha2code,
            alpha3Code: req.body.alpha3code,
            population: req.body.population,
            latlng: new String(req.body.latlng).split(','),
            area: req.body.area,
            region: result._id,
            
        });

        count.save(function (err, result) {
            var cities = new city({
                name: req.body.name_of_city,
                timezones: new String(req.body.time_zone).split(','),
                isCapital: req.body.iscapital,
                country: result._id,
            });
            cities.save();
        })
    })
});


module.exports = app;