const { Command } = require('discord-akairo');

class Reload extends Command {
	constructor() {
		super('reload', {
		    aliases: ['reload'],
		    args: [
		        {
		            id: 'commandID'
		        }
		    ],
		    ownerOnly: true,
    	category: 'owner'
		});
	}

	exec(message, args) {
    	this.handler.reload(args.commandID);
    	return message.reply(`Reloaded command ${args.commandID}!`);
	}
}


module.exports = Reload;