require("dotenv").config();
const {
  Client,
  IntentsBitField,
  messageLink,
  EmbedBuilder,
} = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`☑️ ${c.user.tag} is online`);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  // console.log(interaction.commandName);

  if (interaction.commandName === "hey") {
    interaction.reply("hey back!");
  }

  if (interaction.commandName === "ping") {
    interaction.reply("Pong!");
  }

  if (interaction.commandName === "add") {
    const num1 = interaction.options.get("first-number").value;
    const num2 = interaction.options.get("second-number").value;

    interaction.reply(`The sum is ${num1 + num2}`);
  }

  if (interaction.commandName === "embed") {
    const embed = new EmbedBuilder()
      .setTitle("Embed Title")
      .setDescription("This is the description for the embed")
      .setColor("Red")
      .addFields(
        {
          name: "Field Title",
          value: "This is value for the field",
          inline: true,
        },

        {
          name: "Second Field Title",
          value: "This is value for the second field",
          inline: true,
        }
      )
      .setTimestamp();

    interaction.reply({ embeds: [embed] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "embed") {
    const embed = new EmbedBuilder()
      .setTitle("Embed Title")
      .setDescription("This is the description for the embed")
      .setColor("Red")
      .addFields(
        {
          name: "Field Title",
          value: "This is value for the field",
          inline: true,
        },

        {
          name: "Second Field Title",
          value: "This is value for the second field",
          inline: true,
        }
      )
      .setTimestamp();

	message.channel.send({embeds: [embed]});
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
