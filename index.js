const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", message => {
  switch (message.content) {
    case config.prefix + "ping":
      message.channel.send("Pong.");
      break;

    case config.prefix + "investigacao":
      message.channel.send(
        "Em caso de investigação policial, eu declaro que não tenho envolvimento com este grupo e não sei como estou no mesmo, provavelmente fui inserido por terceiros, declaro que estou disposto a colaborar com as investigações e estou disposto a me apresentar a depoimento se necessário."
      );
      break;
  }
});

client.login(config.token);
