module.exports = {
	name: 'prefix',
	description: 'Returns the prefix of the server, Allows mods to set the prefix',
	execute(message, args, config, Discord) {
        message.reply(`The current prefix is ${config.prefix}`)
    }
}