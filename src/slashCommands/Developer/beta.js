const { CommandInteraction, Client, MessageEmbed } = require('discord.js');
const user = require(`../../../data/schemas/users`)
module.exports = {
     name: 'beta',
     description: 'Give a user beta access',
     category: 'Developer',
     owner: true,
     options: [{name: "member", description: "The member", type: "USER", requrie: true}, {name: "value", description: "Yes or no", type: "BOOLEAN", require: true}],
     /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
          const member = interaction.guild.members.cache.get(args[0])
          const userData = await user.findOne({ userId: member.id })
          let value = args[1] || false
          if (value === false) {
               if (userData.beta === false) {
                    return interaction.reply({content: `${member} is not a beta user`})
               } else {
                    await user.findOneAndUpdate({userId: member.id}, {beta: false})
               }
          } else {
               if (userData.beta === true) {
                    return interaction.reply({content: `${member} is already a beta user`})
               } else {
                    await user.findOneAndUpdate({userId: member.id}, {beta: true})
               }
          }



          let msg = ``;
          if (args[1] === true) {
               member.roles.add(`878594000486031370`).catch(() => {})
               msg += `Given ${member} beta access`
          } else {
               msg += `Removed ${member}'s beta access`
               member.roles.remove(`878594000486031370`).catch(() => {})
          }
          interaction.reply({ content: `${msg}` })
          


   }
}
