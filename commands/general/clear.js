const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    if(!args[0]) 
        return message.reply('Error, please define second arg')
        message.channel.bulkDelete(args[0]);
};

exports.help = {
    name: "clear",
    description: "Deletes a sort amount of messages",
    usage: "_clear",
    example: "_clear 10"
};

exports.conf = {
    aliases: ["torol"],
    cooldown: 5
}