module.exports = {
	name: 'setup',
	description: 'Runs a sequnce of commands to setup thye bot',
	execute(message, args, config, Discord, mongoose, GuildModel) {
        // Creates entry in data base
        if (!message.guild) return;
        const doc = new GuildModel({ "id": message.guild.id, "name": message.guild.name });
        doc.save(function (err) {});
	},
};