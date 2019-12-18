require("dotenv").config({ path: __dirname + "/../.env" });

const Discord = require("discord.js");

const texts = require("./texts");
const images = require("./images");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", message => {
  texts(message);
  images(message);
});

client.login(process.env.TOKEN);
