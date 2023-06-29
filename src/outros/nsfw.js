const comandosNsfw = ["/hentai","/yuri","/yaoi","/bdsm"]

function deleteImage(sock, jid, image){
    setTimeout(() => {
        sock.sendMessage(jid, { delete: image.key })
    }, 15000)
}

async function nsfwNexa(nsfwGrupo, message, sock, jid, msg){
    
    if(nsfwGrupo){
        const url = "https://nsfw-api-p302.onrender.com/"
        if(message == "/hentai"){
	        const image = await sock.sendMessage(jid, {image: {url: `${url}hentai`}, mimetype: 'image/jpeg' , caption: 'virgin god🧸'},{quoted:msg })
	        deleteImage(sock, jid, image)
        }
        if(message == "/yuri"){
	        const image = await sock.sendMessage(jid, {image: {url: `${url}yuri`}, mimetype: 'image/jpeg' , caption: 'virgin god🧸'},{quoted:msg })
	        deleteImage(sock, jid, image)
        }
        if(message == "/bdsm"){
	        const image = await sock.sendMessage(jid, {image: {url: `${url}bdsm`}, mimetype: 'image/jpeg' , caption: 'virgin god🧸'},{quoted:msg })
	        deleteImage(sock, jid, image)
        }
        if(message == "/yaoi"){
	        const image = await sock.sendMessage(jid, {image: {url: `${url}yaoi`}, mimetype: 'image/jpeg' , caption: 'virgin god🧸'},{quoted:msg })
	        deleteImage(sock, jid, image)
	    }
        if(message == "/trap"){
	        const image = await sock.sendMessage(jid, {image: {url: `${url}trap`}, mimetype: 'image/jpeg' , caption: 'virgin god🧸'},{quoted:msg })
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