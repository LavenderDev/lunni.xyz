const { CommandInteraction, Client, MessageEmbed } = require('discord.js');

module.exports = {
     name: 'dicksize',
     description: 'The size of a members DICK',
     category: 'Fun',
     options: [{name: "member", description: "The member", type: "USER", require: false}],
     owner: false,
     type: 'CHAT_INPUT',
     /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
          const member = interaction.guild.members.cache.get(args[0]) || interaction.member
          const length = Math.floor(Math.random() * 50) / (member.id.toString().split('')[0])
          console.log(`8 ${"=".repeat(length)} D`)
          const embed = new MessageEmbed()
               .setAuthor(`${member.user.username}'s pp`)
               .setDescription(`8${"=".repeat(length)}D`)
               .setColor(client.color)
          
          interaction.reply({embeds: [embed]}).catch(() => {})

   }
}
