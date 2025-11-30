const express = require('express');
const Route = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { AddFacultyCoordinator, ViewFacultyCoordinator, EditFacultyCoordinator, DeleteFacultyCoordinator, AddStudentCoordinator, ViewStudentCoordinator, EditStudentCoordinator, DeleteStudentCoordinator, AddEvent, ViewEvent, EditEvent, DeleteEvent, GetGokartTeams, GetGokartTeamsCount, GetRevenue, CollegeWiseCount, AddLiveScore, ViewLiveScore, EditLiveScore, LiveCards, GetAllTeamDetails, TeamWisePayments, AddTeamInstallment } = require('../controller/Coordinators');


const publicDirectory = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDirectory)) {
  fs.mkdirSync(publicDirectory);
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, publicDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });


Route.post('/api/add-Faculty-coordinator', upload.single('cordinatorImage'), AddFacultyCoordinator);

Route.get('/api/view-Faculty-Coordinator', ViewFacultyCoordinator);

Route.put('/api/edit-Faculty-Coordinator', upload.single('cordinatorImage'), EditFacultyCoordinator);

Route.delete('/api/delete-Faculty-Coordinator/:Id', DeleteFacultyCoordinator);





Route.post('/api/add-Student-Coordinator', AddStudentCoordinator);

Route.get('/api/view-Student-Coordinator', ViewStudentCoordinator);

Route.put('/api/edit-Student-Coordinator', EditStudentCoordinator);

Route.delete('/api/delete-Student-Coordinator/:Id', DeleteStudentCoordinator);




Route.post('/api/add-Event-Category', upload.single('eventCatImage'), AddEvent);

Route.get('/api/view-Event-Category', ViewEvent);

Route.put('/api/edit-Event-Category', upload.single('eventCatImage'), EditEvent);

Route.delete('/api/delete-Event-Category/:Id', DeleteEvent);



Route.get('/api/get-Team-Details', GetGokartTeams);


Route.get('/api/get-Teams-Count', GetGokartTeamsCount);

Route.get('/api/get-Total-Revenue', GetRevenue);

Route.get('/api/get-College-Wise', CollegeWiseCount);

Route.get('/api/get-Team-Payments', TeamWisePayments);

Route.post('/api/Update-Team-Payment', AddTeamInstallment);


Route.post('/api/add-Live-Score', AddLiveScore);

Route.get('/api/view-Live-Score', ViewLiveScore);

Route.put('/api/edit-Live-Score', EditLiveScore);


Route.get('/api/get-AllTeams-Details', GetAllTeamDetails);

Route.get('/api/get-Teams-Scores', LiveCards);

module.exports = Route;
