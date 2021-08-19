const router = require('express').Router()

router.get("/", (req, res) => {
     res.render("pages/home", {user: res.locals.user})
})

module.exports = router;