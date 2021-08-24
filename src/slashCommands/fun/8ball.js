const response = ["yes", "no", "maybe", 'possablity', 'seems like it!', 'defently!', 'go for it', 'yup', 'not quite sure']

const { CommandInteraction, Client, MessageEmbed } = require('discord.js');

module.exports = {
     name: '8ball',
     description: 'Get a response for your question!',
     category: 'Fun',
     owner: false,
     type: 'CHAT_INPUT',
     options: [{ name: "question", description: "Say a question", type: "STRING", require: true}],
     /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
          if (!args[0]) {
          return interaction.reply({content: `Please supply a question smh`})
          }

          const res = response[Math.floor(Math.random() * response.length)]
          interaction.reply({content: `${res}`})


   }
}
