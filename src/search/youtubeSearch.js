async function youtubeSearch(message, youTube, sock, jid, msg, ytdl, fs){
    if(message?.startsWith("/ytsearch ")){
        const ytsearch = message.substr(10)
    	youTube.search(ytsearch, 2, (error, result) => {
            if (error) {
                sock.sendMessage(jid, {text: `erro! não foi possível encontrar ${ytsearch}`}, {quoted:msg})
            }else {
            console.log(JSON.stringify(result))
                 sock.sendMessage(jid, {image: {url: `${result.items[0].snippet.thumbnails.high.url}`}, mimetype: 'image/jpeg' , caption: `◆◇ titulo: ${result?.items[0]?.snippet.title}\n◆◇ canal: ${result?.items[0]?.snippet.channelTitle}\n◆◇ publicacao: ${result?.items[0]?.snippet.publishedAt}\n◆◇ url: https://youtu.be/${result?.items[0]?.id?.videoId}\n◆◇ descricao: ${result?.items[0]?.snippet.description}`},{quoted:msg })
            }
        })
    }
    if(message?.startsWith("/playmp3 ")){
        const ytsearch = message.substr(9)
    	youTube.search(ytsearch, 2, (error, result) => {
            if(error){
                sock.sendMessage(jid, {text: "erro ao fazer download da música!"}, {quoted:msg})
            }else{
                sock.sendMessage(jid, {image: {url: `${result.items[0].snippet.thumbnails.high.url}`}, mimetype: 'image/jpeg' , caption: `◆◇ *musica:* ${result?.items[0]?.snippet.title}\n◆◇ *canal:* ${result?.items[0]?.snippet.channelTitle}\n◆◇ *publicacao:* ${result?.items[0]?.snippet.publishedAt}\n\n*fazendo o download da musica...aguarde*`},{quoted:msg }) 
                function handleError(error) {
                    sock.sendMessage(jid, {text: "erro ao fazer download da música!"}, {quoted:msg})
                }
               const musica = ytdl(`https://www.youtube.com/watch?v=${result?.items[0]?.id?.videoId}`, { quality: 'lowestaudio' })
               musica.pipe(fs.createWriteStream('./data-base/media/audios/audio.mp3'))
               musica.on('error', handleError)
               musica.on('finish', () => 
                   sock.sendMessage( jid, { audio: { url: `./data-base/media/audios/audio.mp3` }, mimetype: 'audio/mp4' , caption: `voce `})
                )
            }
       });
    }
}
module.exports = youtubeSearch;