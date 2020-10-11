const uuid = require("uuid");
class Game {
  constructor() {
    this.players = {};
    this.addPlayer = (player, id) => {
      this.players[id] = player;
    };
    this.id = uuid.v4();
    this.processTurn = require("./processTurn");
  }
}
module.exports = Game;
