function gameBingo(cassinoGrupo, message, dadosUsuario, fs, numeroUsuario, sock, jid, msg){
    const randomBingo = Math.floor(Math.random() * 11);
    if(cassinoGrupo){
        if(message?.startsWith("/bingo ")){
            const valor = message.replace(/[^0-9]/g, "")
            const valorBingo = Number(valor)
            if(dadosUsuario.xp > 2000){
                if(randomBingo == valor){
                    dadosUsuario.xp += 20000
                    fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(dadosUsuario))
                    sock.sendMessage(jid, {text: `voce acertou o numero do bingo e ganhou 20.000 xp's!`}, {quoted:msg})
                }else{
                    dadosUsuario.xp -= 2000
                    fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(dadosUsuario))
                    sock.sendMessage(jid, {text: `voce perdeu! o numero do bingo era ${randomBingo}.`}, {quoted:msg})
                }
            }else{
                sock.sendMessage(jid, {text: `voce nao possui xp suficiente! xp's necessários: 2.000`}, {quoted:msg})
            }
        }
    }
}

module.exports = gameBingo;