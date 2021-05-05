module.exports= {
    name: 'help',
    description: "This command shows all the comands",
    execute(message, args, Discord){
        const embed = new Discord.MessageEmbed()
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
        .addFooter("Commands can be put in uppercase or lower case.")


        message.channel.send(embed)
    }
}