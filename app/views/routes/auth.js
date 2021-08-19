const router = require("express").Router()
const authClient = require(`../../modules/client`)
require('dotenv').config()


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