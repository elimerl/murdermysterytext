const classes = require("../../../classes");
const hall = new classes.Location(
  [require("../../items/dahouse/clock")],
  "hallway",
  "Hallway",
  ["ballroom"]
);
hall.items[0].events
  .on("examine", (game, player, logMessage) => {
    const loc = game.map.locations[player.location];

    logMessage("The back of the clock has a keyhole. But what for?");
  })
  .on("unlock", (game, player, logMessage) => {
    if (player.hand.name === "key") {
      logMessage("You open the clock. There is a gun inside.");
      game.map.locations[player.location].items.push(
        require("../../items/dahouse/gun")
      );
      hall.items["gun"].events.on("shoot", (game, player, loc, logMessage) => {
        logMessage("You shoot the gun. It's super effective!");
      });
    } else {
      logMessage("You don't have a key.");
    }
    return {
      game,
      player,
    };
  });

module.exports = hall;
