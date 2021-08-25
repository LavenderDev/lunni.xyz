const client = require(`../index`)
const owners = ["462936117596127232"]
client.on("messageCreate", async (message) => {
     const prefix = "h@"
     if (message.author.bot) return;
     // Suggestions

     if (message.author.bot || !message.content.startsWith(prefix)) return;
     const [cmd, ...args] = message.content
     .slice(prefix.length)
     .trim()
     .split(" ");

     const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));
     if (command.owner) {
          if (owners.includes(message.author.id)) {
               
          } else {
               return message.reply({content: `You can not run this command!`})
          }
     }
     if (!command) return;
     await command.run(client, message, args);   
})