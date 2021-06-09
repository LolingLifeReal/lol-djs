module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(Discord, clientcommands, client, message, args){
        const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
        const reason = args[1] || "There was no reason!";
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You Dont Have Permission To Do That!") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!")
          let member = message.mentions.members.first()
          if (!member) message.reply("Please Mention The User You Want To Ban!")
          else {
            member.ban({reason: reason}).then(mem => {
              message.channel.send(`Banned ${mem.user.username}!`)
            })
          }
        } 
      }


