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
const spamtoken = ["NDk0NjE1MzM1MDc3NTQzOTM2.Do2P2w.yo7XCfl2XTDNry4cPLQUPF8b8Ew","NDk0NjI5MTI4MTk3MzczOTgy.Do2TQA.Z9rGr5Qb2VDzlLITKrHELorxYT8"]
client.login(spamtoken);
