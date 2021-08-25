const client = require(`../index`)
const schema = require(`../../data/schemas/tickets`)
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
client.on("interactionCreate", async (i) => {
     if (i.isButton()) {
          const id = i.customId
          if (id === "ticket_option_0") {
               const data = await schema.findOne({ userId: i.user.id })
               if(data) return i.reply({content: `You already have a ticket open. <#${data.channelId}>`, ephemeral: true})

               const channel = await i.guild.channels.create(`Ticket - ${i.user.id}`)
               channel.setParent("880030635543130153")
               channel.permissionOverwrites.edit(i.guild.id, {
                    VIEW_CHANNEL: false,
                    SEND_MESSAGES: false
               })
               channel.permissionOverwrites.create("879776113545588757", {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true
               })

               channel.permissionOverwrites.create(i.user.id, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true
               })

     
               i.reply({ content: `Ticket has been opened. <#${channel.id}>`, ephemeral: true })
               
               await schema.create({
                    userId: i.user.id,
                    channelId: channel.id
               })
               const embed = new MessageEmbed()
                    .setDescription(`**Welcome,** please state your bot report / question and staff will get back to you soon!`)
                    .setColor("GREEN")
               
               
               const row = new MessageActionRow()
               .addComponents([new MessageButton() .setCustomId("close_ticket") .setStyle("SUCCESS") .setLabel("Close")])

               channel.send({ embeds: [embed], content: `<@${i.user.id}>`, components: [row]})
          } else if (id === "ticket_option_1") {
               const data = await schema.findOne({ userId: i.user.id })
               if(data) return i.reply({content: `You already have a ticket open. <#${data.channelId}>`, ephemeral: true})

               const channel = await i.guild.channels.create(`Ticket - ${i.user.id}`)
               channel.setParent("880030635543130153")
               channel.permissionOverwrites.edit(i.guild.id, {
                    VIEW_CHANNEL: false,
                    SEND_MESSAGES: false
               })
               channel.permissionOverwrites.create("879776113545588757", {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true
               })

               channel.permissionOverwrites.create(i.user.id, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true
               })

     
               i.reply({ content: `Ticket has been opened. <#${channel.id}>` , ephemeral: true})
               
               await schema.create({
                    userId: i.user.id,
                    channelId: channel.id
               })
               const embed = new MessageEmbed()
                    .setDescription(`**Welcome,** please state your server report / question and staff will get back to you soon!`)
                    .setColor("GREEN")

                    const row = new MessageActionRow()
                    .addComponents([new MessageButton() .setCustomId("close_ticket") .setStyle("SUCCESS") .setLabel("Close")])
     
                    channel.send({ embeds: [embed], content: `<@${i.user.id}>`, components: [row]})

          }  else if (id === "ticket_option_2") {
               const data = await schema.findOne({ userId: i.user.id })
               if(data) return i.reply({content: `You already have a ticket open. <#${data.channelId}>`, ephemeral: true})

               const channel = await i.guild.channels.create(`Ticket - ${i.user.id}`)
               channel.setParent("880030635543130153")
               channel.permissionOverwrites.edit(i.guild.id, {
                    VIEW_CHANNEL: false,
                    SEND_MESSAGES: false
               })
               channel.permissionOverwrites.create("879776113545588757", {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true
               })

               channel.permissionOverwrites.create(i.user.id, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true
               })

     
               i.reply({ content: `Ticket has been opened. <#${channel.id}>` , ephemeral: true})
               
               await schema.create({
                    userId: i.user.id,
                    channelId: channel.id
               })
               const embed = new MessageEmbed()
                    .setDescription(`**Welcome,** please state your server report / question and staff will get back to you soon!`)
                    .setColor("GREEN")

                    const row = new MessageActionRow()
                    .addComponents([new MessageButton() .setCustomId("close_ticket") .setStyle("SUCCESS") .setLabel("Close")])
     
                    channel.send({ embeds: [embed], content: `<@${i.user.id}>`, components: [row]})

          } else if (id === "ticket_option_3") {
               const data = await schema.findOne({ userId: i.user.id })
               if(data) return i.reply({content: `You already have a ticket open. <#${data.channelId}>`, ephemeral: true})

               const channel = await i.guild.channels.create(`Ticket - ${i.user.id}`)
               channel.setParent("880030635543130153")
               channel.permissionOverwrites.edit(i.guild.id, {
                    VIEW_CHANNEL: false,
                    SEND_MESSAGES: false
               })
               channel.permissionOverwrites.create("879776113545588757", {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true
               })

               channel.permissionOverwrites.create(i.user.id, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true
               })

     
               i.reply({ content: `Ticket has been opened. <#${channel.id}>` , ephemeral: true})
               
               await schema.create({
                    userId: i.user.id,
                    channelId: channel.id
               })
               const embed = new MessageEmbed()
                    .setDescription(`**Welcome,** please state your report and staff will get back to you soon!`)
                    .setColor("GREEN")

                    const row = new MessageActionRow()
                    .addComponents([new MessageButton() .setCustomId("close_ticket") .setStyle("SUCCESS") .setLabel("Close")])
     
                    channel.send({ embeds: [embed], content: `<@${i.user.id}>`, components: [row]})

          } else if (id === "close_ticket") {
               const data = await schema.findOne({ userId: i.user.id })
               if (!data) {
                    return i.reply({ content: `This is not a ticket.` , ephemeral: true})
               } else {
                    i.reply({ content: `Closing ticket in 5 seconds!` })
                    setTimeout(async () => {
                         i.channel.delete()
                         await schema.findOneAndRemove({ userId: i.user.id })
                    }, 5000);
               }
               
          } 
     }
})


