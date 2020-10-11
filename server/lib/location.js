const Item = require("./item");
/**
 * Represents a location.
 * @constructor
 * @param {Item[]} items - List of items in location.
 * @param {string} name - Lowercased name of location.
 * @param {string} displayName - Name shown to client of location.
 * @param {string} desc - Description of location.
 * @param {string[]} neighbors - Array of neighboring room names
 */
class Location {
  constructor(items, name, displayName, desc, neighbors) {
    this.items = items;
    this.name = name;
    this.displayName = displayName;
    this.desc = desc;
    this.neighbors = neighbors;
  }
}
module.exports = Location;
