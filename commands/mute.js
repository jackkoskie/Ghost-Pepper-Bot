const ms = require("ms");
const { execute } = require("./ban");

module.exports = {
    name: "mute",
    description: "Mutes the user for a specific amount of time",
    execute(message, args, config, Discord, GuildModel, mongoose) {
        var req = GuildModel.findOne({ _id: message.guild.id }, function (err, req) {
            if (message.member.roles.cache.some(role => role.name === req.modRole)) {
                let person = message.guild.member(message.mentions.users.first())
                if (!person) return message.reply("I couldn't find that user.");

                let muteTime = args[2];

                let muteReason = args[3];

                if (!muteTime) {
                    return message.reply("Please specify an ammount of time to mute the user.")
                }

                const memberRole = message.guild.roles.cache.find(role => role.name === req.memberRole);
                const mutedRole = message.guild.roles.cache.find(role => role.name === req.mutedRole);

                person.roles.add(mutedRole);
                person.roles.remove(memberRole);

                // Makes/Sends Embed
                const muteEmbed = new Discord.MessageEmbed()
                    .setColor('#ED1C24')
                    .setTitle('~mute~')
                    .setAuthor('Ghost Pepper Bot', 'https://cdn.discordapp.com/avatars/753727823264481379/22d88b924f2dab2a2e5d90ad78a1eb7a.webp?size=128', 'https://github.com/goldenxlence/ghost-pepper-bot')
                    .addField('User Muted:', `<@${person.id}>`)
                    .addField('Muted By:', `<@${message.author.id}>`)
                    .addField('Muted in:', `${message.channel.id}`)
                    .addFIeld('Muted for:', `${muteTime}`)
                    .addField('Reason:', `${muteReason}`)
                    .setTimestamp()
                    .setFooter('Ghost Pepper Discord Bot');

                message.channel.send(muteEmbed);

                message.delete();

                setTimeout(function () {
                    person.roles.add(memberRole);
                    person.roles.remove(mutedRole);
                }, ms(muteTime));
            }
        })
    },
};