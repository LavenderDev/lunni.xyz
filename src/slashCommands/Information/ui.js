const { CommandInteraction, Client, MessageEmbed } = require('discord.js');
const users = require(`../../../data/schemas/users`)
module.exports = {
     name: 'userinfo',
     description: 'See information on a user',
     category: 'Information',
     owner: false,
     options: [{name: "member", description: "The member", type: "USER", require: false}],
     /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
          const member = interaction.guild.members.cache.get(args[0]) || interaction.member
          const userData = await users.findOne({userId: member.id})
          const embed = new MessageEmbed()
               .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
               .setColor(client.color)
               .addFields(
                    { name: `Mention & ID`, value: `<@${member.id}> | \`${member.id}\`` },
                    { name: `Joined Server`, value: `${member.joinedAt.toLocaleString()}`, inline: true},
                    { name: `Account Created`, value: `${member.user.createdAt.toLocaleString()}`, inline: true },
                    { name: `User Data`, value: `**Beta User:** ${userData.beta}\n**Lunni Staff:** ${userData.staff}`},
                    { name: `Roles`, value: member.roles.cache ? member.roles.cache.map((r) => `${r}`).join(", ") : "" },
                    
               )
 
               interaction.reply({embeds: [embed]})
   }
}
