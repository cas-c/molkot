const snekfetch = require('snekfetch');
const convert = require('xml-js');
const { RichEmbed } = require('discord.js');
const blacklist = require('../../config').blacklist;

module.exports = {
    safeSearch: (tags) => {
        return new Promise((resolve, reject) => {
            snekfetch.get(`https://safebooru.org/index.php?page=dapi&s=post&q=index&tags=${tags}${blacklist}`)
                .then(res => {
                    const response = convert.xml2json(res.text, { compact: true, spaces: 4 });
                    const total = parseInt(JSON.parse(response).posts._attributes.count);
                    snekfetch.get(`https://safebooru.org/index.php?page=dapi&s=post&q=index&tags=${tags}${blacklist}&pid=${Math.floor(Math.random() * total / 100)}`)
                        .then(res2 => {
                            resolve(Object.assign({}, { response: JSON.parse(convert.xml2json(res2.text, { compact: true, spaces: 4 })) }, { total }));
                        })
                        .catch(err => reject(err));
                })
                .catch(err => reject(err));
        });
    },
    safeResults: (result, message, query) => {
        const results = result.response;
        if (results.posts.post === undefined) {
            message.reply(`couldn't find anything, sorry :worried:`);
            return;
        }
        const number_of_posts = results.posts.post.length;
        let post = null;
        if (number_of_posts === undefined) {
            post = results.posts.post._attributes;
        } else {
            post = results['posts'].post[Math.floor(Math.random()*number_of_posts)]._attributes;
        }
        message.channel.send(new RichEmbed()
            .setTitle(`view source`)
            .setURL(`https://safebooru.org/index.php?page=post&s=view&id=${post.id}`)
            .setImage(`https:${post.sample_url}`)
            .setFooter(`${message.author.username} searching for ${query}.
                ${result.total} total results.`, message.author.avatarURL)
            .setDescription(post.tags.substr(0, 500).replace(/_/g, '\\_'))
            .setColor(8700043));    
    }
}
