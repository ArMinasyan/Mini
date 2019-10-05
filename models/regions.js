var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/region', {useNewUrlParser: true});

var region = mongoose.model('region', {
    name_of_region: {
        type: String,
        unique: true,
        require: true
    },
})

module.exports = region;