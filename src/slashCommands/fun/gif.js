const { CommandInteraction, Client, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
require("dotenv").config();
module.exports = {
  name: "gif",
  description: "Search for a gif!",
  category: "Fun",
  options: [
    {
      name: "query",
      description: "The gif you want to search for",
      type: "STRING",
      require: true,
    },
  ],
  owner: false,
  type: "CHAT_INPUT",
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    // https://api.giphy.com/v1/gifs/search?q=asa&api_key=${process.env.giphyAPIKey}&limit=100
    if (!args[0])
      return interaction.reply({ content: `Please supply a search query!!` });
    const msg = args[0].split(/ +/).join("+");
    const res = fetch(
      `https://api.giphy.com/v1/gifs/search?q=${msg}&api_key=${process.env.giphyAPIKey}&limit=100`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.data.length <= 0)
          return interaction.reply({ content: `No gifs found!` });
        const embed = new MessageEmbed()
          .setTitle(`Result for "${args[0]}"`)
          .setImage(json.data[0].url)
          .setFooter(`Powered by giphy`);
        interaction.reply({ content: `${json.data[0].url}` });
      });
  },
};
