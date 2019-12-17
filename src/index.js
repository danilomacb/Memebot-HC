require("dotenv").config({ path: __dirname + "/../.env" });

const Discord = require("discord.js");

const help = require("./help");
const text = require("./text");
const pepe = require("./pepe");
const bigPepe = require("./bigPepe");
const memes = require("./memes");
const emojis = require("./emojis");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", async message => {
  help(message);
  text(message);
  pepe(message);
  bigPepe(message);
  memes(message);
  emojis(message);
});

client.login(process.env.TOKEN);
