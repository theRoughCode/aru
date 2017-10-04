const logger = require("../utils/logger.js");
module.exports = function(bot) {
	bot.registerCommand("meme", (msg, args) => {
		var topword = args[0];
		var bottomword = args[1];
		var url = args[2];
		bot.createMessage(msg.channel.id, `https://memegen.link/custom/${topword}/${bottomword}.jpg?alt=${url}?font=impact`);
	});
};