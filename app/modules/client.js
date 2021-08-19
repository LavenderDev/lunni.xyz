const oauthClient = require(`disco-oauth`)
require('dotenv').config()

const client = new oauthClient(process.env.id, process.env.secret)
client.setScopes('identify', 'guilds')
client.setRedirect(`${process.env.URL}/authorised`)

module.exports = client;