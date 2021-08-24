const { readdirSync } = require(`fs`)
const { CommandInteraction, Client, MessageEmbed, Message, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
     name: 'help',
     description: 'List of all commands',
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
          let labels = []
          let emojis = {
               
          }
          readdirSync(`./src/slashCommands`).forEach((dir) => {
               
               let data = {
                    label: `${format(dir)}`,
                    description: `Click to get information about the ${dir.toLowerCase()} category!`,
                    value: `${dir.toLowerCase()}`
               }
               
               labels.push(data)
          })

          const row = new MessageActionRow()
               .addComponents(
                    [new MessageSelectMenu()
                    .setCustomId("help_selector")
                    .addOptions(labels)
               ])
          interaction.reply({content: `${client.config.bot.help_img}`, components: [row]})
   }
}

function format(str) {
     return str.charAt(0).toUpperCase() + str.split('').slice(1).join("").toLowerCase()
}