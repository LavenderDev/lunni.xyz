const authClient = require(`./client`)
const sessions = new Map()

function get(key) {
     return sessions.get(key) ?? create(key)
}

async function create(key) {
     setTimeout(() => {
          sessions.delete(key)
     }, 5 *60 * 1000);
     await update(key)
     return sessions.get(key)
}

async function update(key) {
     return sessions
       .set(key, {
         authUser: await authClient.getUser(key),
       });
   }

   
   module.exports.get = get;
   module.exports.update = update;