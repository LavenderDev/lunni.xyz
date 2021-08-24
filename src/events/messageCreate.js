const client = require(`../index`)
const users = require(`../../data/schemas/users`)
const guild = require(`../../data/schemas/guildData`)
const owners = [
    '462936117596127232'
]
client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    const userData = await users.findOne({ userId: message.author.id })
    if(!userData) { await users.create({ userId: message.author.id }) }
    const guildData = await guild.findOne({ guildId: message.guild.id })
    
})