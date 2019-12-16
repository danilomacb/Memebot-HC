const { prefix } = require("../config.json");

async function text(message) {
  switch (message.content) {
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
  }
}

module.exports = text;
