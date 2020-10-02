const { Message } = require("discord.js");
const { description } = require("./prefix");

module.exports = {
    name: "settings",
    description: "Allows admins to change settings",
    execute(messgae, args, config, Discord, mongoose, GuildModel) {
        message.reply('check your DMs!')

        // makes and sends the main settings embed
        message.author.send(settingsEmbed)
    }
}