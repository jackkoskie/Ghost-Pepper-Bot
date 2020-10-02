module.exports = {
	name: 'prefix',
	description: 'Returns the prefix of the bot',
	execute(message, args, config, Discord) {
        message.reply(`The current prefix is ${config.prefix}`)
    }
}