module.exports = {
    name: 'my_socials',
    description: "This command gives my socials",
    execute(Discord, clientcommands, client, message, args){
        const SocialsEmbed = new Discord.MessageEmbed()
        .setColor("#0076FF")
        .setTitle("**Here are the owners SocialMedia's!**")
        .setDescription(":arrow_forward: Youtube: https://www.youtube.com/channel/UCxu38TeFn3dtlM6fbCsKS7A \n :arrow_forward: Twitter: https://twitter.com/darealloling \n :arrow_forward: Discord: Loling-Life#0001")
        message.author.send(SocialsEmbed)
        message.channel.send("Please Check Your DMs!")
    }
};