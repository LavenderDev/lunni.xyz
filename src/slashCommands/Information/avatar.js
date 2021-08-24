const { CommandInteraction, Client, MessageEmbed } = require('discord.js');

module.exports = {
     name: 'avatar',
     description: 'Get a users avatar',
     category: 'Information',
     owner: false,
    type: 'CHAT_INPUT',
     options: [ { name: "member", description: "The member", type: "USER", require: false}],
     /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
       const member = interaction.guild.members.cache.get(args[0]) || interaction.guild.members.cache.get(interaction.user.id)
       const embed = new MessageEmbed()
         .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true, format: "png" }))
         .setDescription(`[PNG](${getAv("png", member)}) | [JPG](${getAv("png", member)}) | [WEBP](${getAv("webp", member)})`)
         .setImage(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
        .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL({dynamic: true, format: "png"}))
         .setColor(client.color)
       
         interaction.reply({embeds: [embed]})

   }
}


function getAv(format, member) {
  return `${member.user.displayAvatarURL({dynamic: true, format: `${format}`})}`
}