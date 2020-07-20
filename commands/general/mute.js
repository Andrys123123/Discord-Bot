const Discord = require('discord.js');
const ms = require('ms');

exports.run = async(client, message, args) => {
    var person  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    if(!person) return message.reply("Couldn't find that member");
    
    let mainrole = message.guild.roles.cache.find(role => role.name === "Tetya");
    let muterole = message.guild.roles.cache.find(role => role.name === "Mute");
            
    if(!muterole) return message.reply("Couldn' t find the mute role")
            
    let time = args[1];       
    if(!time){
        return message.reply("You didnt specify a time!");
    }
            
    person.roles.remove(mainrole.id);
    person.roles.add(muterole.id);
            
    message.channel.send(`@${person.user.tag} has now muted been for ${ms(ms(time))}`);
            
    setTimeout(function() {
        person.roles.add(mainrole.id);
        person.roles.remove(muterole.id);
        message.channel.send(`@${person.user.tag} has ben unmuted!`)
    }, ms(time));
                
};

exports.help = {
    name: "mute",
    description: "mute people",
    usage: "_mute",
    example: "_mute sipos kölök 10s"
};

exports.conf = {
    aliases: ["mu"],
    cooldown: 5
}