const sessions = require(`./sessions`)
const user = require(`../../data/schemas/users`)
module.exports.updateUser = async (req, res, next) => {
     try {
       const key = res.cookies.get('key')
         ?? req.get('Authorization');
       if (key) {
         const { authUser } = await sessions.get(key);
         res.locals.user = authUser;
       }
     } finally {
       return next();
     }
};

 
module.exports.validateUser = async (req, res, next) => {
  return(res.locals.user) ? next() : res.render("errors/401")
};

module.exports.betaUser = async (req, res, next) => {
  const userData = await user.findOne({ userId: res.locals.user.id })
  if (userData) {
    next()
  } else {
    res.render("errors/cantAccess")
  }
}
