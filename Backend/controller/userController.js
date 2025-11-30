
const goEventCategory = require('../modals/eventCategory');
const goEvent = require('../modals/events');

const AddEventCatagory = async(req, res) => { 
   
    const eventCatData = req.body;

    const newUser = new goEventCategory(eventCatData);
    newUser.save()
    .then((result) => {
        res.status(201).json({user: result, response: 'go-Event-Category added'});
    }).catch((er) => {
        res.status(500).json({error: er});
    })
};

const getOvearallEventCatData = async(req, res) => {
    await goEventCategory.find().
    then((result) => {
        res.status(201).json(result);
    }).catch((er) => {
        res.status(500).json(er);
    })
}

const AddGoEvent = async(req, res) => { 
   
    const eventData = req.body;
    const newUser = new goEvent(eventData);
    newUser.save()
    .then((result) => {
        res.status(201).json({user: result, response: 'go-Event-Category added'});
    }).catch((er) => {
        res.status(500).json({error: er});
    })
};

const getOvearallEventData = async(req, res) => {
    await goEvent.find().
    then((result) => {
        res.status(201).json(result);
    }).catch((er) => {
        res.status(500).json(er);
    })
}

const GetUserByID = async(req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    await userData.findById({"_id": userId}).
    then((result) => {
        res.status(201).json(result);
    }).catch((er) => {
        res.status(500).json(er);
    })
};

const getUserDataByRoll = async(req, res) => {
    const userRoll = req.params.rollnumber;
    await userData.findOne({"userRoll": userRoll}).
    then((result) => {
        res.status(201).json(result);
    }).catch((er) => {
        res.status(500).json(er);
    })
}

const updateUserById = async(req, res) => {
    const userId = req.params.userId;
    console.log(req.body);
    await userData.findByIdAndUpdate({"_id": userId}, req.body)
    .then((result) => {
        res.status(200).json({"result": "user updated"});
    }).catch((er) => {
        res.status(500).json(er);
    }) 
}

const deleteUserById = async (req, res) => {
    const userId = req.params.userId;
    await userData.findByIdAndDelete({"_id" : userId})
    .then((result) => {
        res.status(200).json({"result": "user deleted"});
    }).catch((er) => {
        res.status(500).json(er);
    })
}   


exports.AddEventCatagory = AddEventCatagory;
exports.AddGoEvent = AddGoEvent;
exports.getOvearallEventData = getOvearallEventData;
exports.getUserDataByRoll = getUserDataByRoll;
exports.updateUserById = updateUserById;
exports.deleteUserById = deleteUserById;

