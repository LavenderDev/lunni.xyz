const { model, Schema } = require(`mongoose`);

const schema = new Schema({
  userId: String,
  beta: { type: Boolean, default: false },
  staff: { type: Boolean, default: false },
  coins: { type: Number, default: 0 },
  bank: { type: Number, default: 0 },
  permissionLevel: { type: Number, default: 0 },
});

module.exports = model("Users", schema);
