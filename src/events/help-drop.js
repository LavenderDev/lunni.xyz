const client = require(`../index`)
const { MessageEmbed } = require(`discord.js`)

client.on("interactionCreate", (i) => {
     if (i.isSelectMenu()) {
          if (i.customId === "help_selector") {
               const cmds = client.slashCommands.filter(cmd => cmd.category.toLowerCase() === i.values[0].toLowerCase())
               const cmdMap = cmds.map(cmd => `${format(cmd.name)} : ${format(cmd.description ? cmd.description : 'None')}`).join('\n');
                    const embed = new MessageEmbed()
                         .setAuthor(`${format(i.values[0])} Commands!`, client.user.displayAvatarURL({ dynamic: true, format: "png" }))
                         .setDescription(`For more info about a specific command: use \`/help <command>\`\n\`\`\`yaml\n${cmdMap}\n\`\`\``)
                         .setColor(client.color)
                    i.reply({embeds: [embed], ephemeral: true}).catch(() => {})
          }
     }
})

function format(str) {
     return str.charAt(0).toUpperCase() + str.split('').slice(1).join("").toLowerCase()
}