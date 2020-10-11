const uuid = require("uuid");
/**
 * Represents a map of locations.
 * @constructor
 * @param {string} username - Username of player.
 * @param {boolean} murderer - If player is murderer or not.
 * @param {string} game - UUID of game player is in.
 */
class Player {
  constructor(username, murderer, game) {
    this.username = username;
    this.location = "lobby";
    this.murderer = murderer;
    this.id = uuid.v4();
    this.hand = null;
  }
}
module.exports = Player;
