//varibles Start
const Discord = require('discord.js');

const { prototype } = require('events');

const client = new Discord.Client();

const prefix = '>>';

const fs = require('fs');

const got = require('got');

const { connect } = require('http2');

const mongoose = require('mongoose');

//varibles end

client.commands = new Discord.Collection();
//mongoose
mongoose.connect('mongodb+srv://LolingLife:garimanb123@lolbot.za8tv.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true})

//Command Handler
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
    }else if (command === 'e'){
        message.channel.send('bruh get lost ty!');
    }else if (command === 'youtube'){
       client.commands.get('youtube').execute(message, args)
    }else if (command === 'twitter'){
        client.commands.get('twitter').execute(message, args)
    }else if (command === 'invite'){
        client.commands.get('invite').execute(message, args, Discord)
    }else if (command === 'fat'){
        client.commands.get('fat').execute(message, args)
    }else if (command === 'china'){
        client.commands.get('china').execute(message, args)
    }else if (command === 'poggers'){
        client.commands.get('pog').execute(message, args)
    }else if (command === 'serverinfo'){
        client.commands.get('serverinfo').execute(message, args, Discord)
    }else if (command === 'kick'){
         client.commands.get('kick').execute(message, args)
    }else if (command === 'ban'){
        client.commands.get('ban').execute(message, args)
    }else if (command === 'help'){
        client.commands.get('help').execute(message, args, Discord)
    }else if (command === 'purge'){
        client.commands.get('purge').execute(message, args, client, Discord)
    }else if (command === 'meme'){
        client.commands.get('meme').execute(message, args, client, Discord)
    }else if (command === 'send'){
        client.commands.get('GuildOwnerMessage').execute(client, message, args)
    }else if (command === 'remind'){
        client.commands.get('remind').execute(message, args)
    }else if (command === 'play'){
          client.commands.get('play').execute(message, args)
    }else if (command === 'leave'){
        client.commands.get('leave').execute(message, args)
    }else if (command === 'nsfw'){
        client.commands.get('nsfw').execute(message, args, client, Discord)
    }else if (command === 'server'){
        client.commands.get('server').execute(message, args)
    }else if (command === 'hentai'){
        client.commands.get('hentai').execute(message, args, client, Discord)
    }
});


//Bot On
client.on("ready", () => {
  console.log('Dog Shit! ' + `${client.user.tag}`)
  //Bot Status
    client.user.setActivity(">>Help In " + client.guilds.cache.size + " Guilds.");
});

client.on("guildCreate", () => {
    // Fired every time the bot is added to a new server
    client.user.setActivity(">>Help In " + client.guilds.cache.size + " Guilds.");
});

client.on("guildDelete", () => {
    // Fired every time the bot is removed from a server
    client.user.setActivity(">>Help In " + client.guilds.cache.size + " Guilds.");
});
//bot status end

//repl.it shit
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//const express = require('express');
//const app = express();
//const port = 3000;

//app.get('/', (req, res) => res.send('Hello World!'));

//app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Mongo connecting
mongoose.connect(process.env.mongoDbDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userFindAndModify: false,
})
.then(() => {
    console.log("Connected to DataBAse SKEEEEEEEEEEEET");
})
.catch((err) => {
    console.log(err);
})
//End



//client.login(process.env.TOKEN); 
client.login('ODM4NTkyOTI4OTM3OTM0ODc5.YI9Whg.Nm1SHJTeTCyJyLadJVx9XzpHGbc')
//This is test bot ^^


