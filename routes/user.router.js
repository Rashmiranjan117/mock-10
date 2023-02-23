const express = require("express");
const { UserModel } = require("../model/user.model");
const userRouter = express.Router();
var jwt = require("jsonwebtoken");

userRouter.get("/all", async (req, res) => {
  try {
    let data = UserModel.find();
    res.send(data);
  } catch (err) {
    res.send({ msg: "Something Went wrong" });
  }
});

userRouter.post("/register", async (req, res) => {
  let data = req.body;
  // console.log(data)
  // res.send(data)
  try {
    let new_user = new UserModel(data);
    await new_user.save();
    res.send("Registration Successfull");
  } catch (err) {
    res.send("Something went wrong");
  }
});

userRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  var token = jwt.sign({ email, password }, "shhhhh");
  console.log(token);
  try {
    let user = await UserModel.find({ email, password });
    if (user.length > 0) {
     
      res.send({ msg: "Login Successfull", token });
    } else {
      res.send({ msg: "Invalid Credentials" });
    }
  } catch (err) {
    res.send("Something went wrong.");
  }
});

module.exports = { userRouter };
