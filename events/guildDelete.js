/**
 * Aru
 * Guild Delete Event
 */

module.exports = function (bot, guild, statusManager, logger, config, axios) {
  // Post stats
  statusManager.postStats(bot, logger, config, axios)

  // Log event
  logger.info(new Date() + ': ' + 'Bot has left ' + guild.name + ' ID#' + guild.id)
}
