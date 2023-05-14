function gameRoleta(cassinoGrupo, message, dadosUsuario, fs, numeroUsuario, sock, jid, msg){
    const randomRoleta = Math.floor(Math.random() * 2);
    if(cassinoGrupo == true){
        if(message?.startsWith("/roleta ")){
            const valor = message.replace(/[^0-9]/g, "")
            const valorApostado = Number(valor) 
            if(dadosUsuario.xp > valorApostado - 1 && dadosUsuario.xp > 0){
                if( randomRoleta ===1){
                    dadosUsuario.xp += valorApostado 
                    fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(dadosUsuario))
                    sock.sendMessage(jid, {text: `*◆◇ JOGADOR:* ${dadosUsuario.nome}\nganhou ${valorApostado} jogando na roleta`}, {quoted:msg})
                }else{
                    dadosUsuario.xp -= valorApostado 
                    fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(dadosUsuario))
                    sock.sendMessage(jid, {text: `*◆◇ JOGADOR:* ${dadosUsuario.nome}\nperdeu ${valorApostado} jogando na roleta`}, {quoted:msg})
                }
            }else{
                sock.sendMessage(jid, {text: "voce não possui xp's suficientes!"}, {quoted:msg})
            }
        }
    }
}
module.exports = gameRoleta;