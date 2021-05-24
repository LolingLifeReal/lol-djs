
module.exports = {
    name:'userinfo',  
    description: "gives server info",
    execute(client, message, args, Discord){
    let target = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.member;
if(!target) return message.reply(`No User Mentioned !`)
    let userinfoembed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`Here is ${target.user.tag}'s Info`)
    .setDescription(`:black_square_button: Bot : ${target.user.bot} \n :black_square_button: USER ID : ${target.id} \n :black_square_button: Tag : ${target.user.tag}\n :black_square_button: Joined Discord : ${target.user.createdAt} \n `)
    .setThumbnail(target.user.displayAvatarURL({dynamic:true}));


message.channel.send(userinfoembed)
console.log("Userinfo was executed")
    }
}
