const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  rollNumber: {
    type: String,
    required: true
  },
  pursuingYear: {
    type: Number,
    required: true
  },
  idPhoto: {
    type: String,
    required: true
  },
  captain: {
    type: Boolean
  },
  viceCaptain: {
    type: Boolean
  },
  driver: {
    type: Boolean
  },
  coDriver: {
    type: Boolean
  },
  licenseImage:{
    type: String
  }
});

const formSchema = new mongoose.Schema({
  teamMailID: {
    type: String,
    required: true
  },
  teamName: {
    type: String,
    required: true
  },
  collegeName: {
    type: String,
    required: true
  },
  collegeAddress: {
    type: String,
    required: true
  },
  captainName: {
    type: String,
    required: true
  },
  captainContact: {
    type: Number,
    required: true
  },
  viceCaptainName: {
    type: String,
    required: true
  },
  viceCaptainContact: {
    type: Number,
    required: true
  },
  facultyAdviserName: {
    type: String,
    required: true
  },
  facultyAdviserContact: {
    type: Number,
    required: true
  },
  teamSize: {
    type: Number,
    required: true
  },
  profileFile: {
    type: String,
    required: true
  },
  teamMembers: [entrySchema],
  uniqueTeamCode: {
    type: String,
    required: true
  },
  coupnCode: {
    type: String,
  }
},
  { timestamps: true }
);

const TeamsDetails = mongoose.model("gokartTeams", formSchema);


module.exports = TeamsDetails;