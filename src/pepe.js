const Discord = require("discord.js");
const Canvas = require("canvas");

const { prefix } = require("../config.json");

async function pepe(message) {
  switch (message.content) {
    case prefix + "pepe":
      message.channel.send(new Discord.Attachment("images/pepe.png"));
      break;

    case prefix + "big-pepe":
      const pepeCanvas = Canvas.createCanvas(300, 300);
      pepeCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe.png"), 0, 0, 300, 300);
      message.channel.send(new Discord.Attachment(pepeCanvas.toBuffer(), "big-pepe.png"));
      break;

    case prefix + "pepehands":
      message.channel.send(new Discord.Attachment("images/pepehands.png"));
      break;

    case prefix + "big-pepehands":
      const pepehandsCanvas = Canvas.createCanvas(300, 300);
      pepehandsCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepehands.png"), 0, 0, 300, 300);
      message.channel.send(new Discord.Attachment(pepehandsCanvas.toBuffer(), "big-pepehands.png"));
      break;
  }
}

module.exports = pepe;
