const Discord = require('discord.js')

module.exports = {
    name: 'ready',

    run: async (client) => {
           console.log(`
 \u001b[34m╔═════════════════════════════════╗
 \u001b[34m║-->  Nom : ${client.user.username}
 \u001b[35m╟─────────────────────────────────╢
 \u001b[35m║-->  Prefix   : ${client.config.prefix} 
 \u001b[36m╟─────────────────────────────────╢
 \u001b[36m║-->  Membres    : ${client.users.cache.size}
 \u001b[34m╟─────────────────────────────────╢
 \u001b[34m║-->  Salons : ${client.channels.cache.size}
 \u001b[32m╟─────────────────────────────────╢
 \u001b[32m║-->  Serveurs   : ${client.guilds.cache.size}
 \u001b[33m╚═════════════════════════════════╝`)
    console.log(`\x1b[38;2;205;54;255mToken Manager from Hisxokaq`)
    client.guilds.cache.map(async guild => {
        await guild.members.fetch().catch(e => { })
    })   
client.user.setPresence({activities: [{name: "Token Manager by vocabulaire", type: "WATCHING"}], status: "dnd"})
    }
}