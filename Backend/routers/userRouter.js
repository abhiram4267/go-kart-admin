
const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');
const { AddFacultyCoordinator } = require('../controller/Coordinators');

const multer = require('multer');
const fs = require('fs');
const path = require('path');

const imagesPath = path.join(__dirname, '..', 'public', 'userImages');
if(!fs.existsSync(imagesPath)){
    fs.mkdirSync(imagesPath, {recursive: true});
}
const demoStorage = multer.diskStorage({
    destination: function(req, file, cb){
        console.log("imgpath", imagesPath);
        cb(null, imagesPath);
    },
    filename: function(req, file, cb){
        console.log("filename", file.originalname);
        cb(null, file.originalname);
    }
});
const uploadImage = multer({storage: demoStorage}).single("userImage");

// router.post('/add-user', uploadImage, userController.AddUser);
// router.get('/get-all-data', userController.getOvearallData);
// router.get('/get-user/:userId', userController.GetUserByID);
// router.get('/get-user-by-roll/:rollnumber', userController.getUserDataByRoll);
// router.put('/update-user/:userId', userController.updateUserById);
// router.delete('/delete-user-byid/:userId', userController.deleteUserById);


module.exports = router;
