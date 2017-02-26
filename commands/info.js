const config = require("../config.json"),
	logger = require("../utils/logger.js");
var botDescription = config.description,
	botHomepage = config.homepage,
	prefix = config.prefix;
module.exports = function(bot) {
	bot.registerCommand("help", (msg) => {
		let embed = {
			color: 16765404,
			author: {
				name: bot.user.username,
				icon_url: bot.user.avatarURL,
				url: botHomepage
			},
			title: "Commands:",
			description: `**Info Commands:**\n` + `**${prefix}help** - This help menu\n` + `**${prefix}ping** - Get bot stats\n` + `**${prefix}about** - Get information about the bot\n\n` + `**Profiler Commands:**\n` + `**${prefix}profile @UserName** - Get user details\n` + `**${prefix}serverinfo** - Get info about the server\n\n` + `**Anime Commands:**\n` + `**${prefix}anime animename** - Get information about an anime via kitsu.io\n` + `**${prefix}manga manganame** - Get information about a manga via kitsu.io\n\n` + `**IMDb Commands:**\n` + `**${prefix}movie moviename** - Get information about a movie via IMDb\n\n` + `**Game Info Commands:**\n` + `**${prefix}ow username platform region** - Get information from a Overwatch profile. Replace username with Battletag, platform with pc, xbl, or psn, and region with eu, kr, us, global, cn\n\n` + `**Misc. Commands:**\n` + `**${prefix}c** - Chat with the bot (uses Program-O)\n\n`,
			timestamp: new Date(),
			footer: {
				icon_url: bot.user.avatarURL,
				text: bot.user.username
			}
		};
		bot.createMessage(msg.channel.id, {
			embed: embed
		});
		var command = "Help";
		logger.commandUsed(bot, msg, command);
	});
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
	bot.registerCommand("ping", (msg) => {
		bot.createMessage(msg.channel.id, "Pong! " + bot.user.username + " is currently on " + bot.guilds.size + " servers and serving " + bot.users.size + " users.");
		var command = "Ping";
		logger.commandUsed(bot, msg, command);
	});
};