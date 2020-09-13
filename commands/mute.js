const ms = require("ms");
const { execute } = require("./ban");

module.exports = {
    name:"mute",
    description:"Mutes the user for a specific amount of time",
    execute(message, args, config) {
        let person = message.guild.member(message.mentions.users.first())
        if(!person) return message.reply("I couldn't find that user.");

        let time = args [2];

        if(!time) {
            return message.reply("Please specify an ammount of time to mute the user.")
        }

        const memberRole = message.guild.roles.cache.find(role => role.name === config.memberRole);
        const mutedRole = message.guild.roles.cache.find(role => role.name === config.mutedRole);

        person.roles.add(mutedRole);
        person.roles.remove(memberRole);

        message.channel.send(`@${person.user.tag} has been muted for ${ms(ms(time))} by ${message.author}.`);
        
        setTimeout(function(){
            person.roles.add(memberRole);
            person.roles.remove(mutedRole);
            message.channel.send(`@${person.user.tag} has now been unmuted.`);
        }, ms(time) );

    },
};