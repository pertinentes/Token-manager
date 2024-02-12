const Discord = require('discord.js');
const {manager} = require('../../structures/manager'); 

module.exports = {
    name: "help",
    aliases: [],
    /**
     * @param {manager} client 
     * @param {Discord.Message} message 
     * @param {Array<>} args 
     * @param {string} commandName 
     */
    run: async (client, message, args, color, prefix, footer, commandName) => {
   const help = new Discord.MessageEmbed()
      .setTitle('Menu d\'aide')
      .addField(`\`${prefix}manage <token>\``, "Permet de crée un menu interactif pour géré votre token")
	  .addField(`\`${prefix}info\``, "Avoir les info sur le token manager")
      .setColor(color)
      .setFooter(footer, message.author.avatarURL())
      .setTimestamp();

    message.channel.send({ embeds: [help] });
}
    }