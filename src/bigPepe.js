const Discord = require("discord.js");
const Canvas = require("canvas");

const { prefix } = require("../config.json");
const list = require("../list.json");

function bigPepe(message) {
  list.pepes.forEach(async function(pepe) {
    if (message.content === prefix + "big-" + pepe) {
      const pepeCanvas = Canvas.createCanvas(300, 300);
      pepeCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe/" + pepe + ".png"), 0, 0, 300, 300);
      message.channel.send(new Discord.Attachment(pepeCanvas.toBuffer(), "big-" + pepe + ".png"));
    }
  });
}

module.exports = bigPepe;
