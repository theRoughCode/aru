const axios = require('axios')
const logger = require('../utils/logger.js')
module.exports = function (bot) {
  bot.registerCommand('movie', (msg, args) => {
    axios.get('http://www.omdbapi.com/?t=' + args + '&y=&plot=short&r=json').then(function (response) {
      let embed = {
        author: {
          name: response.data.Title,
          icon_url: 'http://ia.media-imdb.com/images/M/MV5BMTczNjM0NDY0Ml5BMl5BcG5nXkFtZTgwMTk1MzQ2OTE@._V1_.png',
          url: 'http://www.imdb.com/title/' + response.data.imdbID
        },
        title: 'Movie Information:',
        color: 16765404,
        fields: [{
          name: 'Year',
          value: response.data.Year,
          inline: true
        }, {
          name: 'Rated',
          value: response.data.Rated,
          inline: true
        }, {
          name: 'Released',
          value: response.data.Released,
          inline: true
        }, {
          name: 'Runtime',
          value: response.data.Runtime,
          inline: true
        }, {
          name: 'Genre',
          value: response.data.Genre,
          inline: true
        }, {
          name: 'Director',
          value: response.data.Director,
          inline: true
        }, {
          name: 'Writer',
          value: response.data.Writer,
          inline: true
        }, {
          name: 'Actors',
          value: response.data.Actors,
          inline: true
        }, {
          name: 'Language',
          value: response.data.Language,
          inline: true
        }, {
          name: 'Country',
          value: response.data.Country,
          inline: true
        }, {
          name: 'Awards',
          value: response.data.Awards,
          inline: true
        }, {
          name: 'Metascore',
          value: response.data.Metascore,
          inline: true
        }, {
          name: 'Plot',
          value: response.data.Plot,
          inline: false
        }],
        thumbnail: {
          url: response.data.Poster !== 'N/A' ? response.data.Poster : ''
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
      var command = 'Movie (to search for ' + args + ') - Status: Success'
      logger.commandUsed(bot, msg, command)
    }).catch(function (error) {
      if (error) console.error(error)
      bot.createMessage(msg.channel.id, 'Movie not found :slight_frown:')
      var command = 'Movie (to search for ' + args + ') - Status: Failed'
      logger.commandUsed(bot, msg, command)
    })
  })
}
