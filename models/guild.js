const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    guildPrefix: {
        defult: "!",
        type: String
    },
    modRole: {
        defult: "Moderator",
        type: String
    },
    memberRole: {
        defult: "Member",
        type: String
    },
    mutedRole: {
        defult: "Muted",
        type: String
    },
});

module.ecports = mongoose.model('Guild', guildSchema, 'guilds');