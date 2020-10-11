const e = require("express");
const { Item } = require("../../classes");
const classes = require("../../classes");
module.exports = new classes.Location([
  new Item(
    "clock",
    "Grandfather Clock",
    "A tall, wooden clock in a glass case.",
    false
  )
    .on("inspect", (game, player, loc, logMessage) => {
      logMessage("The back of the clock has a keyhole. But what for?");
    })
    .on("unlock", (game, player, loc, logMessage) => {
      if (player.hand.name === "key") {
        logMessage("You open the clock. There is a gun inside.");
        loc.items.push(
          new Item("gun", "Gun", "A sleek, shiny gun.", true).on(
            "shoot",
            (game, player, loc, logMessage) => {
              logMessage("You shoot the gun. It's super effective!");
            }
          )
        );
      } else {
        logMessage("You don't have a key.");
      }
    }),
]);
