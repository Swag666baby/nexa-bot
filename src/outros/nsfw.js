/*
gerando um numero aleatorio para encaixa com o nome da imagem 
existem formas melhores de se randomizar um arquivo mas achei essa a mais simples
*/    
const comandosNsfw = ["/hentai","/yuri","/yaoi","/bdsm"]

function deleteImage(sock, jid, image){
    setTimeout(() => {
        sock.sendMessage(jid, { delete: image.key })
    }, 15000)
}

async function nsfwNexa(nsfwGrupo, message, sock, jid, msg){
    const nsfwHentai = Math.floor(Math.random() * 38);
    const nsfwYaoi = Math.floor(Math.random() * 50);
    const nsfwYuri = Math.floor(Math.random() * 72);
    const nsfwBdsm = Math.floor(Math.random() * 59);
    
    if(nsfwGrupo){
        if(message == "/hentai"){
	        const image = await sock.sendMessage(jid, {image: {url: `./data-base/media/nsfw/hentai/${nsfwHentai}.jpg`}, mimetype: 'image/jpeg' , caption: 'virgin god🧸'},{quoted:msg })
	        deleteImage(sock, jid, image)
        }
        if(message == "/yuri"){
	        const image = await sock.sendMessage(jid, {image: {url: `./data-base/media/nsfw/yuri/${nsfwYuri}.jpg`}, mimetype: 'image/jpeg' , caption: 'virgin god🧸'},{quoted:msg })
	        deleteImage(sock, jid, image)
        }
        if(message == "/bdsm"){
	        const image = await sock.sendMessage(jid, {image: {url: `./data-base/media/nsfw/bdsm/${nsfwBdsm}.jpg`}, mimetype: 'image/jpeg' , caption: 'virgin god🧸'},{quoted:msg })
	        deleteImage(sock, jid, image)
        }
        if(message == "/yaoi"){
	        const image = await sock.sendMessage(jid, {image: {url: `./data-base/media/nsfw/yaoi/${nsfwYaoi}.jpg`}, mimetype: 'image/jpeg' , caption: 'virgin god🧸'},{quoted:msg })
	        deleteImage(sock, jid, image)
        }
    }else{
        for(const comando of comandosNsfw){
            if(message?.startsWith(comando)){
                sock.sendMessage(jid, {text: `nsfw esta desativado aqui, caso for admin me envie o comando "/nsfw on" ou peça algum administrador para fazer isso.`}, {quoted:msg})
            }
        }
    }
}
module.exports = nsfwNexa