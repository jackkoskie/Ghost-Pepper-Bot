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
        defult: `You have been banned from ${message.guild.name} by ${message.author} for the following reason ${banReason}`,
        type: String
    },
    kickMessage: {
        defult: `You have been kicked from ${message.guild.name} by ${message.author} for the following reason ${kickReason}`,
        type: String
    },
    muteMessage: {
        defult: `You have been muted from ${message.guild.name} by ${message.author} for ${muteTime} for the following reason: ${muteReason}`,
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