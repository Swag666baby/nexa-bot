async function sticker(legendaFoto, downloadMediaMessage, msg, logger, sock, fs, exec, jid, msg, fs){
    if(legendaFoto == "/sticker"){
        const buffer = await downloadMediaMessage(msg, 'buffer', { }, { logger, reuploadRequest: sock.updateMediaMessage})
        await fs.writeFileSync('./data-base/media/sticker/sticker.png', buffer)
        await exec('cwebp -q 80 ./data-base/media/sticker/sticker.png -o ./data-base/media/sticker/sticker.webp');
        sock.sendMessage(jid, {text: "criando figurinha..."}, {quoted:msg})
        setTimeout(() => {
        	if(fs.existsSync("./data-base/media/sticker/sticker.webp")){
                sock.sendMessage( jid, { sticker: { url: `./data-base/media/sticker/sticker.webp` }, mimetype: 'image/webp' , caption: `voce `}, { pack: 'meu-pacote', author: 'meu-nome', quoted:msg })
            }
        }, 5000);
    }
}

module.exports = sticker;