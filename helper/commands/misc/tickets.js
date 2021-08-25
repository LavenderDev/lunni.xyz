const { Message, Client, MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
     name: 'tickets',
     description: 'Sends the ticket promot',
     category: 'Misc',
     owner: true,
     /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {
          const channel = message.guild.channels.cache.find(c => c.id === "880030685656666143")
          const embed = new MessageEmbed()
               .setDescription(`:one: Bot Support / Questions\n\n:two: Server Support / Questions\n\n:three: Report something / Someone\n\n❓ Other`)
               .setColor("ED4245")
               .setFooter(`Opening false tickets, / spamming in tickets means you will get punished!`)
          let btns = []
          for (let i = 0; i <= 3; i++) {
               let ems = {
                    0: "1️⃣",
                    1: "2️⃣",
                    2: "3️⃣",
                    3: "❓"
               }
             
              btns.push(new MessageButton() .setCustomId(`ticket_option_${i}`) .setEmoji(`${ems[i]}`) .setStyle("SECONDARY"))
          }

          const row = new MessageActionRow()
               .addComponents(btns)
          
          channel.send({embeds: [embed], components: [row]})


   }
}
