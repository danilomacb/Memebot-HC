const { prefix } = require("../config.json");

async function text(message) {
  switch (message.content) {
    case prefix + "help":
      message.channel.send(
        "```Índice:\n\n$help\n$help-text\n$help-pepe\n$help-memes\n\nDesenvolvido por Danilo Macedo Bakun```"
      );
      break;

    case prefix + "help-text":
      message.channel.send("```Lista de Comandos de Texto: \n\n$investigacao```");
      break;

    case prefix + "help-pepe":
      message.channel.send(
        "```Lista Emotes do Pepe:\n\nObs: Você também pode usar a tag big para fazer os emotes do pepe ficarem maiores.\nex: $big-pepe\n\n$pepe\n$pepehands\n$pepepopcorn\n$pepethink\n$poggers\n$pepehappy\n$suspepe\n$pepepanties\n$pepe190\n$monka\n$triplemonka\n$yikes\n$pepekms\n$pepelove```"
      );
      break;

    case prefix + "help-memes":
      message.channel.send("```Lista de Memes: \n\n$stonks\n$lanso\n$npodese```");
      break;

    case prefix + "investigacao":
      message.channel.send(
        "Em caso de investigação policial, eu declaro que não tenho envolvimento com este grupo e não sei como estou no mesmo, provavelmente fui inserido por terceiros, declaro que estou disposto a colaborar com as investigações e estou disposto a me apresentar a depoimento se necessário."
      );
      break;
  }
}

module.exports = text;
