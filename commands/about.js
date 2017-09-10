const config = require("../config.json"),
	logger = require("../utils/logger.js");
var botDescription = config.description,
	botHomepage = config.homepage,
	prefix = config.prefix;
module.exports = function(bot) {
	bot.registerCommand('about', (msg) => {
		let embed = {
			color: 16765404,
			author: {
				name: bot.user.username,
				icon_url: bot.user.avatarURL,
				url: botHomepage
			},
			title: "Description:",
			description: botDescription,
			thumbnail: {
				url: bot.user.avatarURL
			},
			timestamp: new Date(),
			footer: {
				icon_url: bot.user.avatarURL,
				text: bot.user.username
			}
		};
		bot.createMessage(msg.channel.id, {
			embed: embed
		});
		var command = "About";
		logger.commandUsed(bot, msg, command);
	});
};