const Discord = require('discord.js');
const process = require('process');
const { manager } = require('../../structures/manager');
const { MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
    name: "infos",
    aliases: ["botinfos", "botinfo"],
    /**
     * @param {manager} client 
     * @param {Discord.Message} message 
     * @param {Array<>} args 
     * @param {string} commandName 
     */
    run: async (client, message, args, color, prefix, footer, commandName) => {
    const button1 = new Discord.MessageButton()
      .setStyle('LINK')
      .setLabel('Support')
      .setURL('https://discord.gg/xyla')
      .setEmoji('<:np_link:1126820169826701352>')

    const button2 = new Discord.MessageButton()
      .setStyle('LINK')
      .setLabel('Github')
      .setURL('https://github.com/impavide')
      .setEmoji('<:github:1137313867853213696>')

    const row = new MessageActionRow()
      .addComponents(button1, button2);

    const embed = new Discord.MessageEmbed()
      .setTitle('Version Du Bot: 1.0.0')
      .setColor('#0099ff')
      .setThumbnail('')
      .addField('Uptime', `${parseInt(process.uptime() / 3600)} heure(s), ${parseInt(process.uptime() % 3600 / 60)} minute(s) et ${parseInt(process.uptime() % 60)} seconde(s)`)
      .addField('Créateur', 'Impavide')
      .addField('Versions', `Node.js: ${process.versions.node}`)
      .addField('Discord', Discord.version)
      .setTimestamp();

    message.channel.send({ embeds: [embed], components: [row] });
  }
};
