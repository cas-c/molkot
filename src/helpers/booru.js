const snekfetch = require('snekfetch');
const convert = require('xml-js');
const { RichEmbed } = require('discord.js');
const blacklist = require('../../config').blacklist;

module.exports = {
    safeSearch: (tags) => {
        return new Promise((resolve, reject) => {
            snekfetch.get(`https://safebooru.org/index.php?page=dapi&s=post&q=index&tags=${tags}${blacklist}`)
                .then(res => resolve(convert.xml2json(res.text, { compact: true, spaces: 4 })))
                .catch(err => reject(err));
        });
    },
    safeResults: (result, message) => {
        const results = JSON.parse(result);
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
        message.channel.sendEmbed(new RichEmbed()
            .setTitle(`view source`)
            .setURL(`https://safebooru.org/index.php?page=post&s=view&id=${post.id}`)
            .setImage(`https:${post.sample_url}`)
            .setFooter(`searching for ${message.author.username}`, message.author.avatarURL)
            .setDescription(post.tags.substr(0, 500).replace(/_/g, '\\_'))
            .setColor(8700043));    
    }
}