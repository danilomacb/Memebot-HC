require("dotenv").config({ path: __dirname + "/.env" });

const Discord = require("discord.js");
const Canvas = require("canvas");

const { prefix } = require("./config.json");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", async message => {
  switch (message.content) {
    //text
    case prefix + "help":
      message.channel.send(
        "```Comandos: \n\n$help\n$investigacao\n$stonks\n$lanso\n$npodese\n$pepe\n$big-pepe\n$pepehands\n$big-pepehands```"
      );
      break;

    case prefix + "investigacao":
      message.channel.send(
        "Em caso de investigação policial, eu declaro que não tenho envolvimento com este grupo e não sei como estou no mesmo, provavelmente fui inserido por terceiros, declaro que estou disposto a colaborar com as investigações e estou disposto a me apresentar a depoimento se necessário."
      );
      break;

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

    //pepe
    case prefix + "pepe":
      message.channel.send(new Discord.Attachment("images/pepe.png"));
      break;

    case prefix + "big-pepe":
      const pepeCanvas = Canvas.createCanvas(300, 300);
      pepeCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepe.png"), 0, 0, 300, 300);
      message.channel.send(new Discord.Attachment(pepeCanvas.toBuffer(), "big-pepe.png"));
      break;

    case prefix + "pepehands":
      message.channel.send(new Discord.Attachment("images/pepehands.png"));
      break;

    case prefix + "big-pepehands":
      const pepehandsCanvas = Canvas.createCanvas(300, 300);
      pepehandsCanvas
        .getContext("2d")
        .drawImage(await Canvas.loadImage("./images/pepehands.png"), 0, 0, 300, 300);
      message.channel.send(new Discord.Attachment(pepehandsCanvas.toBuffer(), "big-pepehands.png"));
      break;
  }
});

client.login(process.env.TOKEN);
