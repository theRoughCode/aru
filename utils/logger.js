const winston = require("winston");
var commandUsed = function commandUsed(bot, msg, command) {
	winston.info(new Date() + ": " + msg.author.username + "#" + msg.author.discriminator + " used the " + command + " command in #" + msg.channel.name + " on the " + msg.channel.guild.name + " server");
};
var statusUpdate = function statusUpdate(bot) {
	winston.info(new Date() + ": " + "Status has been set");
};
var statsSent = function statsSent(bot) {
	winston.info(new Date() + ": " + "Stats have been sent");
};
var guildJoin = function guildJoin(bot, guild) {
	winston.info(new Date() + ": " + "The bot has been added to " + guild);
};
var guildLeave = function guildLeave(bot, guild) {
	winston.info(new Date() + ": " + "The bot has been removed from " + guild);
};
var commandLoadError = function commandLoadError(bot, guild) {
	winston.info(new Date() + ": " + "Error loading commands");
};
module.exports = {
	commandUsed: commandUsed,
	statusUpdate: statusUpdate,
	statsSent: statsSent,
	guildJoin: guildJoin,
	guildLeave: guildLeave,
	commandLoadError: commandLoadError
};