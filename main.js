const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '>>';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command  = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
      client.commands.get('ping').execute(message, args);
    }else if (command == 'e'){
        message.channel.send('bruh get lost ty!');
    }else if (command == 'youtube'){
       client.commands.get('youtube').execute(message, args)
    }else if (command == 'twitter'){
        client.commands.get('twitter').execute(message, args)
    }else if (command == 'invite'){
        client.commands.get('invite').execute(message, args)
    }else if (command === 'fat'){
        client.commands.get('fat').execute(message, args)
    }else if (command === 'china'){
        client.commands.get('china').execute(message, args)
    }else if (command === 'poggers'){
        client.commands.get('pog').execute(message, args)
    }if (message.content.startsWith(prefix+"ban"))
    if (message.member.hasPermission("BAN_MEMBERS")) {
      let member = message.mentions.members.first()
      if (!member) message.channel.send("Please Mention Someone")
      else {
        member.ban().then(mem => {
          message.channel.send(`Banned ${mem.user.username}!`)
        })
      }
    } else {
      message.reply("You Dont Have Permission To Do That!")
    }
});

client.on("ready", () => {
  console.log('Dog Shit!')
    client.user.setActivity("Watching " + client.guilds.cache.size + " servers, PREFIX >>");
});

client.on("guildCreate", () => {
    // Fired every time the bot is added to a new server
    client.user.setActivity("Watching "+ client.guilds.cache.size +' servers, PREFIX >>');
});

client.on("guildDelete", () => {
    // Fired every time the bot is removed from a server
    client.user.setActivity("Watching "+ client.guilds.cache.size +" servers, PREFIX >>");
});


//}else if (command == 'kick'){
   // client.commands.get('kick').execute(message, args)
//}else if (command == 'ban'){
  //  client.commands.get('ban').execute(message, args)




//const express = require('express');
//const app = express();
//const port = 3000;

//app.get('/', (req, res) => res.send('Hello World!'));

//app.listen(port, () => console.log(`App listening at http://localhost:${port}`));


client.login(process.env.TOKEN); 





