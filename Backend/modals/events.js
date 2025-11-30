


const mongoose = require('mongoose');
const goEvents = new mongoose.Schema({
    // eventCatName: {
    //     type: String,
    //     required: true
    // },
    teamName: {
        type: String,
        required: true
    },
    teamId: {
        type: String,
        required: true
    },
    runTime: {
        type: Array,
    },
    score: {
        type: Array,
        required: true
    },
    lapCount: {
        type: Number
    },
    penalities: {
        type: Array,
        required: true
    }
});
module.exports = mongoose.model('goEvents',goEvents);
