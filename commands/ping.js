module.exports = {
	name: 'ping2',
	description: 'Ping!',
	execute(message, args) {
        message.reply('Pong!');
	},
};