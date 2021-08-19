const express = require(`express`)
const app = express()
const port = 8000 
const cookies = require(`cookies`)
const mongoose = require(`./modules/database`)
const middleware = require(`./modules/middleware`)
const routes = require(`./views/routes/routes`)
const apiroutes = require(`./views/api/routes`)
const authRoutes = require(`./views/routes/auth`)
const urlRoutes = require(`./views/routes/urls`)
mongoose.login()

app.set('view engine', 'pug')
app.set('views', __dirname + "/views")
app.use(cookies.express('a','b','c'))
app.use(express.static(`${__dirname}/assets`));
app.use(express.urlencoded({extended: false}))
app.use("/", middleware.updateUser, routes, authRoutes, urlRoutes)
app.use("/api", apiroutes)
app.all('*', (req, res) => res.render("errors/404"));
app.listen(port, () => console.log(`Server online and running on ${port}, http://localhost:${port}`))