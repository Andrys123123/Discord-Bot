const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const Embed = new Discord.MessageEmbed()
        .setTitle("Helper Embed")
        .setColor(0xFF0000)
        .setDescription("Make sure to use _help to get acces to the commands");

    message.author.send(Embed);
     
};

exports.help = {
    name: "help",
    description: "Sends help embed is DM",
    usage: "_help",
    example: "_help"
};

exports.conf = {
    aliases: ["commands"],
    cooldown: 5
}