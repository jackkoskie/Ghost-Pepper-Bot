module.exports = {
    name: "settings",
    description: "Allows admins to change settings",
    execute(message, args, config, Discord, mongoose, GuildModel) {
        var req = GuildModel.findOne({ "_id": message.guild.id }, function (err, req) {
            if (!message.member.hasPermission('ADMINISTRATOR')) {
                message.reply(`Sorry, you do not have permission to use this command!`)
                return;
            } else {
                if (req.autoMod === true) {
                    var autoModStatus = ":white_check_mark:"
                } else {
                    var autoModStatus = ":x:"
                };

                if (req.bannedWords === true) {
                    var wordFilterStatus = ":white_check_mark:"
                } else {
                    var wordFilterStatus = ":x:"
                }

                if (!args[2]) {
                    const settingsEmbed = new Discord.MessageEmbed()
                        .setColor('#ED1C24')
                        .setTitle('~settings~')
                        .setAuthor('Ghost Pepper Bot', 'https://cdn.discordapp.com/avatars/753727823264481379/22d88b924f2dab2a2e5d90ad78a1eb7a.webp?size=128', 'https://github.com/goldenxlence/ghost-pepper-bot')
                        .addFields(
                            { name: "Server Name:", value: `${req.name}`, inline: true },
                            { name: "AutoMod:", value: `${autoModStatus}`, inline: true },
                            { name: "MemberRole:", value: `${req.memberRole}`, inline: true },
                            { name: "ModeratorRole:", value: `${req.modRole}`, inline: true },
                            { name: "MutedRole", value: `${req.mutedRole}`, inline: true },
                            { name: "Prefix:", value: "-", inline: true },
                            { name: "Commands", value: `To change a setting, type \`-settings {option}\``, inline: false }
                        )
                        .setTimestamp()
                        .setFooter('Ghost Pepper Discord Bot');

                    message.channel.send(settingsEmbed)
                } else {
                    switch (args[2]) {
                        case "automod":
                            if (!args[3]) {
                                const settingsEmbed = new Discord.MessageEmbed()
                                    .setColor('#ED1C24')
                                    .setTitle('~automod~')
                                    .setAuthor('Ghost Pepper Bot', 'https://cdn.discordapp.com/avatars/753727823264481379/22d88b924f2dab2a2e5d90ad78a1eb7a.webp?size=128', 'https://github.com/goldenxlence/ghost-pepper-bot')
                                    .addFields(
                                        { name: "Global AutoMod Status:", value: `${autoModStatus}`, inline: true },
                                        { name: "WordFilter:", value: `${wordFilterStatus}`, inline: true },
                                        { name: "Commands", value: `To change a setting, type \`-settings automod {option} [on,off,add,remove,reset]\``, inline: false }
                                    )
                                    .setTimestamp()
                                    .setFooter('Ghost Pepper Discord Bot');

                                message.channel.send(automodEmbed)
                            } else {
                                switch (args[3]) {
                                    case "wordfilter":
                                        if (!args[4]) {
                                            message.channel.send(`Word filter is set to ${wordFilterStatus}`)
                                        } else {
                                            if (args[4] === "on") {
                                                try {
                                                    GuildModel.updateOne({ "_id": message.guild.id }, { $set: { "bannedWords": true }, $currentDate: { lastModified: true } });
                                                } catch (err) {
                                                    console.err(`Encountered an error when trying to update bannedWords in ${message.guild.id}. \nThe following error was received:\n${err}`)
                                                }
                                            }

                                            if (args[4] === "off") {
                                                try {
                                                    GuildModel.updateOne({ "_id": message.guild.id }, { $set: { "bannedWords": false }, $currentDate: { lastModified: true } });
                                                } catch (err) {
                                                    console.err(`Encountered an error when trying to update bannedWords in ${message.guild.id}. \nThe following error was received:\n${err}`)
                                                }
                                            }
                                        }
                                        break;
                                }
                            }
                            break;
                        case "prefix":
                            message.reply('sorry, changing of the prefix is not yet supported.')
                            break;
                        case "moderatorrole":
                        case "modrole":
                            if (!args[3]) {
                                if (!req.modRole) {
                                    message.reply(`There is no moderator role set. Please run the command \`-settings moderatorRole <EXACT NAME OF ROLE>\` to set one.`);
                                } else {
                                    message.reply(`The current moderatorRole is ${req.modRole}.`);
                                }
                            } else {
                                try {
                                    GuildModel.updateOne({ "_id": message.guild.id }, { $set: { "modRole": args[3] }, $currentDate: { lastModified: true } });
                                    message.reply(`updated the moderatorRole to ${args[3]}`)
                                } catch {
                                    console.error(`There was an error trying to update the modRole in ${message.guild.id}. The following error was given:\n${err}`);
                                    message.reply(`sorry, there was an error trying to update the modRole. Please try again in a few minutes.`);
                                }
                            }
                            break;
                        case "memberrole":
                        case "memrole":
                            if (!args[3]) {
                                if (!req.memberRole) {
                                    message.reply(`There is no member role set. Please run the command \`-settings memberRole <EXACT NAME OF ROLE>\` to set one.`);
                                } else {
                                    message.reply(`The current memberRole is ${req.memberRole}.`);
                                }
                            } else {
                                try {
                                    GuildModel.updateOne({ "_id": message.guild.id }, { $set: { "memberRole": args[3] }, $currentDate: { lastModified: true } });
                                    message.reply(`updated the memberRole to ${args[3]}`)
                                } catch {
                                    console.error(`There was an error trying to update the memberRole in ${message.guild.id}. The following error was given:\n${err}`);
                                    message.reply(`sorry, there was an error trying to update the memberRole. Please try again in a few minutes. If the problem persists, please contact the developers on the support server.`);
                                }
                            }
                            break;
                        case "mutedrole":
                        case "muterole":
                            if (!args[3]) {
                                if (!req.mutedRole) {
                                    message.reply(`There is no muted role set. Please run the command \`-settings mutedRole <EXACT NAME OF ROLE>\` to set one.`);
                                } else {
                                    message.reply(`The current mutedRole is ${req.mutedRole}.`);
                                }
                            } else {
                                try {
                                    GuildModel.updateOne({ "_id": message.guild.id }, { $set: { "mutedRole": args[3] }, $currentDate: { lastModified: true } });
                                    message.reply(`updated the mutedRole to ${args[3]}`)
                                } catch {
                                    console.error(`There was an error trying to update the mutedRole in ${message.guild.id}. The following error was given:\n${err}`);
                                    message.reply(`sorry, there was an error trying to update the mutedRole. Please try again in a few minutes. If the problem persists, please contact the developers on the support server.`);
                                }
                            }
                            break;
                    }
                }
            }
        });
    }
}