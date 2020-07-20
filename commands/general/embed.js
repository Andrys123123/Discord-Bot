const Discord = require('discord.js');
version = "Beta";

exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('User Information')
        .addField('Player Name', message.author.username, true)
        .addField('Version', version, true)
        .addField('Current Server', message.guild.name, true)
        .setColor(0x00F7FF)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter('Welcome in «۞Herbálozós۞»')
    message.channel.send(embed);
};

exports.help = {
    name: "embed",
    description: "Displays User Info",
    usage: "_embed",
    example: "_embed",
};

exports.conf = {
    aliases: ["userinfo"],
    cooldown: 5
}