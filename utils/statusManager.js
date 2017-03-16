const config = require("../config.json"),
	logger = require("../utils/logger.js"),
	axios = require("axios");
var gameName = config.game_name,
	streamingStatus = config.streaming_status,
	streamURL = config.stream_url;
var discordPWPostStatus = config.discord_pw_post,
	discordPWKey = config.discord_pw_key,
	carbonitexPostStatus = config.carbonitex_post,
	carbonitexKey = config.carbonitex_key;
var setStatus = function setStatus(bot) {
	bot.shards.forEach(shard => {
		if (streamingStatus == true) {
			shard.editStatus({
				name: gameName,
				type: 1,
				url: streamURL
			});
		} else {
			shard.editStatus({
				name: gameName,
				type: 0
			});
		}
	});
	logger.statusUpdate(bot);
};
var postStats = function postStats(bot) {
	if (discordPWPostStatus == true) {
		axios({
			method: "post",
			url: "https://bots.discord.pw/api/bots/" + bot.user.id + "/stats",
			headers: {
				"Authorization": discordPWKey,
				"content-type": "application/json"
			},
			data: {
				"server_count": bot.guilds.size
			}
		});
	}
	if (carbonitexPostStatus == true) {
		axios({
			method: "post",
			url: "https://www.carbonitex.net/discord/data/botdata.php",
			headers: {
				"content-type": "application/json"
			},
			data: {
				"key": carbonitexKey,
				"servercount": bot.guilds.size
			}
		});
	}
	logger.statsSent(bot);
};
module.exports = {
	setStatus: setStatus,
	postStats: postStats
};