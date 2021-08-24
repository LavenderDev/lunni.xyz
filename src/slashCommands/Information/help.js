const { readdirSync } = require(`fs`)
const { CommandInteraction, Client, MessageEmbed, Message, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
     name: 'help',
     description: 'List of all commands',
     category: 'Information',
     owner: false,
     type: 'CHAT_INPUT',
     options: [{ name: "command", description: "A command", type: "STRING", require: false}],
     /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
          if (!args[0]) {
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
          interaction.reply({content: `${client.config.bot.help_img}`, components: [row]}).catch(() => {})
          } else {
               const command = client.slashCommands.get(args[0])
               if(!command) return interaction.reply({content: `This is not a valid command`})
               const embed = new MessageEmbed()
                    .setAuthor(`${format(command.name)}`, client.user.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**Description:** ${command.description}\n**Category:** ${command.category}\n**Owner:** ${command.owner}`)
                    .setColor(client.color)
               interaction.reply({embeds: [embed]})
         }
   }
}

function format(str) {
     return str.charAt(0).toUpperCase() + str.split('').slice(1).join("").toLowerCase()
}