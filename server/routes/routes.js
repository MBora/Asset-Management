const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModels");
const bcrypt = require("bcrypt");



router.post("/signup", async (request, response) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(request.body.password, saltPassword);
  console.log("before find")
  signUpTemplateCopy.findOne({ email: "email" }, (err, user) => {
    if (user) {
      console.log("before send")
      response.send({ e: "This email has already been used" });
    } else {
      console.log("inside else")
      const signedUpUser = new signUpTemplateCopy({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        number: request.body.number,
        email: request.body.email,
        password: securePassword,
      });

  //   const signedUpUser = new signUpTemplateCopy({
  //   firstName: request.body.firstName,
  //   lastName: request.body.lastName,
  //   number: request.body.number,
  //   email: request.body.email,
  //   password: securePassword,
  // });

  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });

      signedUpUser
        .save()
        .then((data) => {
          response.json(data);
        })
        .catch((error) => {
          response.json(error);
        });
    }
  });
});

router.post("/login", (req, res) => {
  const { email, password} = req.body
  signUpTemplateCopy.findOne({email: "email"}, (err, user) => {
    if(user){
      if(password === user.password) {
        res.send({message: "Login Successful"})  //need to hash the password

      } else {
        res.send({message: "password does not match"})
        alert("Ok")
      }
    } else {
      res.send("User not registered")
    }
  })
})

module.exports = router;
