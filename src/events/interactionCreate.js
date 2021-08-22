const client = require(`../index`)
const owners = [
    '462936117596127232'
]
const users = require(`../../data/schemas/users`)
client.on("interactionCreate", async (interaction) => {
     
     if (interaction.isCommand()) {
         await interaction.deferReply({ ephemeral: false }).catch(() => {});
 
         const cmd = client.slashCommands.get(interaction.commandName);
         if (!cmd)
             return interaction.followUp({ content: "An error has occured " });
 
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
                 interaction.followUp({content: `This command is developer / owner only!`})
             }
         }
         const userData = await users.findOne({ userId: interaction.user.id })
        if(!userData) { await users.create({ userId: interaction.user.id }) }
         cmd.run(client, interaction, args);
     }
 
     if (interaction.isContextMenu()) {
         await interaction.deferReply({ ephemeral: false });
         const command = client.slashCommands.get(interaction.commandName);
         if (command) command.run(client, interaction);
    }
    




    
 });