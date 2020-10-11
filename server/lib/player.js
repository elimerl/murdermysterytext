const uuid = require("uuid");
class Player {
  constructor(username, murderer) {
    this.username = username;
    this.location = "lobby";
    this.murderer = murderer ? true : false;
    this.id = uuid;
  }
}
module.exports = {
  Player,
};
