const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NjU0NDM3NjIyNzU5ODE3MjU2.XfFiqg.Q6gG6ulzan3l_2m11QAir55MoAA';
usedCommandRecently4 = new Set();

client.on('ready', () =>{
    console.log('gen bot is now online')
    client.user.setPresence({ game: { name: `${client.guilds.size} Servers`, type: "WATCHING"}});
});
client.on('message', message =>{
    if (message.content === 'hello'){
        message.author.send('hi');
    };
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '!spotify'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('**Cooldown Please wait**')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 10000)
        var string = `test11
test12
test1221
`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
        message.author.send(`${random}`);
};
};
});

client.on('message', message => {
    if (!message.guild) return;
    if (message.content === '!spotify') {
        if (usedCommandRecently4.has(message.author.id)) {
            message.channel.send('>>> **Account has been sent** | :white_check_mark:')
        } else {
            usedCommandRecently4.add(message.author.id);
            setTimeout(() => {
                usedCommandRecently4.delete(message.author.id);
            }, 10000)
            var string = `**CoolDown Please wait**`
            var words = string.split('\n');
            let random = words[Math.floor(Math.random() * words.length)];
        };
    };
});
client.login('NjU0NDM3NjIyNzU5ODE3MjU2.XfFiqg.Q6gG6ulzan3l_2m11QAir55MoAA');
