<p align="center">
  <img src="https://github.com/perhion/aru/blob/master/logo.png?raw=true" height="200px" width="200px">
</p>

# Aru
A Discord Bot Powered by Eris.
A pre-hosted version of the bot can be added to your server at:
https://discordapp.com/oauth2/authorize?client_id=168080204063834112&scope=bot&permissions=0

## Setting Up
Clone the Github repository and setup the config.json using the information below. Be sure to have the latest version of Node.JS.
```
`prefix` The prefix the bot will use, space automaticly applied between between the prefix and the command
`bot_owner` Your Discord ID
`homepage` A website for the bot
`description` A description for the bot
`game_name` Name of the game the bot is set to play
`server_ip` IP address for web server
`server_port` Port for web server
`streaming_status` If set to use the streaming status
`stream_url` Twitch URL to stream
`time_format` How time is displayed as
`discord_pw_post` If using discord.pw
`discord_pw_key` The key for discord.pw
`carbonitex_post` If using Carbonitex
`carbonitex_key` The key for Carbonitex
`token` The token for the bot
```
## Usage
```bash
npm install && node bot.js
```
## Adding a Command
Create a new file in the commands folder ending in .js using the template below as an example.
```javascript
module.exports = function(bot) {
	bot.registerCommand("ping", (msg) => {
		bot.createMessage(msg.channel.id, "Pong!");
	});
};
```
