function doarXp(message, dadosUsuario, fs, numeroUsuario, sock, jid, msg, dadosUsuarioMarcado, usuarioMarcado){
     if(message?.startsWith("/doar ")){
         const valorDoacao = Number(message.replace(/[^0-9]/g, ""))
         if(dadosUsuario.xp > valorDoacao){
             dadosUsuario.xp -= valorDoacao 
             fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(dadosUsuario))
             sock.sendMessage(jid, {text: `doacao realizada com sucesso!`}, {quoted:msg})
             dadosUsuarioMarcado.xp += valorDoacao 
             fs.writeFileSync(`./data-base/users/${usuarioMarcado}.json`, JSON.stringify(dadosUsuarioMarcado))
         }else{
             sock.sendMessage(jid, {text: "você não tem xp suficiente. "}, {quoted:msg})
         }
     }
}
module.exports = doarXp;