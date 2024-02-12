const { Client, Intents, Collection } = require('discord.js')
const fs = require('fs')
const antiCrash = require('discord-anticrash')
const { Webhook } = require('discord-webhook-node');

class Manager extends Client {
    constructor(options = {intents: 131071}) {
        super(options);
        this.commands = new Collection()
        this.aliases = new Collection()
        this.config = require('../../config')
		this.color = require('../../color')
		this.tokens = this.config.tokens
        this.logs = new Webhook(this.config.logs)
        this.Commands()
        this.Events()
		this.login(this.config.token)
    }

    Commands() {
        const subFolders = fs.readdirSync('./cmd')
        for (const category of subFolders) {
            const commandsFiles = fs.readdirSync(`./cmd/${category}`).filter(file => file.endsWith('.js'))
            for (const commandFile of commandsFiles) {
                const command = require(`../../cmd/${category}/${commandFile}`)
                this.commands.set(command.name, command)
                if (command.aliases && command.aliases.length > 0) {
                    command.aliases.forEach(alias => this.aliases.set(alias, command))
                }
            }
        }
    }

    Events() {
        const subFolders = fs.readdirSync(`./events`)
        for (const category of subFolders) {
            const eventsFiles = fs.readdirSync(`./events/${category}`).filter(file => file.endsWith(".js"))
            for (const eventFile of eventsFiles) {
                const event = require(`../../events/${category}/${eventFile}`)
                this.on(event.name, (...args) => event.run(this, ...args))
                if (category === 'anticrash') process.on(event.name, (...args) => event.run(this, ...args))
            }
        }
    }
}

exports.manager = Manager