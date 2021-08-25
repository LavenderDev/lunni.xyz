const client = require(`../index`)
// i could of done this better ik 

client.on("interactionCreate", (i) => {
     if (i.isSelectMenu()) {
          if (i.customId === "color_roles") {
               
               if (i.values[0] === "place_holder") {
                    return i.deferUpdate()
               } else {
                    const member = i.guild.members.cache.find(m => m.id === i.user.id)
                    if (member.roles.cache.has(i.values[0])) {
                         member.roles.remove(i.values[0])
                         return i.reply({ content: `I have removed your <@&${i.values[0]}> role!`, ephemeral: true })
                    } else {
                         member.roles.add(i.values[0])
                         return i.reply({ content: `I have given you the <@&${i.values[0]}> role!`, ephemeral: true })
                    }
               }
          } else if (i.customId === "pronoun_roles") {
               if (i.values[0] === "place_holder") {
                    return i.deferUpdate()
               } else {
                    const member = i.guild.members.cache.find(m => m.id === i.user.id)
                    if (member.roles.cache.has(i.values[0])) {
                         member.roles.remove(i.values[0])
                         return i.reply({ content: `I have removed your <@&${i.values[0]}> role!`, ephemeral: true })
                    } else {
                         member.roles.add(i.values[0])
                         return i.reply({ content: `I have given you the <@&${i.values[0]}> role!`, ephemeral: true })
                    }
               }
          }
     }
})