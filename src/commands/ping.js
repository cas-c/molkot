const { Command } = require('discord-akairo');

class Ping extends Command {
	constructor() {
		super('ping', {
			aliases: ['ping']
		});
	}

	exec(message) {
		return message.reply('pong ohhhh i reloaded this hot while the bot was runnin im epic');
	}
}

module.exports = Ping;
