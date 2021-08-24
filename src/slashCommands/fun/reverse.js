const { CommandInteraction, Client, MessageEmbed } = require('discord.js');

module.exports = {
     name: 'reverse',
     description: 'Reverse your message',
     category: 'Fun',
     owner: false,
     options: [{name: "message", description: "The Message", type: "STRING", require: true}],
     type: 'CHAT_INPUT',
     /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
          if(!args[0]) return interaction.reply({content: `Please supply a message!`})
          const msg = args[0].split('').reverse().join("")
          interaction.reply({content: msg})


   }
}
