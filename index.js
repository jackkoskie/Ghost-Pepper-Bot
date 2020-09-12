const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const fs = require('fs');
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.on('ready', () => {
    console.log("Ready!");
});
 
client.on('message', message => {
    let args = message.content.substring(config.prefix.length).split(" ");
 
    switch (args[0]) {
 
        case "ping":
            client.commands.get('ping').execute(message, args);
        break;
    }
 
});
 
client.login(config.token);