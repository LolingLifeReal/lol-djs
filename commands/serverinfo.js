module.exports = {
    name: 'serverinfo',
    description: "This command shows the info of the server",
    execute(message, args){
        const target = message.mentions.users.first();
        if (message.content === prefix+"serverinfo") {
            let embed = new Discord.MessageEmbed()
              .setColor("BLUE")
              .setTitle("Server Info")
              .setDescription(`${message.guild}.`)
              .addField("Member Count", `This Server Has ${message.guild.memberCount} member(s)!`)
              .addField("Role Count", `This Server Has ${message.guild.roles.cache.size} Role(s)!`)
              .addField("Emoji Count", `This Server Has ${message.guild.emojis.cache.size} emoji(s)!`)
            message.channel.send(embed)
        }
    }
 }
            
        
    





 