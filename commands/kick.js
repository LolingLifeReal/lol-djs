module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(Discord, clientcommands, client, message, args){
        const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You need permissions!") 
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Bot need permissions!") 
          let member = message.mentions.members.first()
          if (!member) message.reply("Please Mention The User You Want To Kick!")
          else {
            member.kick().then(mem => {
              message.channel.send(`Kicked ${mem.user.username}!`)
            })
          }
        }
   }
