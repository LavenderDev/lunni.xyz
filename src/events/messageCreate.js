const client = require(`../index`)
const cooldown = require(`../../data/schemas/cooldowns`)
const users = require(`../../data/schemas/users`)
const owners = [
    '462936117596127232'
]
client.on("messageCreate", async (message) => {
    const prefix = "?"
    if (message.author.bot) return;
    const userData = await users.findOne({ userId: message.author.id })
    if(!userData) { await users.create({ userId: message.author.id }) }
     if (message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(prefix))return;
      const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/);
      const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));
    if (command) {
        if (command.owner) {
            if (owners.includes(message.author.id)) {
                 
            } else {
                message.reply({content: `This command is developer / owner only!`})
             }
         }

          async function commandExecute(){
               await command.run(client, message, args);
           }

        if (cmd.cooldown) {
            if (!owners.includes(message.author.id)) {
                const TimeNow = Date.now();
                const CommandCooldown = (cmd.cooldown) * 1000
                const coolDownData = await cooldown.findOne({ userId: message.author.id, cmd: cmd.name })
                if (coolDownData) {
                    const ExpirationDate = coolDownData.time + CommandCooldown
                    if (TimeNow < ExpirationDate) {
                        const TimeLeft = (ExpirationDate - TimeNow) / 1000
                        if (TimeLeft.toFixed(1) >= 86400) {
                            const day = (TimeLeft.toFixed(1) / 86400) 
                            return message.reply({ content: `Please slow down! (**${parseInt(Day)}** hours left)` })
                            
                        }
                        if (TimeLeft.toFixed(1) >= 3600) {
                            const Hour = (TimeLeft.toFixed(1) / 3600)
                            return message.reply({ content: `Please slow down! (**${parseInt(Hour)}** hours left)` })
                        }
                        if (TimeLeft.toFixed(1) >= 60) {
                            const Minutes = (TimeLeft.toFixed(1) / 60)
                            return message.reply({ content: `Please slow down! (**${parseInt(Minutes)}** minutes left)` })
                        }
                        const Seconds = (TimeLeft.toFixed(1))
                        return message.reply({ content: `Please slow down! (**${parseInt(Seconds)}** seconds left)` })
                       
                    } else {
                        await cooldown.findOneAndUpdate({ userId: message.author.id, cmd: cmd.name }, { time: TimeNow })
                        commandExecute()
                    }
                } else {
                    commandExecute()
                    new cooldown({
                        userId: message.author.id,
                        cmd: cmd.name,
                        time: TimeNow,
                        cooldown: cmd.cooldown
                    }).save()
                }
            } else {
                commandExecute()
            };
        }
          
     } 
})