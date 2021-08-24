const { CommandInteraction, Client, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
     name: 'smile',
     description: 'For when your happy!',
     category: 'Interact',
     owner: false,
     type: 'CHAT_INPUT',
     /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
          fetch("https://lunni.xyz/api/gif/smile")
          .then((res) => res.json())
          .then((json) => {
               const img = json.url
               console.log(img)
               const embed = new MessageEmbed()
                    .setAuthor(`${interaction.member.user.username} is smiling! 😃`)
                    .setImage(img)
                    .setColor(client.color)
               interaction.reply({embeds: [embed]}).catch(() => {})
     })


   }
}
