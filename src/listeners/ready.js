const { Listener } = require('discord-akairo');

class Ready extends Listener {
	constructor() {
		super('ready', {
    		emitter: 'client',
    		eventName: 'ready'
		});
	}

	exec() {
    	console.log('I\'m ready!');
	}
}

module.exports = Ready;
