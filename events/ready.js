/**
 * Aru
 * Ready Event
 */

module.exports = function (bot, logger, config, axios, statusManager, commands) {
  // Log start message
  logger.info(new Date() + ': ' + 'Bot ' + 'is currently logged in as ' + bot.user.username + '#' + bot.user.discriminator + ' and ' + 'currently on ' + bot.guilds.size + ' servers and serving ' + bot.users.size + ' users')

  // Set game status
  statusManager.setStatus(bot, logger, config)

  // Post stats
  statusManager.postStats(bot, logger, config, axios)

  // Load commands
  Object.values(commands).forEach(command => command(bot, logger, config, axios, statusManager))
}
