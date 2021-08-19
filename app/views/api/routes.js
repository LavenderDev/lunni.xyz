const router = require('express').Router()
const canva = require('canvas')
const urls = require(`../../data/schemas/shortenedURLS`)


router.get("/", (req, res) => {
     res.send("Hello World")
})

router.get("/urls", async (req, res) => {
     const url = await urls.find()
     let ar = []
     for (const data of url) {
          ar.push({
               short: `${process.env.URL}/${data.short}`,
               full: `${data.full}`,
               clicks: data.clicks
          })
     }
     res.json(ar)
})


module.exports = router;