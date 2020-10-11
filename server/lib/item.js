const EventEmitter = require("events");
/**
 * Represents an object.
 * @constructor
 * @param {string} name - Name of the item.
 * @param {string} displayName - Display name of the item.
 * @param {string} desc - Description of the item.
 * @param {boolean} pickup - If the item is able to be picked up.
 * @param {object} actions - Events this item responds to. Contains callbacks
 */
class Item {
  constructor(name, displayName, desc, pickup, actions) {
    this.items = items;
    this.name = name;
    this.displayName = displayName;
    this.pickup = pickup;
    this.events = new EventEmitter.EventEmitter();
    actions.forEach((k) => {
      this.events.on(k, actions[k]);
    });
  }
}
module.exports = Item;
