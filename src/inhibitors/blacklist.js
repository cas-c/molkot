const { Inhibitor } = require('discord-akairo');

class Blacklist extends Inhibitor {
	constructor() {
		super('blacklist', {
			reason: 'blacklist'
		});
	}

	exec(message) {
	    return message.channel.id !== '226448339250446336';
	}
}

module.exports = Blacklist;
