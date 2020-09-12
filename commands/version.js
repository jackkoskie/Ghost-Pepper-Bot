module.exports = {
	name: 'version',
	description: 'Displays the current version of the bot.',
	execute(message, args, config) {
		// Sends a message with the current version
        message.channel.send('Version: ' + config.version)
	},
};