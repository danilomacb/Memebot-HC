const Discord = require("discord.js");
const Canvas = require("canvas");

const { prefix } = require("../config.json");

async function pepe(message) {
  switch (message.content) {
    case prefix + "big-pepe":
      const pepeCanvas = Canvas.createCanvas(300, 300);
      pepeCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe/pepe.png"), 0, 0, 300, 300);
      message.channel.send(new Discord.Attachment(pepeCanvas.toBuffer(), "big-pepe.png"));
      break;

    case prefix + "big-pepehands":
      const pepehandsCanvas = Canvas.createCanvas(300, 300);
      pepehandsCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe/pepehands.png"), 0, 0, 300, 300);
      message.channel.send(new Discord.Attachment(pepehandsCanvas.toBuffer(), "big-pepehands.png"));
      break;

    case prefix + "big-pepepopcorn":
      const pepepopcornCanvas = Canvas.createCanvas(300, 300);
      pepepopcornCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe/pepepopcorn.png"), 0, 0, 300, 300);
      message.channel.send(
        new Discord.Attachment(pepepopcornCanvas.toBuffer(), "big-pepehands.png")
      );
      break;

    case prefix + "big-pepethink":
      const pepethinkCanvas = Canvas.createCanvas(300, 200);
      pepethinkCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe/pepethink.png"), 0, 0, 300, 200);
      message.channel.send(new Discord.Attachment(pepethinkCanvas.toBuffer(), "big-pepehands.png"));
      break;

    case prefix + "big-poggers":
      const poggersCanvas = Canvas.createCanvas(300, 300);
      poggersCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe/poggers.png"), 0, 0, 300, 300);
      message.channel.send(new Discord.Attachment(poggersCanvas.toBuffer(), "big-poggers.png"));
      break;

    case prefix + "big-pepehappy":
      const pepehappyCanvas = Canvas.createCanvas(300, 300);
      pepehappyCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe/pepehappy.png"), 0, 0, 300, 300);
      message.channel.send(new Discord.Attachment(pepehappyCanvas.toBuffer(), "big-pepehappy.png"));
      break;

    case prefix + "big-suspepe":
      const suspepeCanvas = Canvas.createCanvas(300, 300);
      suspepeCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe/suspepe.png"), 0, 0, 300, 300);
      message.channel.send(new Discord.Attachment(suspepeCanvas.toBuffer(), "big-suspepe.png"));
      break;

    case prefix + "big-pepepanties":
      const pepepantiesCanvas = Canvas.createCanvas(300, 300);
      pepepantiesCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe/pepepanties.png"), 0, 0, 300, 300);
      message.channel.send(
        new Discord.Attachment(pepepantiesCanvas.toBuffer(), "big-pepepanties.png")
      );
      break;

    case prefix + "big-pepe190":
      const pepe190Canvas = Canvas.createCanvas(300, 300);
      pepe190Canvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe/pepe190.png"), 0, 0, 300, 300);
      message.channel.send(new Discord.Attachment(pepe190Canvas.toBuffer(), "big-pepe190.png"));
      break;

    case prefix + "big-monka":
      const monkaCanvas = Canvas.createCanvas(300, 300);
      monkaCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe/monka.png"), 0, 0, 300, 300);
      message.channel.send(new Discord.Attachment(monkaCanvas.toBuffer(), "big-monka.png"));
      break;

    case prefix + "big-triplemonka":
      const triplemonkaCanvas = Canvas.createCanvas(300, 300);
      triplemonkaCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe/triplemonka.png"), 0, 0, 300, 300);
      message.channel.send(
        new Discord.Attachment(triplemonkaCanvas.toBuffer(), "big-triplemonka.png")
      );
      break;

    case prefix + "big-yikes":
      const yikesCanvas = Canvas.createCanvas(300, 300);
      yikesCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe/yikes.png"), 0, 0, 300, 300);
      message.channel.send(new Discord.Attachment(yikesCanvas.toBuffer(), "big-yikes.png"));
      break;

    case prefix + "big-pepekms":
      const pepekmsCanvas = Canvas.createCanvas(300, 300);
      pepekmsCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe/pepekms.png"), 0, 0, 300, 300);
      message.channel.send(new Discord.Attachment(pepekmsCanvas.toBuffer(), "big-pepekms.png"));
      break;

    case prefix + "big-pepelove":
      const pepeloveCanvas = Canvas.createCanvas(300, 300);
      pepeloveCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe/pepelove.png"), 0, 0, 300, 300);
      message.channel.send(new Discord.Attachment(pepeloveCanvas.toBuffer(), "big-pepelove.png"));
      break;
  }
}

module.exports = pepe;
