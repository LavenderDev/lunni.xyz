const client = require(`../index`)
const guildData = require(`../../data/schemas/guildData`)
client.on("guildDelete", async (guild) => {
     await guildData.findOneAndRemove({ guildId: guild.id })
})