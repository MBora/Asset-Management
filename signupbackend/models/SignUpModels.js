const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your First Name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your Last Name"],
  },
  number: {
    type: String,
    required: [true, "Please enter your phone number"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
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
