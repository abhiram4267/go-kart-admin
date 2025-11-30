

const mongoose = require('mongoose');
const goEventCategory = new mongoose.Schema({
    eventCatName: {
        type: String,
        required: true
    },
    eventCatDate: {
        type: String,
        required: true
    },
    eventCatTime: {
        type: String,
        required: true
    },
    eventCatImage: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('goEventCategory',goEventCategory);
