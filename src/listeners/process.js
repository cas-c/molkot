const { Listener } = require('discord-akairo');

class Process extends Listener {
	constructor() {
		super('unhandledRejection', {
    		emitter: 'process',
    		eventName: 'unhandledRejection'
		});
	}

	exec(error) {
    	console.error(error);
	}
}

module.exports = Process;
