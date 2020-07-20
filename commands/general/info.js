const Discord = require('discord.js');
version = "Beta";

exports.run = async(client, message, args) => {
    if(args[0] === 'version'){
        message.channel.send('Version: ' + version)
    } else {
        message.channel.send('Invalid Args');
    }
};

exports.help = {
    name: "info",
    description: "Displays the bot infos",
    usage: "_info",
    example: "_info version"
};

exports.conf = {
    aliases: ["botinfo"],
    cooldown: 5
}