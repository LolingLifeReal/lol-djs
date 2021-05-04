module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if (message.member.hasPermission("KICK_MEMBERS")) {
          let member = message.mentions.members.first()
          if (!member) message.reply("Please Mention Someone")
          else {
            member.kick().then(mem => {
              message.channel.send(`Banned ${mem.user.username}!`)
            })
          }
        } else {
          message.reply("You Dont Have Permission To Do That!")
        }
   }
}