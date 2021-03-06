/**
 * Aru
 * Help Command
 */

module.exports = function (bot) {
  bot.registerCommand('help', (msg, logger) => {
    bot.getDMChannel(msg.author.id)
    // Create message
    .then(channel => channel.createMessage(`**Commands\n\nInfo Commands:**\n` + `**${prefix}help** - This help menu\n` + `**${prefix}ping** - Get bot stats\n` + `**${prefix}about** - Get information about the bot\n\n` + `**Profiler Commands:**\n` + `**${prefix}profile @UserName** - Get user details\n` + `**${prefix}serverinfo** - Get info about the server\n\n` + `**Anime Commands:**\n` + `**${prefix}anime animename** - Get information about an anime via kitsu.io\n` + `**${prefix}manga manganame** - Get information about a manga via kitsu.io\n\n` + `**IMDb Commands:**\n` + `**${prefix}movie moviename** - Get information about a movie via IMDb\n\n` + `**Game Info Commands:**\n` + `**${prefix}ow username platform region** - Get information from a Overwatch profile. Replace username with Battletag, platform with pc, xbl, or psn, and region with eu, kr, us, global, cn\n\n` + `**Misc. Commands:**\n` + `**${prefix}c** - Chat with the bot (uses Program-O)\n` + `**${prefix}meme** ***topline bottomline imageurl*** - Generate a meme\n\n`))
    .catch(function (error) {
      logger.info(new Date() + ': ' + 'Help command used by ' + msg.author.username + '#' + msg.author.discriminator + ' in ' + msg.channel.guild.name)      
    })
  })
}
