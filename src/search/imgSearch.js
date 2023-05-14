
async function imgSearch(message, gis, sock, jid, msg) {
    if(message?.startsWith("/imgsearch ")){
        const image = message.substr(11)
        gis(image, logResults);
        function logResults(error, results) {
            if (error) {
               sock.sendMessage(jid, {text: "imagem nao encontrada"}, {quoted:msg})
            }
            else {
                sock.sendMessage(jid, {image: {url: `${results[0]?.url}`}, mimetype: 'image/jpeg' , caption: `principal resultado para ${image}`},{quoted:msg }).catch ( err => sock.sendMessage(jid, {text: "erro ao pesquisar imagem"}, {quoted:msg}))
            }
        }
    }
}
module.exports = imgSearch;