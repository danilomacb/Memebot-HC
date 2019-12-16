require("dotenv").config({ path: __dirname + "/../.env" });

const Discord = require("discord.js");

const { prefix } = require("../config.json");
const pepe = require("./pepe.js");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", async message => {
  pepe(message);

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
  }
});

client.login(process.env.TOKEN);
