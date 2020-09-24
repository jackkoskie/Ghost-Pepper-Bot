module.exports = {
	name: 'ban',
	description: 'basic ban command',
	execute(message, args, config, Discord) {
        if (message.member.roles.cache.some(role => role.name === config.modRole)) {
            // Looks for the mentioned user
            const user = message.mentions.users.first();

            if(user){
                // Checks if the user mentioned is in the server
                const member = message.guild.member(user);
                if(member){

                    // Gets the ban reason
                    const banReason = args.slice(2).join(' ');

                    // Bans the user
                    member.ban({reason: banReason}).then(() =>{
                        
                        // Makes/Sends Embed
                        const banEmbed = new Discord.MessageEmbed()
                            .setColor('#ED1C24')
                            .setTitle('~kick~')
                            .setAuthor('Ghost Pepper Bot', 'https://cdn.discordapp.com/avatars/753727823264481379/22d88b924f2dab2a2e5d90ad78a1eb7a.webp?size=128', 'https://github.com/goldenxlence/ghost-pepper-bot')
                            .addField('User Banned:', `<@${member.id}>`)
                            .addField('Banned By:', `<@${message.author.id}>`)
                            .addField('Banned in:', `${message.channel}`)
                            .addField('Reason', `${banReason}`)
                            .setTimestamp()
                            .setFooter('Ghost Pepper Discord Bot');

                        message.channel.send(banEmbed);

                        console.log(`Sucsessfuly banned ${user.tag} in ${message.guild}`)
                    }).catch(err =>{
                        // Catches any errors
                        message.reply(`I encountered an error when trying to ban ${user.tag}`);
                        console.log(`Error banning ${user.tag} in ${message.guild}`);
                    })
                } else {
                    message.reply(`That user isn\'t in the server.`)

                }
            } else {
                message.reply(`you need to specify a valid user to ban!`)
            }
        } else {
            message.reply('you do not have permission to use this command!')
            console.log(`${message.author} tried to use the ban command in ${message.guild} but did not have sufficient permissions`)
        }
	},
};