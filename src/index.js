require("dotenv").config({ path: __dirname + "/../.env" });

const Discord = require("discord.js");

const help = require("./help");
const text = require("./text");
const list = require("./list");
const bigList = require("./bigList");
const memes = require("./memes");
const { prefix } = require("../config.json");
const jsonList = require("../list.json");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", message => {
  jsonList.forEach(group => {
    group.itens.forEach(item => {
      if (message.content === prefix + item) {
        // console.log(group, item);
        return message.channel.send(
          new Discord.Attachment("images/" + group.category + "/" + item + ".png")
        );
      }
    });
  });

  // help(message);
  // text(message);
  // list(message);
  // bigList(message);
  // memes(message);
});

client.login(process.env.TOKEN);
