// All the requires
const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./token.json');
const ms = require('ms');

// JSON Files
const config = require('./config.json');
const autoMod = require('./autoMod.json');

const fs = require('fs');
client.commands = new Discord.Collection();

// Tells bot where to find the commands files
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

// Tells the console when the bot has logged on
client.on('ready', () => {
    console.log("The bot is ONLINE");
});

// Listens for a message and checks if its a command
client.on('message', message => {
    let args = message.content.toLowerCase().substring(config.prefix.length).split(" ");
    
    if (autoMod.autoMod = 1) {

        // Banned Words
        if (autoMod.bannedWords = 1) {
            for (var i = 0; i < autoMod.bannedWordsList.length; i++) {
                if (message.content.toLowerCase().includes(config.bannedWordsList[i])) {
                  message.delete();
                  message.reply('you cant say that here!')
                  break;
                }
            }
        }
    }
    

    // Launches the appropriate command file
    switch (args[0]) {
 
        case "ping":
            client.commands.get('ping').execute(message, args, config);
        break;

        case "version":
        case "ver":
            client.commands.get('version').execute(message, args, config);
        break;

        case "kick":
        case "k":
            client.commands.get('kick').execute(message, args, config, Discord);
        break;

        case "ban":
        case "b":
            client.commands.get('ban').execute(message, args, config, Discord);
        break;

        case "mute":
            client.commands.get('mute').execute(message, args, config);
        break;
    }
 
});

// Logs the bot in
client.login(token.token);