module.exports={
    name:'GuildOwnerMessage',
    description: "Sends a message to the owners",
    execute(message, args){
        message.guild.owner.send('Heya! Sorry for annoying u but this is just a test. -Bot Owner LolingLife')
        }
      };
  