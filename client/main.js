/**
 * Classes
 */
// Player class
class Player {
  constructor(username) {
    this.username = username;
    this.location = "lobby";
    this.murderer = false;
  }
}

let socket = io("http://localhost:3000");
// const player = new Player(prompt("Username:"));
socket.on("message", (msg) => {
  logMessage(msg);
});
function logMessage(msg, noSafe) {
  if (noSafe) {
    $("#messages").html($("#messages").html() + `<p>${msg}</p>`);
  } else {
    $("#messages").html(
      $("#messages").html() +
        `<p>${msg
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")}</p>`
    );
  }
}
$("#commands").keyup((key) => {
  if (key.keyCode === 13) {
    const command = $("#commands").val().split(" ");
    logMessage("<span>&gt;&nbsp;<b>|</b></span> " + command, true);

    if (command[0] === "ls") {
      logMessage("No files");
    } else {
      logMessage(`ERROR: Invalid command ${command.join(" ")}`);
    }
    $("#commands").val("");
  }
});
$("#commands").select();
