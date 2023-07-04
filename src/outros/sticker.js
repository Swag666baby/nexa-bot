async function sticker(legendaFoto, downloadMediaMessage, msg, logger, sock, fs, sharp, jid, msg, fs){
    if(legendaFoto == "/sticker"){
        const buffer = await downloadMediaMessage(msg, 'buffer', { }, { logger, reuploadRequest: sock.updateMediaMessage})
        await fs.writeFileSync('./data-base/media/sticker/sticker.png', buffer)
        sharp('./data-base/media/sticker/sticker.png').webp().toFile('./data-base/media/sticker/sticker.webp').then(() => console.log('Imagem convertida com sucesso!')).catch((err) => console.error(err));
        sock.sendMessage(jid, {text: "criando figurinha..."}, {quoted:msg})
        setTimeout(() => {
        	if(fs.existsSync("./data-base/media/sticker/sticker.webp")){
                sock.sendMessage( jid, { sticker: { url: `./data-base/media/sticker/sticker.webp` }, mimetype: 'image/webp' , caption: `psc`}, { quoted:msg })
            }
        }, 5000);
    }
}

module.exports = sticker;