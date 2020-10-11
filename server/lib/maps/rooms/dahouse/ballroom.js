const e = require("express");
const classes = require("../../../classes");
const ballroom = new classes.Location(
  [require("../../items/dahouse/button")],
  "ballroom",
  "Ballroom",
  ["hallway"]
);
ballroom.items[0].events.on("press", (game, player, loc, logMessage) => {
  game.meeting(game, player, loc, logMessage);
});
module.exports = ballroom;
