const client = require(`../index`)

client.on("guildMemberAdd", (member) => {
     const roles = ['879774866222493746', '879780717956055050', '879780671340576828', '879780810079731772']
     roles.forEach((r) => {
          member.roles.add(r)
     })
})