const mongoose = require('mongoose');

const coordinatorSchema = new mongoose.Schema({
    FacultyCoordinatorName: {
        type: String,
        required: true
    },
    FacultyCoordinatorMobile: {
        type: String,
        required: true
    },
    FacultyCoordinatorCollegeId: {
        type: String,
        required: true
    },
    FacultyCoordinatorEmail: {
        type: String,
        required: true
    },
    FacultyCoordinatorImage: {
        type: String,
        required: true
    },
    FacultyCoordinatorCollege: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('coordinator', coordinatorSchema);