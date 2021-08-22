const router = require("express").Router()

const fetch = require("node-fetch")
require('dotenv').config()

router.get("/url/shortener", (req, res) => {
     res.render("pages/url", {name: "Url Shortener"})
})


router.get("/url/list", async (req, res) => {
   
     fetch(`${process.env.URL}/api/urls`).
          then(res => res.json())
          .then(json => {
               
               res.render('pages/urls',  { urlList: json, base: process.env.URL})
      });
          

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


router.post("/shortURLs", async (req, res) => {
     await urls.create({ full: req.body.fullUrl })
     res.redirect("/url/shortener")
})


module.exports = router;