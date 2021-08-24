const { CommandInteraction, Client, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
     name: 'kiss',
     description: 'Kiss a member 😳',
     category: 'Interact',
     owner: false,
     type: 'CHAT_INPUT',
     options: [{name: "member", description: "The member you want to kiss 😳", type: "USER", require: false}],
     /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
          if (!args[0]) return interaction.reply({ content: `Please mention a member you wish to kiss 😳` })
          const member = interaction.guild.members.cache.find(m => m.id === args[0])
          fetch("https://lunni.xyz/api/gif/kiss")
               .then((res) => res.json())
               .then((json) => {
                    const img = json.url
                    console.log(img)
                    const embed = new MessageEmbed()
                         .setAuthor(`${interaction.member.user.username} is kissing ${member.user.username} 😳`)
                         .setImage(img)
                         .setColor(client.color)
                    interaction.reply({embeds: [embed]})
          })

   }
}
