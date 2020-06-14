const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./Database/Database");
const cors = require("cors");
const app = express();

//DB connection
connectDB();
//Server using env port or 6000
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log("Server Started on 6000"));
