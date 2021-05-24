module.exports = {
    name: 'avatar',
    execute(message, args, Discord, client){
        let target = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.member;
        
        if(!target) return message.reply(`No User Mentioned !`)


    //.setThumbnail(target.user.displayAvatarURL({dynamic:true}));


    message.channel.send(target.user.displayAvatarURL({dynamic:true}))

    console.log("Avatar was executed")

    }
}