const axios = require("axios"),
	logger = require("../utils/logger.js"),
	config = require("../config.json");
module.exports = function(bot) {
	bot.registerCommand("hangman", (msg, args) => {
		/**
		function generateWord (){
			axios.get(`http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=${config.wordnik_key}`)
				.then(function(response) {
					var word = response.data.word;
					var command = "Hangman - Wordnik got " + word + " - Status: Success";
					logger.commandUsed(bot, msg, command);
					return word;
				})
				.catch(function(error) {
					bot.createMessage(msg.channel.id, "Hangman is not working right now.");
					var command = "Hangman - Wordnik - Status: Failed";
					logger.commandUsed(bot, msg, command);
				});
		}
		**/
	});
};