const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
  console.log('I am ready!');
});

client.on('message', message => {
	  if (message.content  ===  'ping') {
    		message.reply('pong');
  }
});

//THIS MUST REMAIN THE SAME
client.login(settings.NDU4NDQ4ODI1OTk3MTk3Mzc1.Dgoa-g.RtkFvDuvidq2wy_ey-kl7sqebw8);
