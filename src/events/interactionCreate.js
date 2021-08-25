const client = require(`../index`)
const owners = [
    '462936117596127232'
]
const guildData = require(`../../data/schemas/guildData`)
const users = require(`../../data/schemas/users`)
let permNums = {
    BAN_MEMBERS: 2,
    KICK_MEMBERS: 2,
    MANAGE_MESSAGES: 1,
    ADMINSTRATOR: 4
}
client.on("interactionCreate", async (interaction) => {
    

     if (interaction.isCommand()) {
         
 
         const cmd = client.slashCommands.get(interaction.commandName);
         if (!cmd) return;
 
         const args = [];
        
         for (let option of interaction.options.data) {
             if (option.type === "SUB_COMMAND") {
                 if (option.name) args.push(option.name);
                 option.options?.forEach((x) => {
                     if (x.value) args.push(x.value);
                 });
             } else if (option.value) args.push(option.value);
         }
         interaction.member = interaction.guild.members.cache.get(interaction.user.id);
         if (cmd.owner) {
             if (!owners.includes(interaction.user.id)) {
                 return interaction.reply({content: `This command is developer / owner only!`}).catch(() => {})
             }
         }
         if(!interaction.member.permissions.has(cmd.permissions || [])) return interaction.reply({content: `You do not have the permissions to use this command!`})
         const userData = await users.findOne({ userId: interaction.user.id })
         if (!userData) { await users.create({ userId: interaction.user.id }) }
         const guildConfiguration = await guildData.findOne({ guildId: interaction.guild.id })
         interaction.guildData = guildConfiguration
         interaction.userData = userData
         cmd.run(client, interaction, args);
     }
 
     if (interaction.isContextMenu()) {
         await interaction.deferReply({ ephemeral: false });
         const command = client.slashCommands.get(interaction.commandName);
         if (command) command.run(client, interaction);
    }
    




    
 });