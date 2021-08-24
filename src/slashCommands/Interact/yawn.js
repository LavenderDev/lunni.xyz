const { CommandInteraction, Client, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
     name: 'yawn',
     description: 'hmm, idk what to put here put ig yawn 👍',
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
          fetch("https://lunni.xyz/api/gif/yawn")
          .then((res) => res.json())
          .then((json) => {
               const img = json.url
               console.log(img)
               const embed = new MessageEmbed()
                    .setAuthor(`${interaction.member.user.username} is yawning 💤`)
                    .setImage(img)
                    .setColor(client.color)
               interaction.reply({embeds: [embed]})
     })


   }
}
