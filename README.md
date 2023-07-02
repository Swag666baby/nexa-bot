# nexa-bot
my simply  robot made for WhatsApp using version 4.4.0 of the baileys library.

# installation 
```
git clone https://github.com/Swag666baby/nexa-bot
cd nexa-bot
```
```
yarn add axios fs pino @adiwajshing/baileys@4.4.0 dotenv gtts g-i-s @hapi/boom lodash moment-timezone child_process path babytube youtube-sr qrcode-terminal forever
apt-get install libwebp
apt-get install python3
```
I recommend using the forever library, however it is optional. 

## running 
note: use forever only after reading the qrcode, as it does not show logs in real time but writes them to a file. 
### conventional way 
```
node index.js
```
### or if you prefer to use forever library
```
forever start --minUptime 1000 --spinSleepTime 1000 index.js
```

# to work correctly: 
*at the beginning of the index.js file change the value of the "euBot" variable to the new host number.* 

*fill in the .env file with your openai key.*

# functionalities Nexa has several interesting features, such as:

*make stickers.*

*a wide range of casino games.*

*send nsfw content*

*help with administration by banning, adding, changing the description, and the name of the group with great speed.*

*nexa is also able to search videos on YouTube, images on Google and even download music.*

*nexa also has an artificial intelligence to generate images and answer questions.*

| command | description | example | 
|---------|-----------|---------|
| /menu   | Displays the list of available commands.  | `/menu`|
| /fecharg | Closes a group.  | `/fecharg` |
| /abrirg | Opens a group.  | `/abrirg` |
| /promover | Promotes a user to an administrator.  | `/promover *marcando a mensagem de usuario*` |
| /rebaixar | Demotes a user from admin.  | `/rebaixar *marcando a mensagem de usuario*` |
| /add | Adds a phone number to the group.  | `/add +55123456789` |
| /ban | Ban a user from the group.  | `/ban *marcando a mensagem de usuario*` |
| /descg | Sets the group description.  | `/descg Nova descrição` |
| /nomeg | Defines the name of the group.  | `/nomeg Novo nome` |
| /nivel | Displays user data.  | `/nivel` |
| /roleta | Play a round of roulette.  | `/roleta 10` |
| /agiotar | Lenders an amount to the user.  | `/agiotar 100 *marcando a mensagem de usuario*` |
| /roletarussa | Play a game of Russian roulette.  | `/roletarussa` |
| /doar | Make a donation to another user.  | `/doar 50` |
| /investigar | Starts an investigation on a user.  | `/investigar *marcando a mensagem de usuario*` |
| /loteria | Performs a lottery draw.  | `/loteria 1 8` |
| /dc | asks for a tip for the game.  | `/dc dica` |
| /dc | guess the possible word.  | `/dc banana` |
| /dc | change the word.  | `/dc restart` |
| /bingo | Start a bingo game.  | `/bingo 7` |
| /cacaniquel | Play the slot machine.  | `/cacaniquel` |
| /ranking | Displays the ranking of users.  | `/ranking` |
| /hentai | Upload a hentai content image.  | `/hentai` |
| /yaoi | Upload a yaoi content image.  | `/yaoi` |
| /yuri | Sends a yuri content image.  | `/yuri` |
| /trap | Sends a trap content image.  | `/trap` |
| /bdsm | Sends a BDSM content image.  | `/bdsm` |
| /ytsearch | Performs a video search on YouTube. | `/ytsearch cute cats` |
| /imgsearch | Performs an image search.  | `/imgsearch dog sitting ` |
| /playmp3 | downloads a song.  | `/playmp3 all girls are the same` |
| /nexaimg | generates an image with artificial intelligence.  | `/nexaimg cachorro branco` |
| /antilink | enable or disable link protection | `/antilink on` |
| /nsfw | Enables or disables NSFW mode.  | `/nsfw on` |
| /cassino | Enables or disables the casino feature.  | `/cassino off` |
| /sticker | Converts a photo to a sticker.  | `/sticker` |
| /give | Adds an amount of experience to a user.  | `/give 50 | /dc | pede uma dica para o jogo. | `/dc dica` |` |
| /setxp | Sets the amount of experience a user has.  | `/setxp 100 | /dc | pede uma dica para o jogo. | `/dc dica` |` |
| /deleteuser | Deletes a user from the system.  | `/deleteuser +55123456789` |
| Nexa | conversation with artificial intelligence.  | `Nexa Olá` |


# bugs
I've been programming nexa for a long time to get some bugs out and stuff like that, but occasionally I make changes to the code and maybe I don't find all the bugs. If you find any errors, bugs or simply want to make a compliment, complaint or question, open an issue and I'll be happy to answer. 
