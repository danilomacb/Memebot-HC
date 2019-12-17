const Discord = require("discord.js");

const { prefix } = require("../config.json");

function text(message) {
  switch (message.content) {
    case prefix + "stonks":
      message.channel.send(new Discord.Attachment("images/memes/stonks.jpg"));
      break;

    case prefix + "lanso":
      message.channel.send(new Discord.Attachment("images/memes/lanso.jpeg"));
      break;

    case prefix + "npodese":
      message.channel.send(new Discord.Attachment("images/memes/npodese.jpeg"));
      break;
  }
}

module.exports = text;
