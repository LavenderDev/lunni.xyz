const express = require(`express`)
const methodOverride = require(`method-override`)
const bodyparser = require(`body-parser`)
const app = express()
const port = 80
const cookies = require(`cookies`)
const middleware = require(`./modules/middleware`)
const routes = require(`./views/routes/routes`)
const apiroutes = require(`./views/api/routes`)
const userRoutes = require(`./views/routes/user`)
const otherRoutes = require(`./views/routes/otherRoutes`)

app.set('view engine', 'pug')
app.set('views', __dirname + "/views/")
app.use(bodyparser.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.use(cookies.express('a','b','c'))
app.use(express.static(`${__dirname}/assets`));
app.use(express.urlencoded({extended: true}))
app.use("/", middleware.updateUser, routes, middleware.validateUser, otherRoutes)
app.use("/panel", middleware.updateUser, middleware.validateUser, middleware.updateGuilds, middleware.getUserGuilds, userRoutes)
app.use("/api", apiroutes)
app.all('*', (req, res) => res.render("errors/404"));
app.listen(port, () => console.log(`Server online and running on ${port}, http://localhost:${port}`))