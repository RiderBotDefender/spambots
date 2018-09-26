const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 200; x++) {
        message.channel.send(`@everyone بنحدف السيرفر, تضنون نفسكم خلصتها بس السحر وبقوة ارجعناها`)
          .then(m => {
            count++;
          })
          
        }
      }
});
