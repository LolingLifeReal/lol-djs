module.exports = {
  name: 'invite',
  description: "This command sends my invite",
  execute(message, args, Discord){
      const embed = new Discord.MessageEmbed()
            .setColor("Dark violet")
            .setTitle("Click on me to invite")
            .setDescription("Here is my invite link! Enjoy!")
            .setURL('https://discord.com/oauth2/authorize?client_id=820760544318980096&scope=bot&permissions=2147483647')

            
            message.channel.send(embed)
      }
  } 

//https://discord.com/oauth2/authorize?client_id=820760544318980096&scope=bot&permissions=2147483647


//name:'invite',
//description: "Sends invite",
//execute(message, args, Discord){
    //const InviteEmbed = new Discord.MessageEvent()
    //.setColour('#a2a5ff')
    //.setTitle('Here is my invite link')
    //.setURL('https://discord.com/oauth2/authorize?client_id=820760544318980096&scope=bot&permissions=2147483647')
    //}
  //};