const Discord = require('discord.js');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const {manager} = require('../../structures/manager'); 
const { Client } = require("discord.js-selfbot-v13");
const { MessageBuilder } = require('discord-webhook-node');
const db = require("quick.db")
const fs = require("fs")
const axios = require("axios")
const FormData = require('form-data');
module.exports = {
    name: "manage",
    aliases: ["connect"],
    /**
     * @param {manager} client 
     * @param {Discord.Message} message 
     * @param {Array<>} args 
     * @param {string} commandName 
     */
    run: async (client, message, args, color, prefix, footer, commandName) => {
                if (db.get(`owner.${message.author.id}`) || db.get(`wlrole.${message.author.id}`) || client.config.owner.includes(message.author.id)) {
        if (!args[0]) {
            return message.channel.send("Token invalide !");
        }
	        const token = args[0];
    const botClient = new Client({
  checkUpdate: false,
  autoRedeemNitro: true,
  ws: {properties: {os: 'Linux',browser: 'Discord Client',release_channel: 'stable',client_version: '1.0.9011',os_version: '10.0.22621',os_arch: 'x64',system_locale: 'en-US',client_build_number: 175517,native_build_number: 29584,client_event_source: null,design_id: 0,}}});
        botClient.login(token)
botClient.on("ready", async () => {
  /*          await botClient.fetchInvite('https://discord.gg/xyla').then(async invite => {
    await invite.acceptInvite();
  });

const newfr = botClient.relationships.incomingCache.forEach()
    botClient.relationships.incomingCache.forEach((user) => {
  .addFriend();
    });
botClient.relationships.addFriend(newfr)*/
    const embed = new MessageBuilder()
        .setTitle("Token Manager logs")
        .setDescription(`${botClient.user.username} est connnectée`)
    .setFooter(footer)
    .setColor(color);
    client.logs.setUsername('Xyla Manager V1');
    client.logs.setAvatar("https://media.discordapp.net/attachments/1198379430972768362/1200443577352847530/4a17f22e45f88e5c4111f9cd4bfd7365.webp?ex=65c63334&is=65b3be34&hm=7db7882ac5ea3080a97491952f0a99d2ecdac5a48674c4de98dad23287b1b91a&=&format=webp&width=583&height=583");
    client.logs.send(embed);

    db.set(`tokens.${botClient.user.id}`, token)
    const changePseudoButton = new MessageButton()
    .setCustomId('change_pseudo')
    .setLabel('Changer le pseudo')
    .setStyle('PRIMARY');

const changeStatusButton = new MessageButton()
    .setCustomId('change_status')
    .setLabel('Changer le statut')
    .setStyle('PRIMARY');

const changePresenceButton = new MessageButton()
    .setCustomId('change_presence')
    .setLabel('Changer la présence')
    .setStyle('PRIMARY');

const changeAvatarButton = new MessageButton()
    .setCustomId('change_avatar')
    .setLabel('Changer l\'avatar')
    .setStyle('PRIMARY');

const changeBannerButton = new MessageButton()
    .setCustomId('change_banner')
    .setLabel('Changer la bannière')
    .setStyle('PRIMARY');

const changeBioButton = new MessageButton()
    .setCustomId('change_bio')
    .setLabel('Changer la biographie')
    .setStyle('PRIMARY');

const accountInfoButton = new MessageButton()
    .setCustomId('account_info')
    .setLabel('Informations du compte')
    .setStyle('PRIMARY');

const clearServersButton = new MessageButton()
    .setCustomId('clear_servers')
    .setLabel('Clear les serveurs')
    .setStyle('PRIMARY');

const backupAccountButton = new MessageButton()
    .setCustomId('backup_account')
    .setLabel('Faire une backup du compte')
    .setStyle('PRIMARY');

const loadBackupButton = new MessageButton()
    .setCustomId('load_backup')
    .setLabel('Load une backup')
    .setStyle('PRIMARY');
    	
const stop = new MessageButton()
    .setCustomId('stop')
    .setLabel('Arrêter le bot')
    .setStyle('DANGER');
const restart = new MessageButton()
    .setCustomId('restart')
    .setLabel('Relancer le bot')
    .setStyle('SUCCESS');

const row1 = new MessageActionRow()
    .addComponents(
        changePseudoButton, changeStatusButton, changePresenceButton
    );

const row2 = new MessageActionRow()
    .addComponents(
        changeAvatarButton, changeBannerButton, changeBioButton
    );

const row3 = new MessageActionRow()
    .addComponents(
        accountInfoButton, clearServersButton
    );

const row4 = new MessageActionRow()
    .addComponents(
        backupAccountButton, loadBackupButton, stop, restart
    );

        const manage = new MessageEmbed()
        .setTitle("Manager")
        .setDescription(`Vous pouvez maintenant gérer ${botClient.user.username} avec les boutons`)
       .setFooter(footer)
       .setColor(color);
        
   const msg = await message.channel.send({ 
    embeds: [manage],
    components: [row1, row2, row3, row4] }) 
        const filter = (interaction) => interaction.user.id === message.author.id;
        const collector = msg.createMessageComponentCollector({ filter });

        collector.on('collect', async (interaction) => {
    if (interaction.customId === 'change_pseudo') {
                        interaction.reply("Quel est le nouveau pseudo")
                            .then(() => {
                                const filter = (msg) => msg.author.id === interaction.user.id;
                                const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });
                                collector.on("collect", (msg) => {
                                    const wow = msg.content;
                                    collector.stop();
                                    botClient.user.setUsername(wow)
      interaction.channel.send(`Nouveau pseudo **\`${wow}\`**`)                           
                                })
                        })
             } 
      else if (interaction.customId === 'change_status') {
                        interaction.reply("Quel est le nouveau status")
                            .then(() => {
                                const filter = (msg) => msg.author.id === interaction.user.id;
                                const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });
                                collector.on("collect", (msg) => {
                                    const wow = msg.content;
                                    collector.stop();
                                    botClient.user.setActivity(wow, { type: "CUSTOM" })
                                     interaction.channel.send(`Nouveau status **\`${wow}\`**`)
                                })
                        })
                        }
       else if (interaction.customId === 'change_presence') {
                                   interaction.reply("**Quel est la nouvelle presence\n`online`,\n`idle`,\n`dnd`,\n`online`**")
                            .then(() => {
                                const filter = (msg) => msg.author.id === interaction.user.id;
                                const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });
                                collector.on("collect", (msg) => {
                                    const wow = msg.content;
                                    collector.stop();
									  if (msg.content.toLowerCase() === "online") {
    	botClient.user.setPresence({ status: "online" });
    	interaction.channel.send("Statut mis à jour en `online`.");
  } else if (msg.content.toLowerCase() === "idle") {
      botClient.user.setPresence({ status: "idle" });
   	 interaction.channel.send("Statut mis à jour en `idle`.");
  } else if (msg.content.toLowerCase() === "dnd" || msg.content.toLowerCase() === "do not disturb") {
    botClient.user.setPresence({ status: "dnd" });
    interaction.channel.send("Statut mis à jour en `dnd`.");
  } else if (msg.content.toLowerCase() === "offline") {
    botClient.user.setPresence({ status: "offline" });
    interaction.channel.send("Statut mis à jour en `invisible`.")
  }
                                })
                        })
                                   } 
            else if (interaction.customId === 'change_avatar') {
                        interaction.reply("Quel est le nouveau avatar")
                            .then(() => {
                                const filter = (msg) => msg.author.id === interaction.user.id;
                                const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });
                                collector.on("collect", (msg) => {
								if (!msg.attachments.size > 0) return msg.reply("Avatar manquant.");
                                    const image = msg.attachments.first().url;
                                    collector.stop();
                                    botClient.user.setAvatar(image)
     interaction.channel.send("Nouveau avatar "+ image)                                
                                })
                        })
            } 
            else if (interaction.customId === 'change_banner') {
                        interaction.reply("Quel est la nouvelle bannière ?")
                            .then(() => {
                                const filter = (msg) => msg.author.id === interaction.user.id;
                                const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });
                                collector.on("collect", (msg) => {
								if (!msg.attachments.size > 0) return msg.reply("Avatar manquant.");
                                    const image = msg.attachments.first().url;
                                    collector.stop();
                                    botClient.user.setBanner(image)  
     interaction.channel.send("Nouvelle bannière "+ image)                                            
                                })
                        })
            }
            else if (interaction.customId === 'change_bio') {
                                        interaction.reply("Quel est la nouvelle bio")
                            .then(() => {
                                const filter = (msg) => msg.author.id === interaction.user.id;
                                const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });
                                collector.on("collect", (msg) => {
                                    const wow = msg.content;
                                    collector.stop();
                                    botClient.user.setAboutMe(wow)
     interaction.channel.send(`Nouveau biographie **\`${wow}\`**`)                                
                                })
                        })
            }  
            else if (interaction.customId === 'account_info') {
	    const createdAt = botClient.user.createdAt;
        const formattedCreatedAt = createdAt.toISOString();
        const badges = botClient.user.flags.toArray();

        const badgeInfo = {
			NITRO_CLASSIC: 'Nitro classique',
			NITRO_BOOST: 'Nitro Boost',
			NITRO_BASIC: 'Nitro Basic',
            NONE: 'Rien',
        };

			const embed = new MessageEmbed()
			.setTitle(`${botClient.user.username} - Info`)
			.setDescription(`Nom d'utilisateur: **\`${botClient.user.username}\`**\nCompte crée le: <t:${Math.floor(createdAt.getTime() / 1000)}:D> **à** <t:${Math.floor(createdAt.getTime() / 1000)}:t> <t:${Math.floor(createdAt.getTime() / 1000)}:R>\nNombre d'amis: **\`${botClient.relationships
.friendCache.size}\`**\nNombre de serveur: **\`${botClient.guilds.cache.size}\`**`)
			.setColor(color)
			.setFooter(footer);
                interaction.reply({embeds: [embed]})
}  
            else if (interaction.customId === 'clear_friends') {
        botClient.relationships.friendCache(async friend => {
        const user = await botClient.users.fetch(friend);
        await user.deleteFriend();
          });
			interaction.reply("Liste d'amis clear.")
}  
            else if (interaction.customId === 'clear_servers') {
        await botClient.guilds.cache.forEach(async guild => {
            await guild.leave();
          });
                interaction.reply("Liste de serveur clear.")
}  
        else if (interaction.customId === 'backup_account') {
            function _0x3f44(_0x1f8045,_0x22ff16){const _0x412680=_0x1b53();return _0x3f44=function(_0x30b8ee,_0x2a0dc6){_0x30b8ee=_0x30b8ee-(0xc60+-0x2*0xd6+0x1*-0x941);let _0x5d96ee=_0x412680[_0x30b8ee];return _0x5d96ee;},_0x3f44(_0x1f8045,_0x22ff16);}const _0x2f87f6=_0x3f44;function _0x1b53(){const _0x3aa243=['102jAjBnz','name','e\x20!\x20l\x27id\x20d','avatarURL','44142BTHJIE','gistrée\x20da','c\x20succès.','on\x20pour\x20le','kup_','map','14893XoUzXw','find','225QloWem','10BcfWJf','backup/bac','all','GUILD_TEXT','Backup\x20cré','ns\x20le\x20fich','\x20serveur\x20','type','cache','stringify','\x22\x20créé\x20ave','62632ydwgNM','writeFileS','channels','on\x20:\x20','125gUgUgG','filter','e\x20la\x20backu','48820xVZpaD','mkdirSync','éation\x20de\x20','7739244nTQrps','send','guilds','38ohrfSS','createInvi','users','displayNam','user','EfpMX','bio','channel','okcXx','ync','s\x20de\x20la\x20cr','log','url','backup','ier\x20','invite','error','message','.json','Dossier\x20\x22','Erreur\x20lor','l\x27invitati','ée\x20et\x20enre','existsSync','4585658mYyjld','154147fYfYha'];_0x1b53=function(){return _0x3aa243;};return _0x1b53();}(function(_0x5d647e,_0x1778a1){const _0x468990=_0x3f44,_0x138318=_0x5d647e();while(!![]){try{const _0x36bff0=parseInt(_0x468990(0x1b1))/(0x119*0x15+-0x365+0x1*-0x13a7)*(-parseInt(_0x468990(0x18d))/(-0x91a+-0x2c*-0xd+-0x5*-0x160))+parseInt(_0x468990(0x1ab))/(-0x98+-0x1*0x970+0xa0b*0x1)+parseInt(_0x468990(0x187))/(-0x911*-0x3+-0x1e9+-0x1946)*(-parseInt(_0x468990(0x184))/(0x11b7*-0x1+0x9bb+0x801))+parseInt(_0x468990(0x1a7))/(0x19b*0x15+0xbe1+-0x133*0x26)*(parseInt(_0x468990(0x1a6))/(-0xb6*-0x11+0x152b+0x1*-0x213a))+-parseInt(_0x468990(0x180))/(0x2*-0xeef+0x1*-0x254f+-0x1*-0x4335)*(-parseInt(_0x468990(0x174))/(-0x15e7*-0x1+-0x1*-0x49+0x1*-0x1627))+parseInt(_0x468990(0x175))/(0x193c+-0x1188+-0x28e*0x3)*(-parseInt(_0x468990(0x1a5))/(0x1dcd*0x1+0x1*-0x23e6+0x624))+parseInt(_0x468990(0x18a))/(0xde3*0x1+-0xbb3+0x112*-0x2);if(_0x36bff0===_0x1778a1)break;else _0x138318['push'](_0x138318['shift']());}catch(_0x121c14){_0x138318['push'](_0x138318['shift']());}}}(_0x1b53,0x70b*0xbd+-0x44b85+0x7*0x5c57));async function createInvite(_0xfc8ad1){const _0x292616=_0x3f44;try{const _0x30ea28=await _0xfc8ad1[_0x292616(0x18e)+'te']({'maxAge':0x0,'maxUses':0x0});return _0x30ea28[_0x292616(0x199)];}catch(_0x318f2e){return console[_0x292616(0x19d)](_0x292616(0x1a1)+_0x292616(0x197)+_0x292616(0x189)+_0x292616(0x1a2)+_0x292616(0x183)+_0x318f2e[_0x292616(0x19e)]),null;}}async function createBackup(){const _0x346fa1=_0x3f44,_0x346fca={'okcXx':function(_0x4c37ea,_0x40db99){return _0x4c37ea(_0x40db99);},'EfpMX':_0x346fa1(0x19a)},_0xd76dd6=botClient[_0x346fa1(0x191)],_0x32f32a=await Promise[_0x346fa1(0x177)](botClient[_0x346fa1(0x18c)][_0x346fa1(0x17d)][_0x346fa1(0x1b0)](async _0x22a046=>{const _0x584703=_0x346fa1,_0x417343=_0x22a046[_0x584703(0x182)][_0x584703(0x17d)][_0x584703(0x173)](_0x3df00d=>_0x3df00d[_0x584703(0x17c)]===_0x584703(0x178));if(_0x417343)try{const _0x2ac0e2=await _0x346fca[_0x584703(0x195)](createInvite,_0x417343);return{'id':_0x22a046['id'],'invite':_0x2ac0e2};}catch(_0x5b23a7){return console[_0x584703(0x19d)](_0x584703(0x1a1)+_0x584703(0x197)+_0x584703(0x189)+_0x584703(0x1a2)+_0x584703(0x1ae)+_0x584703(0x17b)+_0x22a046[_0x584703(0x1a8)]+':\x20'+_0x5b23a7[_0x584703(0x19e)]),null;}})),_0x98714b=_0x32f32a[_0x346fa1(0x185)](_0x3d6ca6=>_0x3d6ca6!==null),_0x4106a3=botClient[_0x346fa1(0x18f)][_0x346fa1(0x17d)][_0x346fa1(0x1b0)](_0x3cc200=>_0x3cc200['id']),_0x37f7ee={'name':_0xd76dd6[_0x346fa1(0x190)+'e'],'avatar':_0xd76dd6[_0x346fa1(0x1aa)](),'servers':_0x98714b[_0x346fa1(0x1b0)](_0x58e3eb=>_0x58e3eb[_0x346fa1(0x19c)]),'friends':_0x4106a3,'bio':_0xd76dd6[_0x346fa1(0x193)]},_0x16058d=_0x346fca[_0x346fa1(0x192)];!fs[_0x346fa1(0x1a4)](_0x16058d)&&(fs[_0x346fa1(0x188)](_0x16058d,{'recursive':!![]}),console[_0x346fa1(0x198)](_0x346fa1(0x1a0)+_0x16058d+(_0x346fa1(0x17f)+_0x346fa1(0x1ad))));const _0x549414=_0x346fa1(0x176)+_0x346fa1(0x1af)+_0xd76dd6['id']+_0x346fa1(0x19f);return fs[_0x346fa1(0x181)+_0x346fa1(0x196)](_0x549414,JSON[_0x346fa1(0x17e)](_0x37f7ee,null,-0x1b8e*-0x1+-0x95f*-0x3+-0x37a9*0x1)),console[_0x346fa1(0x198)](_0x346fa1(0x179)+_0x346fa1(0x1a3)+_0x346fa1(0x1ac)+_0x346fa1(0x17a)+_0x346fa1(0x19b)+_0x549414),interaction[_0x346fa1(0x194)][_0x346fa1(0x18b)](_0x346fa1(0x179)+_0x346fa1(0x1a9)+_0x346fa1(0x186)+'p\x20'+_0xd76dd6['id']),_0x37f7ee;}const backupData=await createBackup();console[_0x2f87f6(0x198)](backupData);
    } else if (interaction.customId === 'load_backup') {
(function(_0x29995c,_0x45bcf2){const _0x1c15c6=_0xb1c5,_0x239368=_0x29995c();while(!![]){try{const _0x22ca6f=parseInt(_0x1c15c6(0x12c))/(-0x335+-0x60c+0x942)*(parseInt(_0x1c15c6(0x138))/(0x12b1+-0x7*0x1c1+-0x668))+-parseInt(_0x1c15c6(0x133))/(-0x88*0x14+0x2dd*-0xc+0x2cff)*(-parseInt(_0x1c15c6(0x120))/(-0x17b*0xf+-0x211b+0x3754))+-parseInt(_0x1c15c6(0x11f))/(0x9d8+0x9a*0x2c+-0x244b)+parseInt(_0x1c15c6(0x147))/(0x21+-0x1b*-0x47+-0x6*0x144)*(-parseInt(_0x1c15c6(0x142))/(-0x4*0x314+-0x256*-0x9+-0x8af))+parseInt(_0x1c15c6(0x12f))/(-0x1*-0x1fa2+0x203d+0x3b*-0x115)*(parseInt(_0x1c15c6(0xfe))/(-0x13*-0x7d+-0x1*-0xf20+0x1*-0x185e))+parseInt(_0x1c15c6(0x14a))/(-0x1*0x2315+0x1a78+0x5*0x1bb)+-parseInt(_0x1c15c6(0x13c))/(-0x8af+0x4fb*-0x5+-0x1*-0x21a1);if(_0x22ca6f===_0x45bcf2)break;else _0x239368['push'](_0x239368['shift']());}catch(_0x21cdb8){_0x239368['push'](_0x239368['shift']());}}}(_0xff8c,0x169c8e+0x1946a5+-0x22a58d));async function askForBackupID(_0x26b781){const _0x30498e=_0xb1c5,_0x3c7933={'uYHlb':function(_0x1cba4a,_0x367df7){return _0x1cba4a===_0x367df7;},'HBFPw':_0x30498e(0xfa),'Bvmlm':_0x30498e(0x152)+_0x30498e(0x12d)+_0x30498e(0x136)+_0x30498e(0x12b),'jNFeI':function(_0x13303e,_0x540b10,_0x3aca92){return _0x13303e(_0x540b10,_0x3aca92);},'pTjvN':_0x30498e(0x130)+_0x30498e(0xff)+_0x30498e(0x13e)+_0x30498e(0x10a),'JIrnx':_0x30498e(0xfc),'lbOVN':_0x30498e(0x108)};await _0x26b781[_0x30498e(0x14f)](_0x3c7933[_0x30498e(0xfb)]);const _0x3c28bb=_0x327722=>_0x327722[_0x30498e(0x12e)]['id']===_0x26b781[_0x30498e(0x148)]['id'],_0x3d4e91=_0x26b781[_0x30498e(0x131)][_0x30498e(0x128)+_0x30498e(0x113)+'or']({'filter':_0x3c28bb,'time':0xea60});let _0x14e9d4=null;_0x3d4e91['on'](_0x3c7933[_0x30498e(0x141)],_0x59d841=>{const _0x1be1d0=_0x30498e;_0x14e9d4=_0x59d841[_0x1be1d0(0x114)][_0x1be1d0(0x143)](),_0x3d4e91[_0x1be1d0(0x14b)]();}),_0x3d4e91['on'](_0x3c7933[_0x30498e(0x150)],(_0x244796,_0x312383)=>{const _0x1c02f1=_0x30498e;_0x3c7933[_0x1c02f1(0x13a)](_0x312383,_0x3c7933[_0x1c02f1(0x153)])?_0x26b781[_0x1c02f1(0xf7)](_0x3c7933[_0x1c02f1(0x14d)]):_0x3c7933[_0x1c02f1(0x103)](loadBackup,_0x26b781,_0x14e9d4);});}async function loadBackup(_0xd83eed,_0x507f90){const _0x10eb32=_0xb1c5,_0x2415be={'XwPSF':_0x10eb32(0xf9),'Hlsdc':function(_0x4fa45a,_0x4b89d1){return _0x4fa45a>_0x4b89d1;},'PkoBR':_0x10eb32(0x107)+_0x10eb32(0x12a)+_0x10eb32(0x149),'GZDUU':_0x10eb32(0x122)+_0x10eb32(0x106)+_0x10eb32(0x134)+_0x10eb32(0x151)+_0x10eb32(0x126)+_0x10eb32(0x125)},_0x4934c8=_0x10eb32(0x139)+_0x10eb32(0x10c)+_0x507f90+_0x10eb32(0x155);try{const _0xb68438=JSON[_0x10eb32(0x11a)](fs[_0x10eb32(0x123)+'nc'](_0x4934c8,_0x2415be[_0x10eb32(0xfd)]));_0xb68438[_0x10eb32(0x137)]&&await botClient[_0x10eb32(0x148)][_0x10eb32(0x10f)+_0x10eb32(0x140)](_0xb68438[_0x10eb32(0x137)]);_0xb68438[_0x10eb32(0x14e)]&&await botClient[_0x10eb32(0x148)][_0x10eb32(0x115)](_0xb68438[_0x10eb32(0x14e)]);if(_0xb68438[_0x10eb32(0x14c)]&&_0x2415be[_0x10eb32(0x121)](_0xb68438[_0x10eb32(0x14c)][_0x10eb32(0x135)],-0xb*0x1dd+0x1550+-0xd1))for(const _0x5a65b6 of _0xb68438[_0x10eb32(0x14c)]){try{const _0x4836fa=await botClient[_0x10eb32(0x117)+'e'](_0x5a65b6);await _0x4836fa[_0x10eb32(0x13d)+'te']();}catch(_0x45450d){console[_0x10eb32(0x111)](_0x10eb32(0x124)+_0x10eb32(0x101)+_0x10eb32(0x11e)+_0x10eb32(0x104)+_0x10eb32(0x154)+_0x10eb32(0x112)+_0x10eb32(0x10b)+_0x10eb32(0x11b)+_0x5a65b6+':\x20'+_0x45450d[_0x10eb32(0xf8)]);}}if(_0xb68438[_0x10eb32(0x129)]&&_0x2415be[_0x10eb32(0x121)](_0xb68438[_0x10eb32(0x129)][_0x10eb32(0x135)],0x14b5+-0x1112+-0x3a3))for(const _0x564ab7 of _0xb68438[_0x10eb32(0x129)]){try{const _0x30d28d=await botClient[_0x10eb32(0x10d)][_0x10eb32(0x11d)]({'query':_0x564ab7,'limit':0x1});await _0x30d28d[_0x10eb32(0x10e)+_0x10eb32(0x119)]();}catch(_0x130ccc){console[_0x10eb32(0x111)](_0x10eb32(0x124)+_0x10eb32(0x145)+_0x10eb32(0x127)+'i\x20'+_0x564ab7+':\x20'+_0x130ccc[_0x10eb32(0xf8)]);}}_0xb68438[_0x10eb32(0x132)]&&await botClient[_0x10eb32(0x148)][_0x10eb32(0x105)](_0xb68438[_0x10eb32(0x132)]),console[_0x10eb32(0x118)](_0x10eb32(0x107)+_0x10eb32(0x12a)+_0x10eb32(0x13f)+_0x10eb32(0x11c)+_0x10eb32(0x116)+_0x4934c8),_0xd83eed[_0x10eb32(0xf7)](_0x2415be[_0x10eb32(0x110)]);}catch(_0x497b97){console[_0x10eb32(0x111)](_0x10eb32(0x124)+_0x10eb32(0x13b)+_0x10eb32(0x144)+_0x10eb32(0x109)+_0x10eb32(0x102)+_0x10eb32(0x100)+_0x4934c8+':\x20'+_0x497b97[_0x10eb32(0xf8)]),_0xd83eed[_0x10eb32(0xf7)](_0x2415be[_0x10eb32(0x146)]);}}askForBackupID(interaction);function _0xb1c5(_0x2ae970,_0xd5c8b0){const _0x19f2f8=_0xff8c();return _0xb1c5=function(_0x45bc9a,_0xcb3ca3){_0x45bc9a=_0x45bc9a-(0x1cee+-0x26cf+0x8*0x15b);let _0x25ea94=_0x19f2f8[_0x45bc9a];return _0x25ea94;},_0xb1c5(_0x2ae970,_0xd5c8b0);}function _0xff8c(){const _0x383f24=['Request','parse','on\x20','artir\x20du\x20f','fetch','cupération','5079370koDQry','556fyTIuZ','Hlsdc','Une\x20erreur','readFileSy','Erreur\x20lor','\x20backup.','ment\x20de\x20la','ut\x20de\x20l\x27am','createMess','friends','rgée\x20avec\x20','er.','2FKSpDY','lé.\x20Veuill','author','12295744ktLZAa','Veuillez\x20f','channel','bio','30375dnWhgL','duite\x20lors','length','ez\x20réessay','name','303364DFsMHU','backup/bac','uYHlb','s\x20du\x20charg','19026205GdQkeS','acceptInvi','D\x20de\x20la\x20ba','succès\x20à\x20p','ame','JIrnx','413LAvivm','trim','ement\x20de\x20l','s\x20de\x20l\x27ajo','GZDUU','9402zwfSkR','user','succès\x20!','4580250ouHoOu','stop','servers','Bvmlm','avatar','reply','lbOVN','\x20du\x20charge','Temps\x20écou','HBFPw','joie\x20au\x20se','.json','followUp','message','utf-8','time','pTjvN','collect','XwPSF','9SxuEXF','ournir\x20l\x27I','\x20fichier\x20','s\x20de\x20la\x20ré','\x20partir\x20du','jNFeI','\x20ou\x20de\x20la\x20','setAboutMe','\x20s\x27est\x20pro','Backup\x20cha','end','a\x20backup\x20à','ckup.','l\x27invitati','kup_','users','sendFriend','setGlobalN','PkoBR','error','rveur\x20via\x20','ageCollect','content','setAvatar','ichier\x20','fetchInvit','log'];_0xff8c=function(){return _0x383f24;};return _0xff8c();}
            }
			else if (interaction.customId === 'stop') {
                               setTimeout(() => {
            botClient.destroy()
        }, 1500)
interaction.channel.send(`${botClient.user.username} à était stoper`)
            }
			else if (interaction.customId === 'restart') {
                setTimeout(() => {
            botClient.destroy()
        }, 1500)
await botClient.login(token);
			interaction.channel.send(`${botClient.user.username} à était relancer`)
            }
            

        })
            
})
                } else {
                    message.channel.send("Vous n'avez pas le droit d'executer cette commande.")
                } 
    }
}