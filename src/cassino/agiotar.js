function agiotarXp(message, dadosUsuario, fs, numeroUsuario, sock, jid, msg, dadosUsuarioMarcado, usuarioMarcado){
     if(message?.startsWith("/agiotar ")){
         const valorDoacao = Number(message.replace(/[^0-9]/g, ""))
         if(dadosUsuario.xp > valorDoacao){
             dadosUsuario.xp -= valorDoacao 
             fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(dadosUsuario))
             sock.sendMessage(jid, {text: `agiotagem realizada com sucesso!`}, {quoted:msg})
             dadosUsuarioMarcado.xp += valorDoacao 
             fs.writeFileSync(`./data-base/users/${usuarioMarcado}.json`, JSON.stringify(dadosUsuarioMarcado))
             console.log("feito")
             setTimeout(() =>{
                 const reloadUser = JSON.parse(fs.readFileSync(`./data-base/users/${numeroUsuario}.json`))
                 const reloadUserM = JSON.parse(fs.readFileSync(`./data-base/users/${usuarioMarcado}.json`))
                 reloadUser.xp += valorDoacao 
                 fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(reloadUser))
                 sock.sendMessage(jid, {text: `agiotagem retornada com sucesso!`}, {quoted:msg})
                 reloadUserM.xp -= valorDoacao 
                 fs.writeFileSync(`./data-base/users/${usuarioMarcado}.json`, JSON.stringify(reloadUserM))
             }, 30000)
         }else{
             sock.sendMessage(jid, {text: "você não tem xp suficiente para agiotar. "}, {quoted:msg})
         }
     }
}
module.exports = agiotarXp;