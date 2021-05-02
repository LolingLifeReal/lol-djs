
module.exports={
  name:'invite',
  description: "Sends invite",
  execute(message, args, Discord){
      const InviteEmbed = new Discord.MessageEvent()
      .setColour('#a2a5ff')
      .setTitle('Here is my invite link')
      .setURL('https://discord.com/oauth2/authorize?client_id=820760544318980096&scope=bot&permissions=2147483647')
      }
    };



//https://discord.com/oauth2/authorize?client_id=820760544318980096&scope=bot&permissions=2147483647