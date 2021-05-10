module.exports = {
    name: 'help',
    description: "This command shows all the comands",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor("Dark violet")
        .setTitle("Here are the list of commands")
        .addField("Serverinfo", `>>ServerInfo`)
        .addField("Ping", `>>Ping`)
        .addField("Invite", `>>Invite`)
        .addField("Kick", `>>Kick`)
        .addField("Ban", `>>Ban`)
        .addField("Bot Owner's twitter", `>>Twitter`)
        .addField("Bot Owner's Youtube", `>>Youtube`)
        .addField("Fat meme", `>>Fat`)
        .addField("China Meme (Trump)", `>>China`)
        .addField("Pog", `>>Poggers`)
        .addField("Serverinfo", `>>ServerInfo`)
        .setDescription("You don't have to put the commands in the caps they are in, commands on me can be lower case or upper case")
        message.channel.send(newEmbed)
    }
}