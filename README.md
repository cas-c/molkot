# molkot

it's a rewrite of tuesday, an image search bot for #plus-plus-plus in nyanchat

## Getting Started

it's a pretty simple node / discord.js app

### Prerequisites

node 8+

### setting up your own (for dev or whatever)

```
npm install
touch config.json
```
config.json example
```json
{
	"token": "get your auth token from the discord page",
	"blacklist": "im refactoring this soon but it should be a string like '+-bad_word+-bad_word"
}
```

then just
```
node molkot.js
``` 

## acknowledgments

* [1comp](https://github.com/1Computer1)'s [akairo](https://github.com/1Computer1/discord-akairo)
