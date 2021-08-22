const { Message, Client, MessageEmbed } = require('discord.js');
const user = require(`../../../data/schemas/users`)
module.exports = {
     name: 'monthly',
     description: 'Gain an random amount of coins each month!',
     category: 'Economy',
     cooldown: 604800,
     owner: false,
     disabled: true,
     /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {
          const userData = await user.findOne({userId: message.author.id})
          const amount = Math.floor(Math.random() * 249) + 1
          await userData.findOneAndUpdate({ userId: message.author.id },
          {
                coins: Number(userData.coins) + Number(amount)
          })
          
          message.reply({content: `Added \`${amount}\` to your balance!`})

   }
}
