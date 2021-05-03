module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if (message.content.startsWith(prefix+"kick"))
        if (message.member.hasPermission("KICK_MEMBERS")) {
          let member = message.mentions.members.first()
          if (!member) message.channel.send("Please Mention Someone")
          else {
            member.kick().then(mem => {
              message.channel.send(`Kicked ${mem.user.username}!`)
            })
          }
        } else {
          message.reply("You Dont Have Permission To Do That!")
        }
   }
}