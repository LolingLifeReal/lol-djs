//varibles Start
const Discord = require('discord.js');

const { prototype } = require('events');

const client = new Discord.Client();

const prefix = '>>';

const fs = require('fs');

const got = require('got');

const { connect } = require('http2');

const mongoose = require('mongoose');

require('dotenv').config();

clientcommands = new Discord.Collection();

clientaliases = new Discord.Collection();



//varibles end




//Command Handler
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command  = require(`./commands/${file}`);

    clientcommands.set(command.name, command);
}
 

//message event
client.on('message', message =>{
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    

    if(command === 'ping'){
      clientcommands.get('ping').execute(message, args);
    }else if (command === 'e'){
        message.channel.send('bruh get lost ty!');
    }else if (command === 'youtube'){
       clientcommands.get('youtube').execute(message, args)
    }else if (command === 'twitter'){
        clientcommands.get('twitter').execute(message, args)
    }else if (command === 'invite'){
        clientcommands.get('invite').execute(message, args, Discord)
    }else if (command === 'fat'){
        clientcommands.get('fat').execute(message, args)
    }else if (command === 'china'){
        clientcommands.get('china').execute(message, args)
    }else if (command === 'poggers'){
        clientcommands.get('pog').execute(message, args)
    }else if (command === 'serverinfo'){
        clientcommands.get('serverinfo').execute(message, args, Discord)
    }else if (command === 'kick'){
         clientcommands.get('kick').execute(Discord, clientcommands, client, message, args)
    }else if (command === 'ban'){
        clientcommands.get('ban').execute(Discord, clientcommands, client, message, args)
    }else if (command === 'help'){
        clientcommands.get('help').execute(Discord, clientcommands, client, message, args)
    }else if (command === 'purge'){
        clientcommands.get('purge').execute(message, args, client, Discord)
    }else if (command === 'meme'){
        clientcommands.get('meme').execute(message, args, client, Discord)
    }else if (command === 'remind'){
        clientcommands.get('remind').execute(message, args)
    }else if (command === 'play'){
          clientcommands.get('play').execute(message, args)
    }else if (command === 'leave'){
        clientcommands.get('leave').execute(message, args)
    }else if (command === 'nsfw'){
        clientcommands.get('nsfw').execute(message, args, client, Discord)
    }else if (command === 'supportserver'){
        clientcommands.get('server').execute(Discord, clientcommands, client, message, args)
    }else if (command === 'hentai'){
        clientcommands.get('hentai').execute(message, args, client, Discord)
    }else if (command === 'whois'){
        clientcommands.get('whois').execute(Discord, clientcommands, client, message, args)
    }else if (command === 'av'){
        clientcommands.get('avatar').execute(message, args, Discord, client)
    }else if(command === '8ball'){
        clientcommands.get('8ball').execute(Discord, clientcommands, client, message, args)
    }else if(command === 'roleinfo'){
        clientcommands.get('roleinfo').execute(Discord, clientcommands, client, message, args)
    }else if(command === 'covid'){
        clientcommands.get('covid').execute(Discord, clientcommands, client, message, args)
    }else if(command === 'say'){
        clientcommands.get('say').execute(Discord, clientcommands, client, message, args)
    }else if(command === 'slowmo'){
        clientcommands.get('slowmo').execute(Discord, clientcommands, client, message, args)
    }else if(command === 'socials'){
        clientcommands.get('my_socials').execute(Discord, clientcommands, client, message, args)
    }else if(command === 'unban'){
        clientcommands.get('unban').execute(Discord, clientcommands, client, message, args)
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


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userFindAndModify: false,
}).then(() => {
    console.log(`Conected to mongodb BITCH FFS`);
}).catch((err) => {
    console.log(err)
})


client.login(process.env.TOKEN); 
//client.login('ODM4NTkyOTI4OTM3OTM0ODc5.YI9Whg.uPWEY5fZm8Ore9ZOfrtPHJpEATo')


//This is test bot ^^


