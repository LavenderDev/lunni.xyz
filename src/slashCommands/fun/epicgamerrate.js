const { CommandInteraction, Client, MessageEmbed } = require('discord.js');

module.exports = {
     name: 'epicgamerrate',
     description: 'Get a epic gamer rating on a member',
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
               .setAuthor(`Epic gamer rating machine!`)
               .setDescription(`${member} is ${res}% epic gamer`)
               .setColor("GREEN")
          
          interaction.reply({embeds: [embed]}).catch(() => {})

   }
}
