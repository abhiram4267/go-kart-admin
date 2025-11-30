const mongoose = require('mongoose');

const StudentcoordinatorSchema = new mongoose.Schema({
    StudentCoordinatorName: {
        type: String,
        required: true
    },
    StudentCoordinatorMobile: {
        type: String,
        required: true
    },
    StudentCoordinatorCollegeId: {
        type: String,
        required: true
    },
    StudentCoordinatorEmail: {
        type: String,
        required: true
    },
    StudentCoordinatorCollege: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('StudentCoordinators', StudentcoordinatorSchema);