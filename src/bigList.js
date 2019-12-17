const Discord = require("discord.js");
const Canvas = require("canvas");

const { prefix } = require("../config.json");
const list = require("../list.json");

function bigList(message) {
  list.pepes.forEach(async function(pepe) {
    if (message.content === prefix + "big-" + pepe) {
      const pepeCanvas = Canvas.createCanvas(300, 300);
      pepeCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe/" + pepe + ".png"), 0, 0, 300, 300);
      return message.channel.send(
        new Discord.Attachment(pepeCanvas.toBuffer(), "big-" + pepe + ".png")
      );
    }
  });

  list.emojis.forEach(async function(emoji) {
    if (message.content === prefix + "big-" + emoji) {
      const emojiCanvas = Canvas.createCanvas(300, 300);
      emojiCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/emojis/" + emoji + ".png"), 0, 0, 300, 300);
      return message.channel.send(
        new Discord.Attachment(emojiCanvas.toBuffer(), "big-" + emoji + ".png")
      );
    }
  });
}

module.exports = bigList;
