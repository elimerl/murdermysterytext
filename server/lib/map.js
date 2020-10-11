const Location = require("./location");

/**
 * Represents a map of locations.
 * @constructor
 * @param {Location[]} locations - List of Location objects.
 */

class Map {
  constructor(locations) {
    this.locations = locations;
  }
}
module.exports = Map;
