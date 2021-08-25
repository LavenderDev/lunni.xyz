const { Message, Client, MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
     name: 'rr',
     description: 'Send the rr',
     category: 'Misc',
     owner: true,
     /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {
          message.delete()
          const channel = message.guild.channels.cache.find(c => c.id === "880050855422853190")

          const hehim = "879780402267574272"
          const sheher = "879780428402290759"
          const theythem = "879780452884439080"
          const itits = "879780474921320501"
          const neo = "879780505980141669"
          const other = "879780525634641940"
          const ask = "879780548644585512"

          const purple = "879778419662028822"
          const blue = "879778189638008872"
          const peach = "879778242393952317"
          const green = "879778292868206632"
          const orange = "879778352372793405"
          const pink = "879778465799372810"
          const yellow = "879778500310102016"
          const red = "879778551858094120"


          const pronouns = [hehim, sheher, theythem, itits, neo, other, ask]
          const colorRoles = [purple, blue, peach, green, orange, pink, yellow, red]
          let colorLabels = []
          let pronounLabels = []

          
          pronounLabels.push({ label: `Place Holder`, value: "place_holder"})
          colorLabels.push({ label: `Place Holder`, value: "place_holder" })
          pronouns.forEach((p) => {
               const role = message.guild.roles.cache.find(r => r.id === p)
               const data = {
                    label: `${role.name}`,
                    description: `Choose this if you go by the ${role.name} pronouns!`,
                    value: `${role.id}`
               }
               pronounLabels.push(data)
          })


          colorRoles.forEach((cr) => {
               const role = message.guild.roles.cache.find(r => r.id === cr)
               const data = {
                    label: `${role.name}`,
                    value: `${role.id}`
               }
               colorLabels.push(data)
          })

          
          let pronnounRoleList = []
          pronouns.forEach((r) => pronnounRoleList.push(` ➔ <@&${r}>`))

          let colors = []
          colorRoles.forEach((r) => colors.push(` ➔ <@&${r}>`))

          const pronounRow = new MessageActionRow()
               .addComponents([
                    new MessageSelectMenu()
                         .setCustomId("pronoun_roles")
                         .setPlaceholder("Choose your pronouns here!")
                    .addOptions(pronounLabels)
               ])
          
          const colorRows = new MessageActionRow()
               .addComponents([
                    new MessageSelectMenu()
                         .setCustomId("color_roles")
                         .setPlaceholder("Choose your colors here!")
                    .addOptions(colorLabels)
               ])
          
          
          const embed = new MessageEmbed()
               .setTitle(`Pronoun roles!`)
               .setDescription(`${pronnounRoleList.join("\n")}`)
          .setColor("57F287")
          const embed2 = new MessageEmbed()
               .setTitle(`Color roles!`)
               .setDescription(`${colors.join("\n")}`)
          .setColor("5865F2")
          
          
          channel.send({ embeds: [embed], components: [pronounRow] })
          channel.send({ embeds: [embed2], components: [colorRows] })


          
   }
}
