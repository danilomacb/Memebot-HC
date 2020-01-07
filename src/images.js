const Discord = require("discord.js");
const Canvas = require("canvas");

const { prefix } = require("../config.json");
const imagesList = require("../lists/images.json");

function images(message) {
  imagesList.forEach(group => {
    group.itens.forEach(async imageItem => {
      if (message.content === prefix + imageItem) {
        return message.channel.send(
          new Discord.Attachment("images/" + group.category + "/" + imageItem + ".png")
        );
      }

      if (
        message.content === prefix + "big-" + imageItem &&
        (group.category === "pepe" || group.category === "emojis")
      ) {
        const canvas = Canvas.createCanvas(300, 300);
        canvas
          .getContext("2d")
          .drawImage(
            await Canvas.loadImage("./images/" + group.category + "/" + imageItem + ".png"),
            0,
            0,
            300,
            300
          );
        return message.channel.send(
          new Discord.Attachment(canvas.toBuffer(), "big-" + imageItem + ".png")
        );
      }

      if (
        message.content === prefix + "wide-" + imageItem &&
        (group.category === "pepe" || group.category === "emojis")
      ) {
        const canvas = Canvas.createCanvas(600, 300);
        canvas
          .getContext("2d")
          .drawImage(
            await Canvas.loadImage("./images/" + group.category + "/" + imageItem + ".png"),
            0,
            0,
            600,
            300
          );
        return message.channel.send(
          new Discord.Attachment(canvas.toBuffer(), "big-" + imageItem + ".png")
        );
      }
    });
  });
}

module.exports = images;
