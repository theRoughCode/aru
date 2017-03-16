const eris = require("eris"),
	fs = require("fs");
const config = require("./config.json"),
	logger = require("./utils/logger.js");
const events = {
	ready: require("./events/ready.js"),
	guildCreate: require("./events/guildCreate.js"),
	guildDelete: require("./events/guildDelete.js")
};
const web = require("./web/app.js");
var prefix = config.prefix;
var bot = new eris.CommandClient(config.token, {}, {
	defaultHelpCommand: false,
	prefix: prefix
});
bot.on("ready", () => {
	events.ready(bot);
	fs.readdir(__dirname + "/./commands/", (err, commands) => {
			if (err) {
				logger.commandLoadError;
			}
			commands.forEach(command => {
				const realCommandz = require(__dirname + "/./commands/" + command);
				realCommandz(bot);
			});
		})
		//web();
});
bot.on("guildCreate", guild => {
	events.guildCreate(bot);
});
bot.on("guildDelete", guild => {
	events.guildDelete(bot);
});
bot.connect();