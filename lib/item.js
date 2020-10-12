const EventEmitter = require("events");
/**
 * Represents an object.
 * @constructor
 * @param {string} name - Name of the item.
 * @param {string} displayName - Display name of the item.
 * @param {string} desc - Description of the item.
 * @param {boolean} pickup - If the item is able to be picked up.
 */
class ReturnEmitter extends EventEmitter.EventEmitter {
  emitObject(event, game, player, logMessage) {
    this.emit(event, game, player, logMessage);
    return { game, player };
  }
}
class Item {
  constructor(name, displayName, desc, pickup) {
    this.name = name;
    this.displayName = displayName;
    this.pickup = pickup;
    this.events = new ReturnEmitter();
  }
}
module.exports = Item;
