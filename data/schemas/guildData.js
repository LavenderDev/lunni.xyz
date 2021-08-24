const { model, Schema } = require(`mongoose`)

const schema = new Schema({
     // General
     guildId: String,
     premium: { type: Boolean, default: false },
     suggestions: { type: Boolean, default: false },
     suggestionsChannel: { type: String, default: "None" },

     // Moderation
     automod: { type: Boolean, default: false },
     blacklistedWords: { type: Array, default: [] },
     dmUser: { type: Boolean, default: false },
     logs: { type: Boolean, default: false },
     logsChannel: { type: String, default: "None" },
     mutedRole: { type: String, default: "None" },
     
})

module.exports = model("Guilds", schema)