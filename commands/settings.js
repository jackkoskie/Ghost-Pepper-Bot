module.exports = {
    name: "settings",
    description: "Allows admins to change settings",
    execute(message, args, config, Discord, mongoose, GuildModel) {
        var req = GuildModel.findOne({ id: message.server.id }, function (err, req) {
            if (!message.member.roles.cache.some(role => role.name === req.modRole)) {
                message.reply(`Sorry, you do not have permission to use this command!`)
            } else {
                if (req.autoMod === true) {
                    var autoModStatus = ":white_check_mark:"
                } else {
                    var autoModStatus = ":x:"
                };

                if (!args[2]) {
                    const settingsEmbed = new Discord.MessageEmbed()
                        .setColor('#ED1C24')
                        .setTitle('~settings~')
                        .setAuthor('Ghost Pepper Bot', 'https://cdn.discordapp.com/avatars/753727823264481379/22d88b924f2dab2a2e5d90ad78a1eb7a.webp?size=128', 'https://github.com/goldenxlence/ghost-pepper-bot')
                        .addFields(
                            { name: "Server Name:", value: `${req.name}`, inline: true },
                            { name: "AutoMod:", value: `${autoModStatus}`, inline: true },
                            { name: "Prefix:", value: "-", inline: true },
                            { name: "Commands", value: `To change a setting, type \`-settings {option}\``, inline: false }
                        )
                        .setTimestamp()
                        .setFooter('Ghost Pepper Discord Bot');

                    message.author.send(settingsEmbed)
                    message.reply('check your DMs!')
                } else {
                    switch (args[2]) {
                        case "automod":
                            if (!args[3]) {
                                message.author.send(`The cur`)
                            }
                            break;
                    }
                }
            }
        })
    }
}