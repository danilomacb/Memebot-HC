const Discord = require("discord.js");

const { prefix } = require("../config.json");
const jsonList = require("../list.json");

function list(message) {
  jsonList.pepes.forEach(pepe => {
    if (message.content === prefix + pepe) {
      return message.channel.send(new Discord.Attachment("images/pepe/" + pepe + ".png"));
    }
  });

  jsonList.emojis.forEach(emoji => {
    if (message.content === prefix + emoji) {
      return message.channel.send(new Discord.Attachment("images/emojis/" + emoji + ".png"));
    }
  });

  jsonList.achenar.forEach(achenarItem => {
    if (message.content === prefix + achenarItem) {
      return message.channel.send(new Discord.Attachment("images/achenar/" + achenarItem + ".png"));
    }
  });
}

module.exports = list;
