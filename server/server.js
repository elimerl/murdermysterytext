/**
 *
 */

const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");
const fsj = require("fs-jetpack");
const Player = require("../lib/player").Player;
/**
 * load client files
 */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.htm"));
});
app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/style.css"));
});
app.get("/main.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/main.js"));
});

/**
 * Socket.io stuff
 */
io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
  console.log("a user connected");
  socket.emit("message", "im a banana");
});
/**
 * listen server
 */
http.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
