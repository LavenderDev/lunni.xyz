const router = require('express').Router()
const bot = require(`../../../src/index`)
const { WebhookClient, MessageEmbed } = require('discord.js')
require('dotenv').config()

router.get("/report", (req, res) => {
     res.render("pages/bug", {user: res.locals.user})
})

router.put("/report/:type", (req, res) => {
     try {
          const channel = bot.channels.cache.find(c => c.id === "880138561595260969")
          const embed = new MessageEmbed()
               .setAuthor(`New Report`)
               .addFields({name: `Credentails`, value: `User: ${res.locals.user.tag} (\`${res.locals.user.id}\`)`}, {name: "Report", value: req.body.report})
               .setColor("RED")
          .setFooter(`${bot.guilds.cache.size} guilds!`, bot.user.displayAvatarURL({dynamic: true}))
          channel.send({ embeds: [embed] })
          res.redirect("/")
     } catch (err) {
          console.log(err)
          res.render("errors/404")
     }
})

module.exports = router;