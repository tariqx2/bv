const Discord = require('discord.js'),

    client = new Discord.Client({sisableEveryone: true})

    console.log("bb,");

client.on('guildMemberAdd', member => {

const mohamed= member.guild.channels.get("640104334352318474");

if(!mohamed) return;

if(mohamed) {

setTimeout(() => mohamed.send(`Welcome to  **Welcome To Planet..♛**`), 1000)        

}

});

client.on('ready',async () => {

  client.channels.find(ch => ch.id === "608421832198062082" && ch.type === 'voice').join();

});




client.login(process.env.BOT_TOKEN);
