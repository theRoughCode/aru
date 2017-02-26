const logger = require("../utils/logger.js"),
	statusManager = require("../utils/statusManager.js");
module.exports = function(bot, guild) {
	statusManager.postStats(bot);
	logger.guildLeave(bot, guild);
};