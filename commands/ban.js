module.exports = {
	name: 'ban',
	description: 'basic ban command',
	execute(message, args) {
        
        // Looks for the mentioned user
        const user = message.mentions.users.first();

        if(user){
            // Checks if the user mentioned is in the server
            const member = message.guild.member(user);
            if(member){
                // Bans the user
                member.ban(`You have been banned from ${message.guild} by ${message.author}.`).then(() =>{
                    message.reply(`sucessfuly banned ${user.tag}.`);
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
	},
};