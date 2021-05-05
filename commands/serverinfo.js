module.exports = {
    name: 'serverinfo',
    description: "This command shows the info of the server",
    execute(message, args, Discord){
        const embed = new Discord.MessageEmbed()
              .setColor("Dark violet")
              .setTitle("Server Info")
              .setDescription(`${message.guild}.`)
              .addField("Member Count", `This Server Has ${message.guild.memberCount} Members.`)
              .addField("Role Count", `This Server Has ${message.guild.roles.cache.size} Roles.`)
              .addField("Emoji Count", `This Server Has ${message.guild.emojis.cache.size} Emoji's.`)
              .addField("Server Owner", `The Owner of this server is ${message.guild.owner}`) 
            message.channel.send(embed)
        }
    } 