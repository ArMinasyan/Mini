var mongoose = require('mongoose');


var country = mongoose.model('country', {
    name_of_country: {
        type: String,
        unique: true,
        require: true
    },
    alpha2Code: {
        type: String,
        unique: true,
        require: true
    },
    alpha3Code: {
        type: String,
        unique: true,
        require: true
    },
    population: Number,
    latlng: Array,
    area: Number,
    region: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'regions'
    },
})


module.exports = country;