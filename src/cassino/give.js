const comandosDev= ["/deleteuser","/give","/setxp"]
function giveXp(message, numeroUsuario, euDev, dadosUsuario, fs, sock, jid, msg, dadosUsuarioMarcado, usuarioMarcado){
    if(message?.startsWith("/give")&& numeroUsuario == euDev){
        const valorGive = Number(message.replace(/[^0-9]/g, ""))
        dadosUsuario.xp += valorGive
        fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(dadosUsuario))
        sock.sendMessage(jid, {text: `${valorGive} xp's recebidos com sucesso!`}, {quoted:msg})
    }
    if(message?.startsWith("/setxp")&& numeroUsuario == euDev){
        const valorGive = Number(message.replace(/[^0-9]/g, ""))
        dadosUsuarioMarcado.xp += valorGive
        fs.writeFileSync(`./data-base/users/${usuarioMarcado}.json`, JSON.stringify(dadosUsuarioMarcado))
        sock.sendMessage(jid, {text: `${valorGive} xp's enviados com sucesso!`}, {quoted:msg})
    }else{
        for(comando of comandosDev){
            if(message?.startsWith(comando) && numeroUsuario != euDev){
                sock.sendMessage(jid, {text: `comando exclusivo para o meu desenvolvedor. `}, {quoted:msg})
            }
        }
    }
}
module.exports = giveXp;