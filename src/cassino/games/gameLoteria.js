function gameLoteria(cassinoGrupo, message, fs, dadosUsuario, sock, jid, msg, numeroUsuario){
    
    if(cassinoGrupo && message?.startsWith("/loteria ")){
        const loteria = message.split(" ",3)
        const randomLoteria01 = Math.floor(Math.random() * 11);
        const randomLoteria02 = Math.floor(Math.random() * 11);
        const valL = JSON.parse(fs.readFileSync(`./data-base/games/loteria/valorLoteria.json`, 'utf8'))
        
        if(dadosUsuario.xp > 3999){
            if(randomLoteria01 === Number(loteria[1]) && randomLoteria02 === Number(loteria[2]) || randomLoteria01 === Number(loteria[2]) && randomLoteria02 === Number(loteria[1])){
                dadosUsuario.xp = dadosUsuario.xp + valL.valorLoteria
                sock.sendMessage(jid, {text: `parabens, voce acertou os numeros da loteria e ganhou ${valL.valorLoteria}! 🎲`}, {quoted:msg})
                valL.valorLoteria = 85000
                fs.writeFileSync(`./data-base/games/loteria/valorLoteria.json`, JSON.stringify(valL))
                fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(dadosUsuario))
            }else{
                valL.valorLoteria += 2800
                dadosUsuario.xp -= 4000
                fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(dadosUsuario))
                fs.writeFileSync(`./data-base/games/loteria/valorLoteria.json`, JSON.stringify(valL))
                sock.sendMessage(jid, {text: `voce perdeu! os numeros eram ${randomLoteria01} e ${randomLoteria02}.\n o valor do prêmio subiu para ${valL.valorLoteria}` }, {quoted:msg})
            }
        }else{
            sock.sendMessage(jid, {text: "erro! voce nao possui xp suficiente. necessario 4000"}, {quoted:msg})
        }
    }
}
  module.exports = gameLoteria;