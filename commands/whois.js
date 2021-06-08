
module.exports = {
    name:'whois',  
    description: "gives server info",
    execute(Discord, clientcommands, client, message, args){
    let target = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.member;
if(!target) return message.reply(`No User Mentioned !`)
    let userinfoembed = new Discord.MessageEmbed()
    .setColor('#0076FF')
    .setTitle(`Here is ${target.user.tag}'s Info`)
    .setDescription(`:arrow_forward: Bot : ${target.user.bot} \n \n :arrow_forward: USER ID : ${target.id} \n \n :arrow_forward: Tag : ${target.user.tag}\n \n :arrow_forward: Joined Discord : ${target.user.createdAt} \n \n`)
    .setThumbnail(target.user.displayAvatarURL({dynamic:true}));


message.channel.send(userinfoembed)
console.log("Userinfo was executed")
    }
}
