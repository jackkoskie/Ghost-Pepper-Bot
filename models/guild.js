const mongoose = require('mongoose');
const { isBoolean } = require('util');

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,

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

    banMessage: {
        type: String
    },
    kickMessage: {
        type: String
    },
    muteMessage: {
        type: String
    },

    autoMod: {
        defult: false,
        type: Boolean
    },
    bannedWords: {
        defult: false,
        type: Boolean
    },
    bannedWordsList: {
        defult: [],
        type: Array
    }
});

module.ecports = mongoose.model('Guild', guildSchema, 'guilds');