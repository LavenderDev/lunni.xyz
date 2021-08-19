const urls = require(`../../data/schemas/shortenedURLS`)
const router = require("express").Router()
require('dotenv').config()

router.get("/url", (req, res) => {
     res.render("pages/url", {name: "Url Shortener"})
})

router.get("/urls", (req, res) => {
     const data = urls.find()
     res.render('urls',  { shortUrls: data})
})


router.post("/shortURLs", async (req, res) => {
     await urls.create({ full: req.body.fullUrl })
     res.redirect("/urls")
})

router.get("/:shortedURL", async (req, res) => {
     const data = await urls.findOne({ short: req.params.shortedURL })
     if (data) {
          data.clicks++
          data.save()
          res.redirect(data.full)
     } else {
          res.render("errors/404")
     }

})
module.exports = router;