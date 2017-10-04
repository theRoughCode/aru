const axios = require('axios')
const logger = require('../utils/logger.js')
module.exports = function (bot) {
  bot.registerCommand('ow', (msg, args) => {
    var Username = args[0].replace('#', '-')
    var Platform = args[1]
    var Region = args[2]
    axios.get('https://api.lootbox.eu/' + Platform + '/' + Region + '/' + Username + '/profile').then(function (response) {
      let embed = {
        author: {
          name: response.data.data.username,
          icon_url: 'https://pbs.twimg.com/profile_images/538246909664559104/oeOj9DtM.png',
          url: 'http://masteroverwatch.com/profile/' + Platform + '/' + Region + '/' + Username
        },
        title: 'Overwatch Information:',
        color: 16765404,
        fields: [{
          name: 'Level',
          value: response.data.data.level != null ? response.data.data.level : '0',
          inline: true
        }, {
          name: 'Quick Wins',
          value: response.data.data.games.quick.wins != null ? response.data.data.games.quick.wins : '0',
          inline: true
        }, {
          name: 'Competitive Wins',
          value: response.data.data.competitive.wins != null ? response.data.data.competitive.wins : '0',
          inline: true
        }, {
          name: 'Competitive Lost',
          value: response.data.data.competitive.lost != null ? response.data.data.competitive.lost : '0',
          inline: true
        }, {
          name: 'Playtime (Quick)',
          value: response.data.data.playtime.quick != null ? response.data.data.playtime.quick : '0',
          inline: true
        }, {
          name: 'Playtime (Competitive)',
          value: response.data.data.playtime.competitive != null ? response.data.data.playtime.competitive : '0',
          inline: true
        }],
        thumbnail: {
          url: response.data.data.avatar != null ? response.data.data.avatar : ''
        },
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: bot.user.username
        }
      }
      bot.createMessage(msg.channel.id, {
        embed: embed
      })
      var command = 'Overwatch (to search for ' + args + ') - Status: Success'
      logger.commandUsed(bot, msg, command)
    }).catch(function (error) {
      if (error) console.error(error)
      bot.createMessage(msg.channel.id, 'Overwatch profile not found :slight_frown: ')
      var command = 'Overwatch - Status: Failed'
      logger.commandUsed(bot, msg, command)
    })
  })
}
