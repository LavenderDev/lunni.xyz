const sessions = require(`./sessions`)

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



