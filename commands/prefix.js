module.exports = {
	name: 'prefix',
	description: 'Returns the prefix of the server, Allows mods to set the prefix',
	execute(message, args, config, Discord, mongoose, GuildModel) {
        if (!args[2]) {
            var req = GuildModel.findOne({ "id": message.guild.id }, function (err, req) {
                if (!req) {
                    message.reply('Sorry this server has not yet been setup. Ask someone with Admin Privilages to run the command !setup.');
                } else {
                    message.reply(`${message.guild.name} Prefix: \`${req.prefix}\``);
                };
            })
        } else {
            var req = GuildModel.findOne({ "id": message.guild.id }, function (err, req) {
                if (message.member.roles.cache.some(role => role.name === req.mod)) {
                    var req = GuildModel.findOneAndUpdate(
                        { "id": message.guild.id}, 
                        { $set: { prefix: `${args[2]}`} }, function (err, req) {
                            message.reply(`Set the servers prefix to ${req.prefix}`)
                        }
                    );
                } else {
                    message.reply(`Sorry, you do not have permission to set the prefix of the server.`)
                    message.channel.send(`Hint: Try \`${GuildModel.prefix}prefix\` to view the current prefix.`)
                }
            })
        }
	},
};