const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.router");
const { flightRouter } = require("./routes/flight.router");
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/flights", flightRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to Db");
  } catch (err) {
    console.log("Something went wrong");
  }
  console.log(`Server is running on port ${process.env.port}`);
});
