const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const Embed = new Discord.MessageEmbed()
        .setColor(0xFFC300)
        .setTitle("Initiate Poll")
        .setDescription("_poll <poll> to initiate a simple yes or no poll");

    if(!args[0]) {
        message.channel.send(Embed);
    } else {

        let msgArgs = args.slice(0).join(" ");

        message.channel.send("**"+msgArgs+"**").then(messageReaction => {
            messageReaction.react("👍");
            messageReaction.react("👎");
        }) ;
    }
};

exports.help = {
    name: "poll",
    description: "Starts a poll.",
    usage: "_poll",
    example: "_poll will i kill myself?"
};

exports.conf = {
    aliases: ["szavazas"],
    cooldown: 5
}