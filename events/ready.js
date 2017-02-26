const statusManager = require("../utils/statusManager.js");
module.exports = function(bot) {
	console.log("Bot" + " is currently logged in as " + bot.user.username + "#" + bot.user.discriminator + ".\n" + "Currently on " + bot.guilds.size + " servers and serving " + bot.users.size + " users.");
	statusManager.setStatus(bot);
	statusManager.postStats(bot);
};