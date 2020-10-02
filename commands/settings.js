const { Message } = require("discord.js");
const { description } = require("./prefix");

module.exports = {
    name: "settings",
    description: "Allows admins to change settings",
    execute(messgae, args, config, Discord, mongoose, GuildModel) {

        // makes and sends the main settings embed
        var req = GuildModel.findOne({ id: message.guild.id }, function(err, req) {
            const settingsEmbed = new Discord.MessageEmbed()
            .setColor('#ED1C24')
            .setTitle('~settings~')
            .setAuthor('Ghost Pepper Bot', 'https://cdn.discordapp.com/avatars/753727823264481379/22d88b924f2dab2a2e5d90ad78a1eb7a.webp?size=128', 'https://github.com/goldenxlence/ghost-pepper-bot')
            .addFields(
                { name: "Server Name:", value: `${req.name}`, inline: true },
                { name: "", value: "", inline: true },
            )
            .setTimestamp()
            .setFooter('Ghost Pepper Discord Bot');

            message.author.send(settingsEmbed)
            message.reply('check your DMs!')
        });
    }
}