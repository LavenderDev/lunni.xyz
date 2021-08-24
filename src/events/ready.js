const client = require(`../index`)
const guildData = require(`../../data/schemas/guildData`)
client.on("ready", async () => {
     console.log(`${client.user.tag} is now online!`)
     setInterval(() => {
          client.user.setActivity(`/help | ${client.users.cache.size} users!`, { type: "WATCHING" })
     }, 10000);
     
     setInterval(async () => {
          
          client.guilds.cache.forEach(async (g) => {
               const data = await guildData.findOne({ guildId: g.id })
               if (!data) {
                    await guildData.create({ guildId: g.id })
               }
          })
     }, 1000);
})