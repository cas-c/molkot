const { Command } = require('discord-akairo');
const { safeSearch, safeResults } = require('../helpers/booru');

class Booru extends Command {
	constructor() {
		super('booru', {
		    aliases: ['booru'],
		    args: [
		        {
		            id: 'query',
		            match: 'text'
		        }
		    ],
		});
	}

	exec(message, args) {
        safeSearch(args.query.replace('+','%2B').replace(' ', '+'))
            .then(result => safeResults(result, message), err => {
                console.log(err);
            });
	}
}


module.exports = Booru;