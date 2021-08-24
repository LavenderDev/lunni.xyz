const { CommandInteraction, Client, MessageEmbed, Channel } = require('discord.js');

module.exports = {
     name: 'channelinfo',
     description: 'Get information about a channel!',
     category: 'Information',
     owner: false,
     type: 'CHAT_INPUT',
     options: [{name: "channel", description: "The channel", type: "CHANNEL", require: true}],
     /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
          const channel = interaction.guild.channels.cache.find(c => c.id === args[0])
          if (!channel) {
               const noValue = new MessageEmbed()
                    .setAuthor(`Error`)
                    .setDescription(`Please supply a channel!`)
               .setColor("RED")
               return interaction.reply({embeds: [noValue]}).catch(() => {})
          }

          const embed = new MessageEmbed()
               .addFields(
                    { name: "Mention & Name", value: `${channel} | \`${channel.id}\`` },
                    { name: "NSFW?", value: `${channel.nsfw}`, inline: true },
                    { name: "Position", value: `${channel.position}, inline: true` },
                    { name: "Slowmode", value: `${channel.rateLimitPerUser} ( Seconds )`, inline: true },
                    { name: "Topic", value: `${channel.topic || "No topic"}` },
                    
          )
               .setColor(client.color)
          
          interaction.reply({ embeds: [embed] }).catch(() => {})
          

   }
}

