var mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/region', {useNewUrlParser: true});

var city = mongoose.model('city', {
    name_of_city: {
        type: String,
        unique: true,
        require: true
    },
    timezones: Array,
    isCapital: Boolean,
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'country'
   },
})



module.exports = city;

