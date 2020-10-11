/**
 *
 */

const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");
const fsj = require("fs-jetpack");
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
  console.log("a user connected");
  socket.on("oof", (msg) => {
    console.log(msg);
    socket.emit("oof", msg);
  });
});
/**
 * listen server
 */
http.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
