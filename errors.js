const { Message } = require("discord.js");

module.exports = {

    permission: function (permission) {
        return `Sorry, you do not have permission to run that command. You need to have ${permission} permissions!`
    },

    general: function () {
        return `Sorry, I encountered an error. Please try again later.`
    },

    wordFilter: function () {
        return `You cant say that here!`
    }

};