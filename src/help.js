const { prefix } = require("../config.json");

function text(message) {
  switch (message.content) {
    case prefix + "help":
      message.channel.send("```Índice:\n\n$help\n$help-text\n$help-pepe\n$help-memes```");
      break;

    case prefix + "help-text":
      message.channel.send("```Lista de Comandos de Texto: \n\n$investigacao\n$onaruto```");
      break;

    case prefix + "help-pepe":
      message.channel.send(
        "```Lista Emotes do Pepe:\n\nObs: Você também pode usar a tag big para fazer os emotes do pepe ficarem maiores.\nex: $big-pepe\n\n$pepe\n$pepehands\n$pepepopcorn\n$pepethink\n$pepethink2\n$poggers\n$pepewow\n$pepehappy\n$suspepe\n$pepepanties\n$pepepanties2\n$pepe190\n$monkas\n$monkachrist\n$monkaj\n$triplemonka\n$yikes\n$pepekms\n$pepelove\n$reee\n$pepeangry\n$pepehead\n$pepeironic\n$pepeshrug\n$pepepain\n$pepeok\n$pepelaugh\n$pepelaugh2\n$pepehey\n$pepefat\n$pepega\n$pepeblurgh\n$pepepoop\n$pepeblanket\n$pepeevil\n$pepehype\n$pepeweird\n$pepesad\n$pepespecial\n$pepedab\n$pepeez\n$pepeblind```"
      );
      break;

    case prefix + "help-memes":
      message.channel.send("```Lista de Memes: \n\n$stonks\n$lanso\n$npodese```");
      break;
  }
}

module.exports = text;
