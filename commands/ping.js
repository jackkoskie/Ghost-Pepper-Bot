module.exports = {
	name: 'ping2',
	description: 'Ping!',
	execute(message, args) {
		// Replies Pong!
        message.reply('Pong!');
	},
};