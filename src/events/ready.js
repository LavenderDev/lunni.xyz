const client = require(`../index`)

client.on("ready", () => {
     client.user.setActivity(`.help | ${client.users.cache.size} users!`, { type: "WATCHING" })
     console.log(`${client.user.tag} is now online!`)
})