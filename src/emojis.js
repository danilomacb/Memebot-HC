const Discord = require("discord.js");

const { prefix } = require("../config.json");
const list = require("../list.json");

function emoji(message) {
  list.emojis.forEach(emoji => {
    if (message.content === prefix + emoji) {
      message.channel.send(new Discord.Attachment("images/emojis/" + emoji + ".png"));
    }
  });
}

module.exports = emoji;
