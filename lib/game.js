const uuid = require("uuid");
const { Player } = require("./classes");
class Game {
  constructor(map) {
    this.players = {};
    this.addPlayer = (player, id) => {
      this.players[id] = player;
    };
    this.id = uuid.v4();
    this.processTurn = (cmd, player, logMessage) => {
      let game = this;
      // console.log(game.map.locations.hallway);
      const command = cmd.split(" ");
      // console.log(player);
      // console.log(game);
      // console.log(command);
      if (command[0] === "ls") {
        const elem = game.map.locations[player.location];
        console.log(elem);
        const unlock = elem.items["clock"].events.emitObject(
          "unlock",
          game,
          player,
          console.log
        );
        game = unlock.game;
        player = unlock.player;
        console.log(game.map.locations["hallway"].items);
      }
    };
    this.meeting = require("./meeting"); // require("./processTurn").bind(this);
    this.map = map;
  }
}
module.exports = Game;
const game = new Game(require("./maps/dahouse"));
const player = new Player("test1", false);
player.location = "hallway";
player.hand;
console.log(game.processTurn("ls", player, console.log));
