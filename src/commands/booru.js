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
        safeSearch(args.query.replace(/\+/g,'%2B').replace(/\&/g, '%26').replace(/ /g, '+'))
            .then(result => safeResults(result, message, args.query), err => {
                console.log(err);
            });
	}
}


module.exports = Booru;