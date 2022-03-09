const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const userController = require("./controllers/doctor.controller");
app.use("/doctor", userController);
const hospitalController = require("./controllers/hospital.controller");
app.use("/hospital", hospitalController);
module.exports = app;

