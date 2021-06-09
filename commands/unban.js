module.exports = {
    name: 'unban',
    description: "This command unbans a member!",
    async execute(Discord, clientcommands, client, message, args){
        let GetbannedKid = await client.users.fetch(args[0])

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

        const reason = args[1] || "There was no reason!";

        message.guild.members.unban(GetbannedKid, reason)

        message.channel.send(`${GetbannedKid} has been unbanned from the server!`)
      }
}
