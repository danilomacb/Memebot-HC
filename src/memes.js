const Discord = require("discord.js");

const { prefix } = require("../config.json");

async function text(message) {
  switch (message.content) {
    case prefix + "stonks":
      message.channel.send(new Discord.Attachment("images/stonks.jpg"));
      break;

    case prefix + "lanso":
      message.channel.send(new Discord.Attachment("images/lanso.jpeg"));
      break;

    case prefix + "npodese":
      message.channel.send(new Discord.Attachment("images/npodese.jpeg"));
      break;
  }
}

module.exports = text;
