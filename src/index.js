require("dotenv").config()
const { Client, Collection, Intents } = require("discord.js")

const client = new Client({
     intents: Object.keys(Intents.FLAGS).filter(f => f.startsWith("GUILD")),
     partials: ['CHANNEL','GUILD_MEMBER','MESSAGE','REACTION','USER']
})

module.exports = client;
require(`./handlers/index`)(client)
client.commands = new Collection()
client.slashCommands = new Collection()
client.color = "181D23"
client.config = require(`./config.json`)
client.login(process.env.token)