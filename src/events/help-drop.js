const client = require(`../index`)
const { MessageEmbed } = require(`discord.js`)

client.on("interactionCreate", (i) => {
     if (!interaction.guild.me.permissions.has("EMBED_LINKS") ||
        interaction.guild.me.permissions.has("SEND_MESSAGES") ||
        interaction.guild.me.permissions.has("USE_EXTERNAL_EMOJIS")) {return interaction.channel.send({ content: `Im missing one my required permissions: "Embed Links" "Send Messages" "Use External Emojis"` }).catch(() => { })}
     if (i.isSelectMenu()) {
          if (i.customId === "help_selector") {
               const cmds = client.slashCommands.filter(cmd => cmd.category.toLowerCase() === i.values[0].toLowerCase())
               const cmdMap = cmds.map(cmd => `${format(cmd.name)} : ${format(cmd.description ? cmd.description : 'None')}`).join('\n');
                    const embed = new MessageEmbed()
                         .setAuthor(`${format(i.values[0])} Commands!`, client.user.displayAvatarURL({ dynamic: true, format: "png" }))
                         .setDescription(`For more info about a specific command: use \`/help <command>\`\n\`\`\`yaml\n${cmdMap}\n\`\`\``)
                         .setColor(client.color)
                    i.reply({embeds: [embed], ephemeral: true})
          }
     }
})

function format(str) {
     return str.charAt(0).toUpperCase() + str.split('').slice(1).join("").toLowerCase()
}