const e = require("express");
const classes = require("../../../classes");
const ballroom = new classes.Location(
  [require("../../items/dahouse/button")],
  "ballroom",
  "Ballroom",
  ["hallway"]
);
ballroom.items[0].events.on("press", (game, player, logMessage) => {
  const loc = game.map.locations[player.location];

  game.meeting(game, player, logMessage);
});
module.exports = ballroom;
