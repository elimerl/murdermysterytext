var socket = io();
socket.emit("oof", "im a donut");
socket.on("oof", (msg) => {
  alert(msg);
});
