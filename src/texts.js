const { prefix } = require("../config.json");
const textList = require("../lists/texts.json");

function texts(message) {
  textList.forEach(textItem => {
    if (message.content === prefix + textItem.tag) {
      message.channel.send(textItem.message);
    }
  });
}

module.exports = texts;
