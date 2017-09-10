const eris = require("eris"),
	requireDir = require('require-dir');
const config = require("./config.json"),
	logger = require("./utils/logger.js");
const commands = requireDir('./commands');
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
	Object.values(commands).forEach(command => command(bot));
	//web();
});
bot.on("error", console.log);
bot.on("guildCreate", guild => {
	events.guildCreate(bot);
});
bot.on("guildDelete", guild => {
	events.guildDelete(bot);
});
bot.connect();