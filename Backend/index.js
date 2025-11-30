
const express = require('express')
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
// const multer = require('multer');
const path = require('path');

// const userRouter = require('./routers/userRouter');
const Route = require('./routers/CoordinatorRoute');


app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cors());
// app.use(multer);
app.use(bodyparser.json());
app.use(express.json());

const mongoDbUrl = "mongodb+srv://kart:kart123@cluster0.gpvoj.mongodb.net/";
mongoose.connect(mongoDbUrl)
.then(() => {
    console.log('DB connected successfully');
}).catch((er) => {
    console.log(er)
})

app.use('/', Route);

app.get('/get-user-data', (req,res) => {
    res.send('data get success');
})

app.post('/add-user', (req,res) => {
    const user = req.body;
    console.log(user);
    res.send('user added');
})

app.listen(7000, () => {
    console.log('my server running at port 7000');
});
