require("dotenv").config({ path: __dirname + "/../.env" });

const Discord = require("discord.js");
const Canvas = require("canvas");

const { prefix } = require("../config.json");
const list = require("../list.json");
const textList = require("../textList.json");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", message => {
  textList.forEach(text => {
    if (message.content === prefix + text.tag) {
      message.channel.send(text.message);
    }
  });

  list.forEach(group => {
    group.itens.forEach(async item => {
      if (message.content === prefix + item) {
        return message.channel.send(
          new Discord.Attachment("images/" + group.category + "/" + item + ".png")
        );
      }
      if (
        message.content === prefix + "big-" + item &&
        (group.category === "pepe" || group.category === "emojis")
      ) {
        const canvas = Canvas.createCanvas(300, 300);
        canvas
          .getContext("2d")
          .drawImage(
            await Canvas.loadImage("./images/" + group.category + "/" + item + ".png"),
            0,
            0,
            300,
            300
          );
        return message.channel.send(
          new Discord.Attachment(canvas.toBuffer(), "big-" + item + ".png")
        );
      }
    });
  });
});

client.login(process.env.TOKEN);
