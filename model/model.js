// name phone sum_of_rating total_num_of_rating 
const mongoose = require('mongoose');
const db = require('../config/db');

const objectSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    reviewSum: {
        type: Number,
        require: true
    },
    reviewCount: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('objects', objectSchema);