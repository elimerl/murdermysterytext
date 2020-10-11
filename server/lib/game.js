const uuid = require("uuid");
class Game {
  constructor(map) {
    this.players = {};
    this.addPlayer = (player, id) => {
      this.players[id] = player;
    };
    this.id = uuid.v4();
    this.processTurn = require("./processTurn");
    this.meeting = require("./meeting");
    this.map = map;
  }
}
module.exports = Game;
