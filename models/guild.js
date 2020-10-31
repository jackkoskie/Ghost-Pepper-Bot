const { Message } = require('discord.js');
const mongoose = require('mongoose');
const { isBoolean } = require('util');

const guildSchema = mongoose.Schema({
    _id: String,
    guildName: String,

    modLog: {
        type: String
    },

    modRole: {
        type: String,
    },
    memberRole: {
        type: String
    },
    mutedRole: {
        type: String
    },

    autoMod: {
        type: Boolean
    },
    bannedWords: {
        type: Boolean
    },

    warns: {
        type: Array,
    },
    bans: {
        type: Array,
    },
    kicks: {
        type: Array,
    },
    mutes: {
        type: Array,
    },
});

module.exports = mongoose.model('Guild', guildSchema, 'guilds');