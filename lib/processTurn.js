const classes = require("./classes");
const runCommand = (cmd, player, logMessage) => {
  console.log(this);
  const command = cmd.split(" ");
  console.log(player);
  console.log(game);
  console.log(command);
  if (command[0] === "ls") {
    const elem = game.map.locations[player.location];
    //   console.log(elem.items);
    const unlock = elem.items[0].events.emitObject(
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
// const testGame = new classes.Game(require("./maps/dahouse"));
// const testPlayer1 = new classes.Player("testPlayer1", false);
// testGame.addPlayer(testPlayer1, testPlayer1.username);
// const testPlayer2 = new classes.Player("testPlayer2", false);
// testGame.addPlayer(testPlayer2, testPlayer2.username);
// testGame.players["testPlayer2"].location = "hallway";
// testGame.players["testPlayer2"].hand = new classes.Item(
//   "key",
//   "Key",
//   "a silvery key.",
//   true
// );
// runCommand("ls", testGame.players["testPlayer2"], testGame, console.log);
module.exports = runCommand;
