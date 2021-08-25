const { glob } = require("glob");
const { promisify } = require("util");

const globPromise = promisify(glob);

module.exports = async (client) => {
    
     const commandFiles = await globPromise(`${process.cwd()}/src/commands/**/*.js`)
     commandFiles.map((value) => {
          const file = require(value);
          const splitted = value.split("/");
          const directory = splitted[splitted.length - 2];
  
          if (file.name) {
              const properties = { directory, ...file };
              client.commands.set(file.name, properties);
          }
     });
     
     
     const eventFiles = await globPromise(`${process.cwd()}/src/events/*.js`);
     eventFiles.map((value) => require(value));


     
     const slashCommands = await globPromise(`${process.cwd()}/src/slashCommands/*/*.js`);
  
      const arrayOfSlashCommands = [];
      slashCommands.map((value) => {
          const file = require(value);
          if (!file?.name) return;
          client.slashCommands.set(file.name, file);
  
          if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
          arrayOfSlashCommands.push(file);
      });
     
    client.on("ready", async () => {
          
        await client.guilds.cache
              .get("878544541391654942")
              .commands.set(arrayOfSlashCommands);
        
          /* await client.guilds.cache
              .get("878544541391654942")
              .commands.set(arrayOfSlashCommands);
              */
          // await client.application.commands.set(arrayOfSlashCommands);
      });
}