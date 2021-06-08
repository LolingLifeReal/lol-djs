module.exports = {
    name: 'help',
    description: "This command shows all the comands",
    execute(Discord, clientcommands, client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor("Dark violet")
        .setTitle("**Here are the list of commands**")
        .addField("Serverinfo", `>>ServerInfo`)
        .addField("Ping", `>>Ping`)
        .addField("Bot Invite", `>>Invite`)
        .addField("Kick", `>>Kick @{User}`)
        .addField("Ban", `>>Ban @{User}`)
        .addField('Purge', `>>Purge {Ammount}`)
        .addField("Bot Owner's Socials", `>>Socials`)
        .addField("Meme", `>>Meme`)
        .addField("Remind", `>>Remind {Time in seconds} {Reminder}`)
        .addField("Music (Advanced music comming soon!)", `>>Play {Music name or Link} \n >>leave`)
        .addField("ChangeLog", `>>Changelog (**NOT OUT YET! Coming soon :D**)`)
        .addField("Nsfw (Has to be a nsfw channel)", `>>Nsfw \n >>Hentai`)
        .addField("Discord Server", `>>DiscordServer`)
        .addField("Whois", `>>Whois @{Username}`)
        .addField("User avatar", `>>Av @(username) \n >>Avatar @(username)`)
        .addField("Covid", `>>Covid {Country}`)
        .addField("8ball", `>>8ball {Your Question}`)
        .addField("Slowmode {Use in the channel you want to set it in}", `>>slowmo {Time in seconds (can't be more than six hours)}`)
        .addField("RoleInfo", `>>RoleInfo @{Role}`)
        .setDescription("**If you need help join the bot server https://discord.gg/t8gNsjbBPp. You don't have to put the commands in the caps they are in, commands on me can be lower case or upper case**")
        message.author.send(newEmbed)
        message.channel.send('Sent to your dms!')
        console.log("Help was executed")
        
    }
}