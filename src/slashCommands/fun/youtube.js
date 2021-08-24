const { CommandInteraction, Client, MessageEmbed } = require('discord.js');
const yt = require(`yt-search`)
module.exports = {
     name: 'youtube',
     description: 'See information on a youtube video!',
     category: 'Fun',
     options: [{name: "video", description: "The name of the video", type: "STRING", require: true}], 
     owner: false,
     type: 'CHAT_INPUT',
     /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
          if (!args[0]) return interaction.reply({ content: `Please supply a search query` })
          const msg = await interaction.reply({content: `Searching...`})
          const video = (await yt(args[0])).videos[0]
          if(!video) return interaction.reply({content: `No searches found!`})
          const { title, url, image, thumbnail, seconds, timestamp, ago, views } = video
          let description = video.description
          if (description.length >= 1024) {
               description = video.description.slice(0, 500) + "..."
          }
          const embed = new MessageEmbed()
               .addFields(
                    { name: "Title", value: `${title}` },
                    { name: "URL", value: `[Take Me there](${url})`, inline: true},
                    { name: "Length", value: `${timestamp}`, inline: true },
                    { name: "Uploaded", value: `${ago}`, inline: true },
                    { name: "Views", value: `${views}`, inline: true },
                    { name: "Description", value: `${description}` },
          )
               .setColor(client.color)
               .setThumbnail(thumbnail)
          
          interaction.editReply({embeds: [embed], content: `Searched`})



   }
}
