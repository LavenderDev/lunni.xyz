const router = require('express').Router()
const middleware = require(`../../modules/middleware`)
const bot = require(`../../../src/index`)
require('dotenv').config()


router.get("/", (req, res) => {
     let totalUserGuilds = []
     bot.guilds.cache.forEach((g) => {
          const member = g.members.cache.find(m => m.id === res.locals.user.id)
          if (member) {
            if (g.members.cache.get(res.locals.user.id).permissions.has("ADMINISTRATOR")) {
              totalUserGuilds.push(g)
            }
          }
     })
     
     res.render("pages/user/home", { user: res.locals.user, guilds: totalUserGuilds })
})

router.get("/server/:id",  middleware.validateUserPerms, (req, res) => {
     res.render("pages/user/server", {user: res.locals.user, guild: bot.guilds.cache.get(req.params.id), me: bot, nickName: bot.guilds.cache.get(req.params.id).members.cache.find(m => m.id === bot.user.id).nickname})
})

router.put("/server/:id/:module", middleware.validateGuild, async (req, res) => {
     try {
          const { id, module } = req.params
          bot.guilds.cache.find(g => g.id === id).members.cache.find(m => m.id === bot.user.id).setNickname(req.body.username)
          res.redirect(`/panel`)
     } catch (err) {
         res.render("errors/404") 
     }
})

module.exports = router;