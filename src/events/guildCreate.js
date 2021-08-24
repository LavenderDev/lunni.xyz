const client = require(`../index`)
const guildData = require(`../../data/schemas/guildData`)
client.on("guildCreate", async (guild) => {
     await guildData.create({ guildId: guild.id })
})