const express = require("express");
const { FlightModel } = require("../model/flight.model");
const flightRouter = express.Router();

flightRouter.get("/", async (req, res) => {
  try {
    let data = await FlightModel.find();
    res.send(data);
  } catch (err) {
    res.send({ msg: "Something went wrong" });
  }
});

flightRouter.get("/:id", async (req, res) => {
  let id = req.params.id;

  try {
    let data = await FlightModel.find({ _id: id });
    res.send(data);
  } catch (err) {
    res.send({ msg: "Something went wrong" });
  }
});

flightRouter.post("/", async (req, res) => {
  let data = req.body;
  
//   console.log(token);
// res.send(token)
  try {
    let flight = new FlightModel(data);
    await flight.save();
    res.send("Data added successfully");
  } catch (err) {
    res.send({ msg: "Something went wrong" });
  }
});

flightRouter.patch("/:id", async (req, res) => {
  let id = req.params.id;
  let data = req.body;

  try {
    await FlightModel.findByIdAndUpdate({ _id: id }, data);
    res.send({ msg: "Data Updated" });
  } catch (err) {
    res.send({ msg: "Invalid Id Provided" });
  }
});

flightRouter.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    await FlightModel.findByIdAndDelete({ _id: id });
    res.send({ msg: "Data deleted successfully" });
  } catch (err) {
    res.send({ msg: "Something went wrong" });
  }
});

module.exports = { flightRouter };
