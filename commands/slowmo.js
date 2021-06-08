module.exports = {
    name: 'slowmo',
    description: 'Sets slowmode .',
    async execute(Discord, clientcommands, client, message, args){
        if(!message.member.hasPermission("ADMINISTRATOR", 'MANAGE_CHANNELS')) {
            return message.reply("You don't have enough perms to use this command!")
        }
        let duration = args[0]
        if(isNaN(duration)) return message.reply("Please give the time in seconds.")
        let reason = args.slice(1).join(" ")
        if(!reason) return message.reply("Please specify a reason!")
        
        message.channel.setRateLimitPerUser(duration, reason)
        message.reply(`Successfully set the slowmode to ${duration} seconds with Reason - ${reason}`)
    }
}