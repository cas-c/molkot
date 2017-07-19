const { AkairoClient } = require('discord-akairo');

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

client.login('MzM2NzQ5Nzk0NDYwNjk2NTgw.DE82Mw.oHDvjmgQomoKndhpVe6m0_yf6Z8').then(() => {
    console.log('Started up!');
});
