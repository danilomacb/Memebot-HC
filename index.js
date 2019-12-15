const Discord = require("discord.js");
const { prefix, token } = require("./config.json");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", message => {
  switch (message.content) {
    case prefix + "help":
      message.channel.send("```Comandos: \n\n$help\n$investigacao\n$stonks\n$pepe```");
      break;

    case prefix + "investigacao":
      message.channel.send(
        "Em caso de investigação policial, eu declaro que não tenho envolvimento com este grupo e não sei como estou no mesmo, provavelmente fui inserido por terceiros, declaro que estou disposto a colaborar com as investigações e estou disposto a me apresentar a depoimento se necessário."
      );
      break;

    case prefix + "stonks":
      message.channel.send(new Discord.Attachment("images/stonks.jpg"));
      break;

    case prefix + "pepe":
      message.channel.send(new Discord.Attachment("images/pepe.png"));
      break;
  }
});

client.login(token);
