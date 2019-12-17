require("dotenv").config({ path: __dirname + "/../.env" });

const Discord = require("discord.js");

const text = require("./text");
const pepe = require("./pepe");
const pepeloop = require("./pepeloop");
const bigPepe = require("./bigPepe");
const memes = require("./memes");
const list = require("../list.json");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", async message => {
  text(message);
  // pepe(message);
  pepeloop(message);
  bigPepe(message);
  memes(message);
});

client.login(process.env.TOKEN);
