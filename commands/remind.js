const ms = require('ms')

module.exports={
    name:'remind',
    description: "This reminds ur mom to go live on onlyfans",
    execute(message, args){
        let time = args[0]

        if (!time) {
            return message.channel.send('You Need To Tell Me How Long You Want Me To Remind You In!')
        }

        const reminder = args.join(" ").slice(args[0].length);

        if (reminder) {
            if (!args[1]) {
                return message.channel.send('You Need To Specify The Reminder')
            }

            message.channel.send(`You Have Set A Reminder, I Will Remind You In ${time}`)

            setTimeout(function ( ) {
                message.member.send(`${reminder}`)
               }, ms(time));
            }
          }
      };
  