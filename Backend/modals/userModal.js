
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName:{
        type: String,
    },
    userRoll: {
        type: String,
    },
    userImage:{
        type: String,
    },
    userEmail: {
        type: String,
    },
    userMobile:{
        type: Number,
    },
});
module.exports = mongoose.model('userData',userSchema);
