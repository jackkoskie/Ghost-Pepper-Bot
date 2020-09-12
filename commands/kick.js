module.exports = {
	name: 'kick',
	description: 'basic kick command',
	execute(message, args, config) {
        if (message.member.roles.cache.some(role => role.name === config.modRole)) {
            // Looks for the mentioned user
            const user = message.mentions.users.first();

            if(user){
                // Checks if the user mentioned is in the server
                const member = message.guild.member(user);
                if(member){
                    // Kicks the user
                    member.kick(config.kickMessage).then(() =>{
                        message.reply(`sucessfuly kicked ${user.tag}.`);
                        console.log(`Sucsessfuly kicked ${user.tag} in ${message.guild}`)
                    }).catch(err =>{
                        // Catches any errors
                        message.reply(`I encountered an error when trying to kick ${user.tag}`);
                        console.log(`Error kicking ${user.tag} in ${message.guild}`);
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
	},
};