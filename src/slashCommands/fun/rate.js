const { CommandInteraction, Client, MessageEmbed } = require('discord.js');

module.exports = {
     name: 'rate',
     description: 'Get a cool rating on a member',
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
          const rate = Math.floor(Math.random() * 100)
          const embed = new MessageEmbed()
               .setAuthor(`${member.user.tag}'s Rating!`)
               .setDescription(`I say a solid ${rate}%`)
               .setColor("GREEN")
          
          interaction.reply({embeds: [embed]})

   }
}
