const { CommandInteraction, Client, MessageEmbed } = require('discord.js');

module.exports = {
     name: 'soon',
     description: 'See whats coming soon!',
     category: 'Information',
     owner: false,
     type: 'CHAT_INPUT',
     /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
          const embed = new MessageEmbed()
               .setAuthor(`Coming Soon`)
               .setDescription(`Since the bot is not finshed, here is a list of what to expect soon!`)
               .addFields(
               { name: "Soon", value: `\`\`\`\nSuggestions System\nAuto Moderation ( Auto Ban, Auto Warn etc )\nModeration ( Ban, kick, warn, mute, timedmute, unmute and more)\nAuto React System\nServer Stats system\nLevel System`}
          )
               .setColor(client.color)
          
          interaction.reply({embeds: [embed]})


   }
}
