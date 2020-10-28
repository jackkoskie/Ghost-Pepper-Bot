module.exports = {
    name: 'kick',
    description: 'basic kick command',
    execute(message, args, config, Discord, GuildModel, mongoose) {
        var req = GuildModel.findOne({ _id: message.server.id }, function (err, req) {
            if (message.member.roles.cache.some(role => role.name === req.modRole)) {
                // Looks for the mentioned user
                const user = message.mentions.users.first();

                if (user) {

                    // Deletes the original message
                    message.delete({ timeout: 500 }).catch(console.error);

                    // Checks if the user mentioned is in the server
                    const member = message.guild.member(user);
                    if (member) {

                        // Gets the kick reason
                        const kickReason = args.slice(2).join(' ');

                        // Kicks the user
                        member.kick(kickReason).then(() => {

                            // Makes Embed
                            const kickEmbed = new Discord.MessageEmbed()
                                .setColor('#ED1C24')
                                .setTitle('~kick~')
                                .setAuthor('Ghost Pepper Bot', 'https://cdn.discordapp.com/avatars/753727823264481379/22d88b924f2dab2a2e5d90ad78a1eb7a.webp?size=128', 'https://github.com/goldenxlence/ghost-pepper-bot')
                                .addField('User Kicked:', `<@${member.id}>`)
                                .addField('Kicked By:', `<@${message.author.id}>`)
                                .addField('Kicked in:', `${message.channel}`)
                                .addField('Reason', `${kickReason}`)
                                .setTimestamp()
                                .setFooter('Ghost Pepper Discord Bot');

                            message.channel.send(kickEmbed);

                            message.delete();

                            member.id.send(banMessage);

                            console.log(`Sucsessfuly kicked ${user.tag} in ${message.guild}`)
                        }).catch(err => {
                            // Catches any errors
                            message.reply(`I encountered an error when trying to kick ${user.tag}`);
                            console.log(`Error kicking ${user.tag} in ${message.guild}`);
                            console.error(err);
                        })
                    } else {
                        message.reply(`That user isn\'t in the server.`)

                    }
                } else {
                    message.reply(`you need to specify a valid user to kick!`)
                }
            } else {
                message.reply('you do not have permission to use this command!')
                console.log(`${message.author} tried to use the ban command in ${message.guild} but did not have sufficient permissions`)
            }
        })
    },
};