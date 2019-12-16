const Discord = require("discord.js");

const { prefix } = require("../config.json");

async function pepe(message) {
  switch (message.content) {
    case prefix + "pepe":
      message.channel.send(new Discord.Attachment("images/pepe/pepe.png"));
      break;

    case prefix + "pepehands":
      message.channel.send(new Discord.Attachment("images/pepe/pepehands.png"));
      break;

    case prefix + "pepepopcorn":
      message.channel.send(new Discord.Attachment("images/pepe/pepepopcorn.png"));
      break;

    case prefix + "pepethink":
      message.channel.send(new Discord.Attachment("images/pepe/pepethink.png"));
      break;

    case prefix + "poggers":
      message.channel.send(new Discord.Attachment("images/pepe/poggers.png"));
      break;

    case prefix + "pepehappy":
      message.channel.send(new Discord.Attachment("images/pepe/pepehappy.png"));
      break;

    case prefix + "suspepe":
      message.channel.send(new Discord.Attachment("images/pepe/suspepe.png"));
      break;

    case prefix + "pepepanties":
      message.channel.send(new Discord.Attachment("images/pepe/pepepanties.png"));
      break;

    case prefix + "pepe190":
      message.channel.send(new Discord.Attachment("images/pepe/pepe190.png"));
      break;

    case prefix + "monka":
      message.channel.send(new Discord.Attachment("images/pepe/monka.png"));
      break;

    case prefix + "triplemonka":
      message.channel.send(new Discord.Attachment("images/pepe/triplemonka.png"));
      break;

    case prefix + "yikes":
      message.channel.send(new Discord.Attachment("images/pepe/yikes.png"));
      break;

    case prefix + "pepekms":
      message.channel.send(new Discord.Attachment("images/pepe/pepekms.png"));
      break;

    case prefix + "pepelove":
      message.channel.send(new Discord.Attachment("images/pepe/pepelove.png"));
      break;
  }
}

module.exports = pepe;
