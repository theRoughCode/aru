const axios = require("axios"),
	logger = require("../utils/logger.js");
module.exports = function(bot) {
	bot.registerCommand("c", (msg, args) => {
		axios.get(`http://api.program-o.com/v2/chatbot/?bot_id=6&say=${args}&convo_id=discordbot_1&format=json`)
			.then(function(response) {
				bot.createMessage(msg.channel.id, "**" + msg.author.username + "#" + msg.author.discriminator + ":** " + response.data.botsay.replace("Program-O", bot.user.username));
				var command = "Chat - Status: Success";
				logger.commandUsed(bot, msg, command);
			})
			.catch(function(error) {
				bot.createMessage(msg.channel.id, "Not feeling like talking :slight_frown: ");
				var command = "Chat - Status: Failed";
				logger.commandUsed(bot, msg, command);
			});
	});
};