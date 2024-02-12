const { manager } = require('../../structures/manager');
const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
    name: 'messageCreate',

    /**
     * @param {manager} client
     * @param {Discord.Message} message
     */
    run: async (client, message) => {
        try {
            if (!message.guild || message.author.bot) return;

            let color = client.color.red;
            let footer = 'Token Manager By Hisxokaq';

            let prefix = db.get(`prefix_${message.guild.id}`);
            if (prefix === null) prefix = client.config.prefix;
            if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {
                return message.reply(`Mon préfixe est \`${prefix}\``).catch(e => {});
            }
            if (!message.content.startsWith(prefix)) return;
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const commandName = args.shift().toLowerCase();
            const cmd = client.commands.get(commandName) || client.aliases.get(commandName);

            if (!cmd) return;
            cmd.run(client, message, args, color, prefix, footer, commandName);
        } catch (err) {
            console.log("messageCreate error : " + err);
        }
    }
};
