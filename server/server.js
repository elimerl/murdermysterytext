const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.htm"));
});
app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/style.css"));
});
app.get("/main.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/main.js"));
});
const httpServer = app.listen(port, () => {
  console.log(`Server online at http://localhost:${port}`);
});
const io = require("socket.io").listen(httpServer);

io.sockets.on("connect", (socket) => {
  console.log("connect");
});
