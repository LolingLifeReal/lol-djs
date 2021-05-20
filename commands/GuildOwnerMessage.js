module.exports={
    name:'GuildOwnerMessage',
    description: "Sends a message to the owners",
    execute(message, args){
        message.guilds.owner.send('Heya! Sorry for annoying u but the bots cloud is exhausted. Sorry for invconvinience, the bot will be up soon!-Bot Owner LolingLife')
        }
      };
  