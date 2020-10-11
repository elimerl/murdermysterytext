const classes = require("../../../classes");
const hall = new classes.Location(
  [require("../../items/dahouse/clock")],
  "hallway",
  "Hallway",
  ["ballroom"]
);
hall.items[0].events
  .on("inspect", (game, player, loc, logMessage) => {
    logMessage("The back of the clock has a keyhole. But what for?");
  })
  .on("unlock", (game, player, loc, logMessage) => {
    if (player.hand.name === "key") {
      logMessage("You open the clock. There is a gun inside.");
      loc.items.push(require("../../items/dahouse/gun"));
    } else {
      logMessage("You don't have a key.");
    }
  });
hall.items[1].events.on("shoot", (game, player, loc, logMessage) => {
  logMessage("You shoot the gun. It's super effective!");
});
module.exports = hall;
