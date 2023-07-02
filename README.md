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

| Comando | Descrição | Exemplo |
|---------|-----------|---------|
| /menu   | Exibe a lista de comandos disponíveis. | `/menu`|
| /fecharg | Fecha um grupo. | `/fecharg` |
| /abrirg | Abre um grupo. | `/abrirg` |
| /promover | Promove um usuário a administrador. | `/promover *marcando a mensagem de usuario*` |
| /rebaixar | Rebaixa um usuário de administrador. | `/rebaixar *marcando a mensagem de usuario*` |
| /add | Adiciona um número de telefone ao grupo. | `/add +55123456789` |
| /ban | Bane um usuário do grupo. | `/ban *marcando a mensagem de usuario*` |
| /descg | Define a descrição do grupo. | `/descg Nova descrição` |
| /nomeg | Define o nome do grupo. | `/nomeg Novo nome` |
| /nivel | Exibe os dados do usuário. | `/nivel` |
| /roleta | Realiza uma rodada de roleta. | `/roleta 10` |
| /agiotar | Agiota uma quantia para o usuário. | `/agiotar 100 *marcando a mensagem de usuario*` |
| /roletarussa | Joga uma partida de roleta russa. | `/roletarussa` |
| /doar | Faz uma doação para outro usuário. | `/doar 50` |
| /investigar | Inicia uma investigação em um usuário. | `/investigar *marcando a mensagem de usuario*` |
| /loteria | Realiza um sorteio de loteria. | `/loteria 1 8` |
| /dc | pede uma dica para o jogo. | `/dc dica` |
| /dc | chuta a possivel palavra. | `/dc banana` |
| /dc | troca a palavra. | `/dc restart` |
| /bingo | Inicia uma partida de bingo. | `/bingo 7` |
| /cacaniquel | Joga no caça-níquel. | `/cacaniquel` |
| /ranking | Exibe o ranking dos usuários. | `/ranking` |
| /hentai | Envia uma imagem de conteúdo hentai. | `/hentai` |
| /yaoi | Envia uma imagem de conteúdo yaoi. | `/yaoi` |
| /yuri | Envia uma imagem de conteúdo yuri. | `/yuri` |
| /trap | Envia uma imagem de conteúdo trap. | `/trap` |
| /bdsm | Envia uma imagem de conteúdo BDSM. | `/bdsm` |
| /ytsearch | Realiza uma pesquisa de vídeo no YouTube. | `/ytsearch gatos engraçados` |
| /imgsearch | Realiza uma pesquisa de imagens. | `/imgsearch cachorros fofinhos` |
| /playmp3 | Reproduz um trecho de uma música. | `/playmp3 nome-da-musica` |
| /nexaimg | gera uma imagem com inteligência artificial. | `/nexaimg cachorro branco` |
| /antilink | Ativa ou desativa o recurso de anti-link. | `/antilink on` |
| /nsfw | Ativa ou desativa o modo NSFW. | `/nsfw on` |
| /cassino | Ativa ou desativa o recurso de cassino. | `/cassino off` |
| /sticker | Converte uma foto em adesivo. | `/sticker` |
| /give | Adiciona uma quantidade de experiência a um usuário. | `/give 50 | /dc | pede uma dica para o jogo. | `/dc dica` |` |
| /setxp | Define a quantidade de experiência de um usuário. | `/setxp 100 | /dc | pede uma dica para o jogo. | `/dc dica` |` |
| /deleteuser | Exclui um usuário do sistema. | `/deleteuser +55123456789` |


# bugs
I've been programming nexa for a long time to get some bugs out and stuff like that, but occasionally I make changes to the code and maybe I don't find all the bugs. If you find any errors, bugs or simply want to make a compliment, complaint or question, open an issue and I'll be happy to answer. 
