const classes = require("./classes");
module.exports = (game, player, loc, logMessage) => {
  logMessage(
    player.username + " has called a meeting from loc " + loc.displayName
  );
};
