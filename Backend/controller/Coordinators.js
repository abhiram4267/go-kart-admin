
const fs = require('fs');
const path = require('path'); 

const AddCoordinator = require('../modals/Coordinator');
const goEventCategory = require('../modals/eventCategory');
const Studentcoordinator = require('../modals/StudentCoordinator');
const GokartTeams = require('../modals/GoKartTeams')
const events = require('../modals/events');
const payments = require('../modals/Payments');


//Faculty-Coordinator Controllers
const AddFacultyCoordinator = async (req, res) => {
  const { cordinatorName, cordinatorId, cordinatorCollege, cordinatorPhone, cordinatorEmail } = req.body;
  const cordinatorImage = req.file ? req.file.filename : '';

  const coordinatorData = {
    FacultyCoordinatorName: cordinatorName,
    FacultyCoordinatorMobile: cordinatorPhone,
    FacultyCoordinatorCollegeId: cordinatorId,
    FacultyCoordinatorEmail: cordinatorEmail,
    FacultyCoordinatorImage: cordinatorImage,
    FacultyCoordinatorCollege: cordinatorCollege,
  };

  console.log(coordinatorData);

  try {
    const newUser = new AddCoordinator(coordinatorData);
    const result = await newUser.save();
    res.status(201).json({ user: result, response: 'Coordinator added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error while adding coordinator' });
  }
};


const ViewFacultyCoordinator = async(req, res) => {
  try{
    const FacultyData = await AddCoordinator.find();
    const FacultyArray = FacultyData.map(faculty => ({
      FacultyCoordinatorName: faculty.FacultyCoordinatorName,
      FacultyCoordinatorMobile: faculty.FacultyCoordinatorMobile,
      FacultyCoordinatorCollegeId: faculty.FacultyCoordinatorCollegeId,
      FacultyCoordinatorEmail: faculty.FacultyCoordinatorEmail,
      FacultyCoordinatorImage: faculty.FacultyCoordinatorImage,
      FacultyCoordinatorCollege: faculty.FacultyCoordinatorCollege,
      _id: faculty._id
    }));

    res.status(200).json({Success: true, data : FacultyArray});
  }
  catch{
    res.status(500).json({success: false, message: "Error in fetching data", error : error.message});
  }
}


