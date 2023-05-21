async function youtubeSearch(message, YTB, sock, jid, msg, babytube){
    if(message?.startsWith("/ytsearch ")){
        const ytsearch = message.substr(10)
    	const data = await YTB.search(ytsearch, { limit: 1 });
        sock.sendMessage(jid, {image: {url: `${data[0].thumbnail.url}`}, mimetype: 'image/jpeg' , caption: `◆◇ titulo: ${data[0].title}\n◆◇ canal: ${data[0].channel.name}\n◆◇ publicacao: ${data[0].uploadedAt}\n◆◇ url: https://www.youtube.com/watch?v=${data[0].id}\n◆◇ duracao: ${data[0].durationFormatted}`},{quoted:msg })
    }
    
    if(message?.startsWith("/playmp3 ")){
        const ytsearch = message.substr(9);
        const data = await YTB.search(ytsearch, { limit: 1 });
        sock.sendMessage(jid, {image: {url: `${data[0].thumbnail.url}`}, mimetype: 'image/jpeg' , caption: `◆◇ musica: ${data[0].title}\n◆◇ canal: ${data[0].channel.name}\n◆◇ publicacao: ${data[0].uploadedAt}\n◆◇ duracao: ${data[0].durationFormatted}`},{quoted:msg })
        babytube.musicDownload(`https://www.youtube.com/watch?v=${data[0].id}`, "./data-base/media/audios/music.mp3").on('finish', () => 
            sock.sendMessage( jid, { audio: { url: `./data-base/media/audios/music.mp3` }, mimetype: 'audio/mp4' , caption: `voce `})
        )
    }
}
module.exports = youtubeSearch;