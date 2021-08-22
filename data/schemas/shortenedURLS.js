const { Schema, model } = require('mongoose')



function rId() {
     let chars = "1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
     let str = ''
     for (let i = 0; i < 7; i++) {
          str += chars[Math.floor(Math.random() * chars.length)]
     }
     return str
}

const schema = new Schema({
     short: { type: String, required: true, default: `${rId()}`},
     full: { type: String, required: true },
     clicks: { type: Number, required: true, default: 0 },
     
})

module.exports = model("ShortendURLs", schema)
