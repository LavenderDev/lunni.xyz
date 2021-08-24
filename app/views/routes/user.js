const router = require('express').Router()
const middleware = require(`../../modules/middleware`)
const bot = require(`../../../src/index`)
require('dotenv').config()


router.get("/", middleware.getUserGuilds, (req, res) => {
     res.render("pages/user/home", { user: res.locals.user, guilds: res.locals.meGuilds })
     
})

router.get("/server/:id", (req, res) => {
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