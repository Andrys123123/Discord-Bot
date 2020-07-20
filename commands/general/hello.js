const Discord = require('discord.js');

exports.run = async(client, message, args) => {
     message.channel.send('Hello My Friend!');
};

exports.help = {
    name: "hello",
    description: "Says 'hello my friend'",
    usage: "_hello",
    example: "_hello"
};

exports.conf = {
    aliases: ["udv"],
    cooldown: 5
}