const EditFacultyCoordinator = async (req, res) => {
  const { cordinatorName, cordinatorId, cordinatorCollege, cordinatorPhone, cordinatorEmail, _id } = req.body;
  const cordinatorImage = req.file ? req.file.filename : null;

  try {
    const coordinator = await AddCoordinator.findById(_id);
    
    if (!coordinator) {
      return res.status(404).json({ success: false, message: "Faculty Coordinator not found" });
    }
    if (cordinatorImage) {
      if (coordinator.FacultyCoordinatorImage) {
        const oldImagePath = path.join(__dirname, '..', 'public', coordinator.FacultyCoordinatorImage);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      coordinator.FacultyCoordinatorImage = cordinatorImage;
    }

    coordinator.FacultyCoordinatorName = cordinatorName || coordinator.FacultyCoordinatorName;
    coordinator.FacultyCoordinatorCollegeId = cordinatorId || coordinator.FacultyCoordinatorCollegeId;
    coordinator.FacultyCoordinatorCollege = cordinatorCollege || coordinator.FacultyCoordinatorCollege;
    coordinator.FacultyCoordinatorMobile = cordinatorPhone || coordinator.FacultyCoordinatorMobile;
    coordinator.FacultyCoordinatorEmail = cordinatorEmail || coordinator.FacultyCoordinatorEmail;


    const updatedCoordinator = await coordinator.save();
    res.status(200).json({ success: true, message: 'Faculty Coordinator updated successfully', data: updatedCoordinator });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error updating Faculty Coordinator", error: error.message });
  }
};


const DeleteFacultyCoordinator = async(req, res) => {
  const { Id } = req.params;

  console.log(Id);
  try{
    const DeleteFaculty = await AddCoordinator.findByIdAndDelete(Id);
    if(!DeleteFaculty){
      return res.status(404).json({ success: false, message: "Faculty Coordinator not found" });
    }

    res.status(200).json({ success: true, message: "Faculty Coordinator deleted successfully" });
  }
  catch{
    res.status(500).json({success: false, message: "Error in deleting data"});
  }
}





//Student-Coordinator Controllers
const AddStudentCoordinator = async (req, res) => {
  const { studentCordinatorName, studentCordinatorId, studentCordinatorCollege, studentCordinatorPhone, studentCordinatorEmail } = req.body;

  const coordinatorData = {
    StudentCoordinatorName: studentCordinatorName,
    StudentCoordinatorMobile: studentCordinatorPhone,
    StudentCoordinatorCollegeId: studentCordinatorId,
    StudentCoordinatorEmail: studentCordinatorEmail,
    StudentCoordinatorCollege: studentCordinatorCollege,
  };

  console.log(coordinatorData);

  try {
    // Create new coordinator record
    const newUser = new Studentcoordinator(coordinatorData);
    const result = await newUser.save();
    res.status(201).json({ user: result, response: 'Student Coordinator added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error while adding coordinator' });
  }
};

const ViewStudentCoordinator = async(req, res) => {
  try{
    const StudentData = await Studentcoordinator.find();
    const StudentsArray  = StudentData.map(Student => ({
      studentCordinatorName : Student.StudentCoordinatorName,
      studentCordinatorId: Student.StudentCoordinatorCollegeId,
      studentCordinatorEmail: Student.StudentCoordinatorEmail,
      studentCordinatorCollege: Student.StudentCoordinatorCollege,
      studentCordinatorPhone: Student.StudentCoordinatorMobile,
      _id: Student._id
    }))

    res.status(200).json({Success: true, data : StudentsArray});
  }
  catch{
    res.status(500).json({success: false, message: "Error in fetching data", error : error.message});
  }
}

const EditStudentCoordinator = async (req, res) => {
  const { studentCordinatorName, studentCordinatorId, studentCordinatorCollege, studentCordinatorPhone, studentCordinatorEmail, id } = req.body;

  try {
    const Student = await Studentcoordinator.findByIdAndUpdate(id);

    if(!Student){
      res.status(404).json({success: false, message: "Student Not Found"});
    }

    Student.StudentCoordinatorName = studentCordinatorName || Student.StudentCoordinatorName;
    Student.StudentCoordinatorCollege = studentCordinatorCollege || Student.StudentCoordinatorCollege;
    Student.StudentCoordinatorCollegeId = studentCordinatorId || Student.StudentCoordinatorCollegeId;
    Student.StudentCoordinatorMobile = studentCordinatorPhone || Student.StudentCoordinatorMobile;
    Student.StudentCoordinatorEmail = studentCordinatorEmail || Student.StudentCoordinatorEmail;

    const updatedStudent = await Student.save();
    res.status(200).json({ success: true, message: 'Student Coordinator updated successfully', data: updatedStudent });
  }
  catch {
    res.status(500).json({success: false, message: 'Not Updated the Student'});
  }

};

const DeleteStudentCoordinator = async(req, res) => {
  const { Id } = req.params;
  try{
    const Student = await Studentcoordinator.findByIdAndDelete(Id);
    if(!Student){
      res.status(404).json({success: false, message: "No Student Coordinator Found"});
    }
    res.status(200).json({success: true, message: "Student Deleted Successfully"});
  }
  catch{
    res.status(500).json({success: false, message: "No Id found to Delete"});
  }
}


//Event Category Controllers

const AddEvent = async(req, res) => {
  const { eventCatName, eventCatDate, eventCatTime } = req.body;


  const eventCatImage = req.file ? req.file.filename : null;

  console.log(eventCatName, eventCatDate, eventCatTime, eventCatImage);

  try {
    const newEvent = new goEventCategory({ eventCatName, eventCatDate, eventCatTime, eventCatImage });

    console.log(newEvent);
    const result = await newEvent.save();
    res.status(201).json({ user: result, response: 'Event-Category added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error while adding Event-Category' });
  }
}


const ViewEvent = async(req, res) => {
  try{
    const EventData = await goEventCategory.find();
    res.status(200).json({Success: true, data : EventData});
  }
  catch{
    res.status(500).json({success: false, message: "Error in fetching data", error : error.message});
  }
}


// const EditEvent = async(req, res) => {


//   const UpdatedData = req.body;
//   console.log(UpdatedData.id, UpdatedData.eventCatImage, UpdatedData.eventCatName, UpdatedData.eventCatTime, UpdatedData.eventCatImage);

//   try {
//     const Event = await goEventCategory.updateOne(
//       { _id: UpdatedData.id },
//       { 
//         $set: {
//           eventCatName: UpdatedData.eventCatName,
//           eventCatDate: UpdatedData.eventCatDate,
//           eventCatTime: UpdatedData.eventCatTime,
//           eventCatImage: UpdatedData.eventCatImage
//         }
//       }
//     );

//     if(Event){
//       res.status(201).json({success: true, message: "Event Updated Successfully"});
//     }
//   }
//   catch{
//     res.status(500).json({success: false, message: "Error in updating data"});
//   }
// }



const EditEvent = async (req, res) => {
  const { eventCatName, eventCatDate, eventCatTime, id } = req.body;
  const eventCatImage = req.file ? req.file.filename : null;

  try {
    const existingEvent = await goEventCategory.findById(id);
    
    if (!existingEvent) {
      return res.status(404).json({ success: false, message: "Event Category not found" });
    }

    if (eventCatImage) {
      if (existingEvent.eventCatImage) {
        const oldImagePath = path.join(__dirname, '..', 'public', existingEvent.eventCatImage);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      existingEvent.eventCatImage = eventCatImage;
    }

    existingEvent.eventCatName = eventCatName || existingEvent.eventCatName;
    existingEvent.eventCatDate = eventCatDate || existingEvent.eventCatDate;
    existingEvent.eventCatTime = eventCatTime || existingEvent.eventCatTime;

    const updatedEvent = await existingEvent.save();
    
    return res.status(200).json({
      success: true,
      message: "Event Updated Successfully",
      data: updatedEvent
    });

  } catch (error) {
    console.error("Error in updating event:", error);
    res.status(500).json({ success: false, message: "Error in updating event", error: error.message });
  }
};



const DeleteEvent = async(req, res) => {
  const { Id } = req.params;
  try{
    const Event = await goEventCategory.findByIdAndDelete(Id);
    if(Event){
      res.status(201).json({success: true, message: "Event Deleted Successfully"});
    }
    else{
      res.status(404).json({success: false, message: "Event Not Found"});
    }
  }
  catch {
    res.status(500).json({success: false, message: "Error in deleting data"});
  }
}


// const AddTeamImages = async(req, res) => {
//   const Image = req.file ? req.file.filename : "";
//   if(Image) {
//     res.status(200).json({success : true, data : Image});
//   }
//   else{
//     res.status(500).json({success: false, message : "No Image Uploaded"});
//   }
// } 






const GetGokartTeams = async(req, res) => {
  try{
    const Teams = await GokartTeams.find();
    res.status(200).json({Success: true, data : Teams});
  }
  catch{
    res.status(500).json({success: false, message: "Error in fetching data", error : error.message});
  }
}


//DashBoard Info

const GetGokartTeamsCount = async(req, res) => {
  try {
    const Teams = await GokartTeams.aggregate([
      {
        $match : {}
      },
      {$count : "string"},
    ])
    res.status(200).json({ success: true, Teams });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error in fetching data", error: error.message });
  }
}

const GetRevenue = async(req, res) => {
  try{
    const Revenue = await payments.aggregate([
      {
        $addFields: {
          totalAmount: {
            $add: [
              "$amount",
              { $ifNull: ["$secondinstallment", 0] }  // If secondinstallment doesn't exist, treat it as 0
            ]
          }
        }
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalAmount" }
        }
      }
    ])
    res.status(201).json({ success: true, Revenue });
  }
  catch{
    res.status(500).json({success: false, message: "Error in fetching data", error : error.message});
  }
}

const CollegeWiseCount = async(req, res) => {
  try {
    const CollegeWise = await GokartTeams.aggregate([
      {
        $group: {
          _id: "$collegeName",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      }
    ])

    res.status(201).json({ success: true, CollegeWise });
  }
  catch {
    res.status(500).json({success: false, message: "Error in fetching data", error : error.message});
  }
}




//TeamWise payments Records

const TeamWisePayments = async(req, res) => {
  try {
    const TeamPaymentHistory = await payments.find();

    const formatedDate = (date) =>{
      const [day, month, year] = date.split('/');
      // console.log(`${year}-${month}-${day}`);
      return day;
    }

    const DeepHistory = await TeamPaymentHistory.map((item) => {
      console.log(item.secondinstallment);  // For debugging

      const Total_Paid_Amount = item.secondinstallment ? item.amount + item.secondinstallment : item.amount;
    
      return {
        _id: item.teamCode,
        teamName: item.teamName,
        couponCode: item.coupnCode,
        amount: Total_Paid_Amount,
        installment: item.secondinstallment || 0,  
        createdAt: item.createdAt.split(',')[0],
        // remainAmount: (formatedDate(item.createdAt.split(',')[0]) - '0') <= 6 ? 22500 - Total_Paid_Amount : 25000 - Total_Paid_Amount
        remainAmount: 22500 - Total_Paid_Amount,
      };
    });
    
    
    
    res.status(201).json({success: true, TeamPaymentHistory : DeepHistory});
  }
  catch {
    res.status(500).json({success: false, message: "Error in fetching data", error : error.message});
  }
}


const AddTeamInstallment = async(req, res) => {
  const { teamId, paymentAmount } = req.body;
    
  try {
    const Team = await payments.updateOne(
      { teamCode: teamId },  // filter to match the document
      [
        {
          $set: {
            secondinstallment: {
              $cond: {
                if: { 
                  $in: [
                    { $type: "$secondinstallment" }, 
                    ["int", "double"]
                  ] 
                },
                then: { $add: ["$secondinstallment", Number(paymentAmount)] },
                else: Number(paymentAmount)
              }
            }
          }
        }
      ]
    );
    
    
    console.log(Team);
    if(Team) {
      res.status(201).json({success: true, message: "Payment Added Successfully"});
    }
  }
  catch {
    res.status(500).json({success: false, message: "Error in adding data", error : error.message});
  }
}

//Event Scores Adder

// const AddLiveScore = async(req, res) => {
//   const { EventName, Laps, Penality, Score, TeamID, TeamName, Time } = req.body;
//   const NewData = {
//     eventCatName : EventName,
//     lapCount : Laps,
//     penalities : Penality,
//     score : Score,
//     teamId : TeamID,
//     teamName : TeamName,
//     runTime : Time
//   }

//   try {
//     const data = await events(NewData);
//     const result = await data.save();
//     res.status(201).json({ user: result, response: 'added successfully' });
//   }
//   catch {
//     res.status(500).json({ user: result, response: 'Error in adding data' });
//   }
// }



const AddLiveScore = async(req, res) => {
  const { EventName, Laps, Penality, Score, TeamID, TeamName, Time } = req.body;

  console.log(EventName, Laps, Penality, Score, TeamID, TeamName, Time);

  const newScore = {[EventName] : Score};
  const newPenality = {[EventName] : Penality};
  const NewData = {
    lapCount : Laps,
    teamId : TeamID,
    teamName : TeamName,
    runTime : Time !== '' ? [{[EventName] : Time}] : []
  }

  try {
    const data = await events.findOne({teamId : TeamID});
    if(data){
      data.score.push(newScore);
      data.penalities.push(newPenality);
      if(Laps !== ''){
        data.lapCount = Laps
      }
      if(Time !== ''){
        const newTime = {[EventName] : Time};
        data.runTime.push(newTime);
      }
      const result = await data.save();
      res.status(201).json({ user: result, response: 'Added successfully' });
    }
    else{
      NewData.score = [newScore];
      NewData.penalities = [newPenality];
      const newEvent = new events(NewData);
      const result = await newEvent.save();
      res.status(201).json({ user: result, response: 'team added successfully' });
    }
  }
  catch {
    res.status(500).json({ response: 'Error in adding data' });
  }
}


const ViewLiveScore = async(req, res) => {
  try {
    const TeamsScore = await events.find();
    res.status(201).json({ success: true, TeamsScore });
  }
  catch {
    res.status(500).json({success: false, message: "Error in fetching data", error : error.message});
  }
}


const EditLiveScore = async (req, res) => {
  const { eventName, teamName, teamId, score, runTime, penality, laps } = req.body;
  console.log(eventName, teamName, teamId, score, runTime, penality, laps);

  try {
    const data = await events.findOne({ teamId: teamId });
    
    if (data) {
      const scoreIndex = data.score.findIndex(item => Object.keys(item)[0] === eventName);
      if (scoreIndex !== -1) {
        data.score[scoreIndex][eventName] = score;
      } else {
        data.score.push({ [eventName]: score });
      }

      const penaltyIndex = data.penalities.findIndex(item => Object.keys(item)[0] === eventName);
      if (penaltyIndex !== -1) {
        data.penalities[penaltyIndex][eventName] = penality;
      } else {
        data.penalities.push({ [eventName]: penality });
      }

      if (laps !== '') {
        data.lapCount = laps;
      }

      if (runTime !== '') {
        const runTimeIndex = data.runTime.findIndex(item => Object.keys(item)[0] === eventName);
        if (runTimeIndex !== -1) {
          data.runTime[runTimeIndex][eventName] = runTime;
        } else {
          data.runTime.push({ [eventName]: runTime });
        }
      }

      console.log(data);

      const result = await events.findOneAndUpdate(
        { teamId: teamId },
        {
          $set: {
            score: data.score,
            penalities: data.penalities,
            lapCount: data.lapCount,
            runTime: data.runTime
          },
        },
        { new: true }
      );
      
      res.status(200).json({ user: result, response: 'Updated successfully' });
    } else {
      res.status(404).json({ response: 'Team not found' });
    }
  } catch (error) {
    console.error('Error updating live score:', error);
    res.status(500).json({ response: 'Error in updating data' });
  }
};



//Get Team Complete Details for the Excel Download

const GetAllTeamDetails = async(req, res) => {
  try {
    const TeamDetails = await GokartTeams.find();
    res.status(201).json({ success: true, TeamDetails });
  }
  catch {
    res.status(500).json({success: false, message: "Error in fetching data", error : error.message});
  }
}


//Display Team and Driver Details in the Live while Event is running

const LiveCards = async(req, res) => {
  try {
    const TeamsScore = await events.find();
    
    const Data = await Promise.all(TeamsScore.map(async (score) => {

        const TeamDetails = await GokartTeams.findOne({
            uniqueTeamCode: score.teamId
        }, { collegeName: 1, profileFile: 1, teamMembers : 1 });

        console.log(TeamDetails);
        const DriverDetails =  TeamDetails.teamMembers.find((member) => member.driver === true);

        const total_score = score.score.reduce((sum, item) => {
          const value = Object.values(item)[0];
          return sum + (value ? parseInt(value) : 0);
        }, 0);

        
        const total_penality = score.penalities.reduce((sum, item) => {
          const value = Object.values(item)[0];
          return sum + (value ? parseInt(value) : 0);
        }, 0);

        return {
            ...score,
            TotalScore: total_score,
            TotalPenality: total_penality,
            collegeName: TeamDetails ? TeamDetails.collegeName : null,
            profileFile: TeamDetails ? TeamDetails.profileFile : null,
            driverDetails: DriverDetails ? {
              driverName : DriverDetails.studentName,
              driverRollNumber : DriverDetails.rollNumber,
              driverIdPhoto : DriverDetails.idPhoto,
              driverLicense : DriverDetails.licenseImage
            } : null
        };
    }));

    // console.log(Data);
    res.status(201).json({ data: Data });
  }
  catch (error) {
    res.status(500).json({success: false, message: "Error in send Data"});
  }
}

module.exports = { AddFacultyCoordinator, ViewFacultyCoordinator, EditFacultyCoordinator, DeleteFacultyCoordinator, AddStudentCoordinator, ViewStudentCoordinator, EditStudentCoordinator, DeleteStudentCoordinator, AddEvent, ViewEvent, EditEvent, DeleteEvent, GetGokartTeams, GetGokartTeamsCount, GetRevenue, CollegeWiseCount, AddLiveScore, ViewLiveScore, EditLiveScore, LiveCards, GetAllTeamDetails, TeamWisePayments, AddTeamInstallment };
