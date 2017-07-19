const { AkairoClient } = require('discord-akairo');
const config = require('./config');

const client = new AkairoClient({
    ownerID: '120358504824307716',
    prefix: '$',
    emitters: {
    	process
    },
    commandDirectory: './src/commands/',
    inhibitorDirectory: './src/inhibitors/',
    listenerDirectory: './src/listeners/'
});

client.login(config.token).then(() => {
    console.log('Started up!');
});
