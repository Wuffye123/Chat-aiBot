const Discord = require("discord.js");
const Brainclient = new Discord.Client();
const alexa = require("alexa-bot-api");
const token = process.env.TOKEN;
let ai = new alexa("aw2plm")//access key free :)
Brainclient.on("ready", async () => {
    console.log(`Chatbot is online!`);
  Brainclient.user.setActivity(`Hans kapan punya pacar?`)
});

Brainclient.on('message', async message => {
    if (message.author.bot) return;

    if (message.channel.id === "788306064956588072") { // if you want it to work only in a specific channel.

    let content = message.content;

    ai.getReply(content).then(r => message.channel.send(r)); 
    } else {
        return;
    }
});

Brainclient.login(token);
