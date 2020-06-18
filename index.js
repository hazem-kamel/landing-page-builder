const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const connectDB = require("./Database/Database");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
io.on("connection", (socket) => {
    console.log("user connected");
    socket.on('title',title=>{socket.emit('title-preview',title)})
    socket.on("buttons",buttons=>{console.log(buttons)});
    socket.on('carousel',link=>{console.log(link)})
    socket.on('logo',link=>{console.log(link)})
    socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
//DB connection
connectDB();
//Server using env port or 6000
const PORT = process.env.PORT || 6000;
server.listen(PORT, () => console.log("Server Started on 6000"));
