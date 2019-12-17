require("dotenv").config({ path: __dirname + "/../.env" });

const Discord = require("discord.js");

const help = require("./help");
const text = require("./text");
const list = require("./list");
const bigList = require("./bigList");
const memes = require("./memes");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", async message => {
  help(message);
  text(message);
  list(message);
  bigList(message);
  memes(message);
});

client.login(process.env.TOKEN);
