const Discord = require("discord.js");

const { prefix } = require("../config.json");

async function pepe(message) {
  switch (message.content) {
    case prefix + "pepe":
      message.channel.send(new Discord.Attachment("images/pepe.png"));
      break;

    case prefix + "pepehands":
      message.channel.send(new Discord.Attachment("images/pepehands.png"));
      break;
  }
}

module.exports = pepe;
