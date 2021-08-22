

const router = require('express').Router()
const authClient = require(`../../modules/client`)
const botapp = require(`../../../src/index`)
require('dotenv').config()

// Base

router.get("/", (req, res) => {
     res.render("pages/home", {user: res.locals.user, bot: botapp})
})


// Auth Routes

router.get("/login", (req, res) => {
     res.redirect(`${process.env.authURL}`)
})


router.get("/authorised", async (req, res) => {
     try {
          const { code } = req.query
          const key = await authClient.getAccess(code)
          res.cookies.set("key", key)
          res.redirect("/")
     } catch (err) {
          res.render("errors/404")
          console.log(err)
     }
})


router.get("/logout", (req, res) => {
     res.cookies.set('key', '');
     res.redirect("/")
})







module.exports = router;