module.exports = {
	name: 'kick',
	description: 'basic kick command',
	execute(message, args) {

        const user = message.mentions.users.first();

        if(user){
            const member = message.guild.member(user);
            if(member){
                member.kick(`You have been kicked from ${message.guild} by ${message.author}.`).then(() =>{
                    message.reply(`sucessfuly kicked ${user.tag}.`);
                    console.log(`Sucsessfuly kicked ${user.tag} in ${message.guild}`)
                }).catch(err =>{
                    message.reply(`I encountered an error when trying to kick ${user.tag}`);
                    console.log(`Error kicking ${user.tag} in ${message.guild}`);
                })
            } else {
                message.reply(`That user isn\'t in the server.`)

            }
        } else {
            message.reply(`you need to specify a valid user to kick!`)
        }
	},
};