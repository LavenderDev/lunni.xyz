const mongoose = require(`./app/modules/database`)
mongoose.login()
require(`./src/index`)
require(`./app/app`)