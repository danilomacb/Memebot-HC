const { prefix } = require("../config.json");

async function text(message) {
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

    case prefix + "investigacao":
      message.channel.send(
        "Em caso de investigação policial, eu declaro que não tenho envolvimento com este grupo e não sei como estou no mesmo, provavelmente fui inserido por terceiros, declaro que estou disposto a colaborar com as investigações e estou disposto a me apresentar a depoimento se necessário."
      );
      break;

    case prefix + "onaruto":
      message.channel.send(
        "O Naruto pode ser um pouco duro às vezes, talvez você não saiba disso, mas o Naruto também cresceu sem pai. Na verdade ele nunca conheceu nenhum de seus pais, e nunca teve nenhum amigo em nossa aldeia. Mesmo assim eu nunca vi ele chorar, ficar zangado ou se dar por vencido, ele está sempre disposto a melhorar, ele quer ser respeitado, é o sonho dele e o Naruto daria a vida por isso sem hesitar. Meu palpite é que ele se cansou de chorar e decidiu fazer alguma coisa a respeito!"
      );
  }
}

module.exports = text;
