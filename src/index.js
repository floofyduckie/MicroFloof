require('dotenv').config();
const {Client, IntentsBitField, messageLink} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ],
});

client.on('ready',(c) => {
    console.log(`☑️ ${c.user.tag} is online`);
});  

client.on('interactionCreate',(interaction) => {
    if (!interaction.isChatInputCommand()) return;

    // console.log(interaction.commandName);

    if (interaction.commandName === "hey"){
        interaction.reply("hey back!");
    }

    if (interaction.commandName === "ping"){
        interaction.reply("Pong!");
    }
});

// client.on('messageCreate', (message) => {

//     if (message.author.bot){
//         return;
//     }

//     if (message.content === "hello"){
//         message.reply("hello!");

//     }

//     // console.log(message.content);
//     // console.log(message.author.username);
// });

client.login(process.env.TOKEN);
