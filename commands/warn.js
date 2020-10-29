module.exports = {
    name: 'warn',
    description: 'Sends a warning to the user',
    execute(message, args, config, Discord, GuildModel, mongoose) {
        var req = GuildModel.findOne({ _id: message.guild.id }, function (err, req) {
            if (message.member.roles.cache.some(role => role.name === req.modRole) || message.member.hasPermission('ADMINISTRATOR')) {
                var user = message.mentions.first();

                if (!user) {
                    return message.reply('please specify a valid user to warn!')
                } else { }
            } else {
                message.reply('sorry, you do not have permission to run that command!')
            }
        });
    },
};