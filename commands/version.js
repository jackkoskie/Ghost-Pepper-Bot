module.exports = {
	name: 'version',
	description: 'Displays the current version of the bot.',
	execute(message, args, config) {
        message.channel.send('Version: ' + config.version)
	},
};