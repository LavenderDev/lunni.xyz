const { model, Schema } = require("mongoose")

const schema = new Schema({
     userId: String,
     cmd: String,
     time: Number,
     cooldown: Number,
})

module.exports = model("Cooldowns", schema)