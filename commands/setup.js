module.exports = {
        name: 'setup',
        description: 'Runs a sequnce of commands to setup thye bot',
        execute(message, args, config, Discord, mongoose, GuildModel) {
                if (!args[2]) {
                        // Creates entry in data base
                        if (!message.guild) return;
                        var req = GuildModel.findOne({ "_id": message.guild.id }, function (err, req) {
                                if (!req) {
                                        try {
                                                var doc = new GuildModel({ "_id": message.guild.id, "guildName": message.guild.name, "modRole": "Moderator", "memberRole": "Member", "mutedRole": "Muted", "banMessage": "", "kickMessage": "", "muteMessage": "", "autoMod": false, "bannedWords": false });
                                                doc.save();
                                                console.log(`Added ${message.guild.name} to database with _id: ${message.guild.id}`)
                                                message.reply(`your server has been added to our database but only with the basic information. Please use ${config.prefix}settings to change the settings for your server.`)
                                        } catch (err) {
                                                console.error(`There was an error when trying to add ${message.guild.name} to the database with _id: ${message.guild.id} \n The following error was output by the system: \n ${err}`)
                                        }
                                } else {
                                        message.reply(`sorry, this server is already setup. To reset the servers settings please run \`${config.prefix}setup confirm\``);
                                }
                        });
                } else {
                        if (args[1] === "confirm") {
                                var req = GuildModel.findOne({ "_id": message.guild.id }, function (err, req) {
                                        if (!req) return;
                                        try {
                                                GuildModel.deleteOne({ "_id": message.guild.id });
                                                var doc = new GuildModel({ "_id": message.guild.id, "guildName": message.guild.name, "modRole": "Moderator", "memberRole": "Member", "mutedRole": "Muted", "banMessage": "", "kickMessage": "", "muteMessage": "", "autoMod": false, "bannedWords": false });
                                                doc.save();
                                                console.log(`Added ${message.guild.name} to database with _id: ${message.guild.id}`)
                                                message.reply(`your server has been reset in our database and now only has the basic information. Please use ${config.prefix}settings to change the settings for your server.`)
                                        } catch (err) {
                                                message.reply(`Sorry there was an error.`)
                                                console.error(`Error trying to reset data for ${message.guild.id}. The following error was received:\n${err}`)
                                        };
                                })
                        }
                }
        },
};