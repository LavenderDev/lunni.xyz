const { CommandInteraction, Client, MessageEmbed } = require('discord.js');
const chars = {
     char1: ':one:',
     char2: ':two:',
     char3: ':three:',
     char4: ':four:',
     char5: ':five:',
     char6: ':six:',
     char7: ':seven:',
     char8: ':eight:',
     char9: ':nine:',
     "char+": ':heavy_plus_sign:',
     "char-": ':heavy_minus_sign:',
     "char*": ':asterisk:',
     "char÷": ':heavy_division_sign:',
     "char#": ':hash:',
     "char!": `:exclamation:`
}
 
module.exports = {
     name: 'emojify',
     description: 'Emojify a sentence',
     category: 'Fun',
     owner: false,
     type: 'CHAT_INPUT',
     options: [{name: "message", description: "The Message", type: "STRING", require: true}],
     /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
          if (!args[0]) return interaction.reply({ content: `Please supply a message!` }).catch(() => {})
          let sentence = '';

          
          for(let e of args[0]) {
              if(/([a-z])/gim.test(e)) sentence += `:regional_indicator_${e.toLowerCase()}:`
              else if(/\s/.test(e)) sentence += ':blue_square:'
              else if(/([1-9])/.test(e) || ['+', '-', '*', '#', '!', '÷'].includes(e)) sentence += chars[`char${e}`]
              else sentence += e
          }
          interaction.reply({content: sentence}).catch(() => {})

   }
}
