async function imgSearch(message, GOOGLE_IMG_SCRAP, sock, jid, msg) {
    if(message?.startsWith("/imgsearch ")){
        const image = message.substr(11)
        const data = await GOOGLE_IMG_SCRAP({
            search: image,
        });
        sock.sendMessage(jid, {image: {url: data.result[0].url}, mimetype: 'image/jpeg' , caption: `principal resultado para ${image}`},{quoted:msg }).catch ( err => sock.sendMessage(jid, {text: "erro ao pesquisar imagem"}, {quoted:msg}))
    }
}
module.exports = imgSearch;