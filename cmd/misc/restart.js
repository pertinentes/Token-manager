const Discord = require("discord.js")
const {manager} = require('../../structures/manager'); 

module.exports = {
    name: "restart",
    aliases: ["reboot"],
    /**
     * @param {manager} client 
     * @param {Discord.Message} message 
     * @param {Array<>} args 
     * @param {string} commandName 
     */
    run: async (client, message, args, color, prefix, footer, commandName) => {
        message.channel.send("🕙 Reboot en cours ...").then(async msg => {
        msg.edit("🕙 Reboot en cours ...")
                setTimeout(() => {
            process.exit()
        }, 1500)
        await client.login(client.config.token);
        await msg.edit("🕙 Reboot en cours ...")
        msg.edit("Reboot bien effectué")
    })
    }
 }