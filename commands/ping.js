const config = require("../config.json"),
	logger = require("../utils/logger.js");
module.exports = function(bot) {
	bot.registerCommand("ping", (msg) => {
		bot.createMessage(msg.channel.id, "Pong! " + bot.user.username + " is currently on " + bot.guilds.size + " servers and serving " + bot.users.size + " users.");
		var command = "Ping";
		logger.commandUsed(bot, msg, command);
	});
};