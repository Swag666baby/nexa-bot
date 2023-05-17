const comandosNsfw = ["/hentai","/yuri","/yaoi","/bdsm"]

function deleteImage(sock, jid, image){
    setTimeout(() => {
        sock.sendMessage(jid, { delete: image.key })
    }, 15000)
}

async function nsfwNexa(nsfwGrupo, message, sock, jid, msg){
    
    if(nsfwGrupo){
        if(message == "/hentai"){
	        const image = await sock.sendMessage(jid, {image: {url: "https://nsfw-api-5xza.onrender.com/hentai"}, mimetype: 'image/jpeg' , caption: 'virgin god🧸'},{quoted:msg })
	        deleteImage(sock, jid, image)
        }
        if(message == "/yuri"){
	        const image = await sock.sendMessage(jid, {image: {url: "https://nsfw-api-5xza.onrender.com/yuri"}, mimetype: 'image/jpeg' , caption: 'virgin god🧸'},{quoted:msg })
	        deleteImage(sock, jid, image)
        }
        if(message == "/bdsm"){
	        const image = await sock.sendMessage(jid, {image: {url: "https://nsfw-api-5xza.onrender.com/bdsm"}, mimetype: 'image/jpeg' , caption: 'virgin god🧸'},{quoted:msg })
	        deleteImage(sock, jid, image)
        }
        if(message == "/yaoi"){
	        const image = await sock.sendMessage(jid, {image: {url: "https://nsfw-api-5xza.onrender.com/yaoi"}, mimetype: 'image/jpeg' , caption: 'virgin god🧸'},{quoted:msg })
	        deleteImage(sock, jid, image)
	    }
        if(message == "/trap"){
	        const image = await sock.sendMessage(jid, {image: {url: "https://nsfw-api-5xza.onrender.com/trap"}, mimetype: 'image/jpeg' , caption: 'virgin god🧸'},{quoted:msg })
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