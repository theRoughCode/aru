/**
 * Aru
 * Guild Create Event
 */

module.exports = function (bot, guild, statusManager, logger, config, axios) {
  // Post stats
  statusManager.postStats(bot, logger, config, axios)

  // Log event
  logger.info(new Date() + ': ' + 'Bot has joined ' + guild.name + ' ID#' + guild.id)
}
