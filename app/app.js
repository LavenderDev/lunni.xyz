const express = require(`express`)
const app = express()
const port = 80
const cookies = require(`cookies`)
const middleware = require(`./modules/middleware`)
const routes = require(`./views/routes/routes`)
const apiroutes = require(`./views/api/routes`)
const userRoutes = require(`./views/routes/user`)

app.set('view engine', 'pug')
app.set('views', __dirname + "/views")
app.use(cookies.express('a','b','c'))
app.use(express.static(`${__dirname}/assets`));
app.use(express.urlencoded({extended: true}))
app.use("/", middleware.updateUser, routes)
app.use("/dashboard", middleware.updateUser, middleware.validateUser, middleware.betaUser, userRoutes)
app.use("/api", middleware.validateUser, middleware.betaUser, apiroutes)
app.all('*', (req, res) => res.render("errors/404"));
app.listen(port, () => console.log(`Server online and running on ${port}, http://localhost:${port}`))