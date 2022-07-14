const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true]
  },
  lastName: {
    type: String,
    required: [true]
  },
  number: {
    type: String,
    required: [true]
    // unique: true,
  },
  email: {
    type: String,
    required: [true]
    // unique: true,
  },
  password: {
    type: String,
    required: [true]
  },
  // avatar: {
  //   type: String,
  //   default: "cloudinary"
  // }
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("mytable", signUpTemplate);