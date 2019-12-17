const Discord = require("discord.js");

const { prefix } = require("../config.json");
const list = require("../list.json");

function pepe(message) {
  list.pepes.forEach(pepe => {
    if (message.content === prefix + pepe) {
      message.channel.send(new Discord.Attachment("images/pepe/" + pepe + ".png"));
    }
  });
}

module.exports = pepe;
