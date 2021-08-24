const { CommandInteraction, Client, MessageEmbed } = require('discord.js');

module.exports = {
     name: 'roleinfo',
     description: 'Seee information on a role',
     category: 'Information',
     owner: false,
     type: 'CHAT_INPUT',
     options: [{name: "role", description: "The role", type: "ROLE", require: true}],
     /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
          const role = interaction.guild.roles.cache.find(r => r.id === args[0])
          if (!role) {
               const noValue = new MessageEmbed()
                    .setAuthor(`Error`)
                    .setDescription(`Please supply a role!`)
               .setColor("RED")
               return interaction.reply({embeds: [noValue]}).catch(() => {})
          }
          /* let perms = []
          if (role.permissions.toArray().length >= 1) {
               perms.push(role.permissions.toArray().join(", "))
          } else {
               perms.push(`No permissions`)
          }
          */
          
          const embed = new MessageEmbed()
               .addFields(
                    { name: "Mention & ID", value: `${role} | \`${role.id}\``, inline: false },
                    { name: "Hoisted?", value: `${role.hoist}`, inline: true },
                    { name: "Position", value: `${role.position}`, inline: true},
                    { name: "Mentionable", value: `${role.mentionable}`, inline: true },
                    { name: "Color", value: `Raw: ${role.color} | Hex: ${role.hexColor}` },
                   // { name: "Permisisons", value: `${perms}` }
          )
          .setColor(role.hexColor)
               .setImage(`https://singlecolorimage.com/get/${role.hexColor}/400x400`)
          
               interaction.reply({embeds: [embed]}).catch(() => {})

   }
}
