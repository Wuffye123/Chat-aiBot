const Discord = require("discord.js");
const Client = new Discord.Client();
const alexa = require("alexa-bot-api");
const token = process.env.TOKEN;
const channel = Client.config.channel;
let ai = new alexa("aw2plm");

Client.on("ready", async () => {
    console.log(`Chatbot is online!`);
  Client.user.setActivity(`Im chatting with everyone!!`);
});

Client.on('message', async message => {
    if (message.author.bot) return;

    if (message.channel.id === channel) {

    let content = message.content;

    ai.getReply(content).then(r => message.channel.send(r)); 
    } else {
        return;
    }
});

Client.login(token);
