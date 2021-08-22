const router = require('express').Router()
require('dotenv').config()


router.get("/", (req, res) => {
     res.render("pages/user/home", {user: res.locals.user})
})





module.exports = router;