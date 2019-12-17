require("dotenv").config({ path: __dirname + "/../.env" });

const Discord = require("discord.js");

const text = require("./text");
const pepe = require("./pepe");
const bigPepe = require("./bigPepe");
const bigPepeLoop = require("./bigPepeLoop");
const memes = require("./memes");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", async message => {
  text(message);
  pepe(message);
  // bigPepe(message);
  bigPepeLoop(message);
  memes(message);
});

client.login(process.env.TOKEN);
