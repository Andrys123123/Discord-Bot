const Discord = require('discord.js');


exports.run = async(client, message, args) => {
    if(message.deletable) message.delete();

    if(args.length < 1)
        return message.reply("Nothing to say?").then(m => m.delete(5000));

    const roleColor = message.author.displayHexColor === "#000000" ? "#ffffff" : message.author.displayHexColor;
    var args = Array.prototype.slice.call(args);

    if(args[0]  === 'embed') {
        var name = message.author.tag;
        const embed = new Discord.MessageEmbed()
            .setColor(roleColor)
            .setDescription(args.slice(1).join(" "))
            .setTimestamp()
            .setImage(client.user.displayAvatarURL)
            .setAuthor(message.author.name, message.author.displayAvatarURL)
            .setFooter(client.user.username, client.user.displayAvatarURL);

        message.channel.send(embed);
    } else {
            message.channel.send(args.join(" "));
    }
};

exports.help = {
    name: "say",
    description: "Highlight message",
    usage: "_say",
    example: "_say embed I want to join 4 a game"
};

exports.conf = {
    aliases: ["kiemel", "highlight"],
    cooldown: 5
}