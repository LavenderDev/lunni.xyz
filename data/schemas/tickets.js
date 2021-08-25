const { model, Schema } = require(`mongoose`);

const schema = new Schema({
  userId: String,
  channelId: String,
});

module.exports = model("Tickets", schema);
