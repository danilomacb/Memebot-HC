require("dotenv").config({ path: __dirname + "/../.env" });

const Discord = require("discord.js");

const { prefix } = require("../config.json");
const text = require("./text");
const pepe = require("./pepe");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", async message => {
  text(message);
  pepe(message);

  switch (message.content) {
    //memes
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
});

client.login(process.env.TOKEN);
