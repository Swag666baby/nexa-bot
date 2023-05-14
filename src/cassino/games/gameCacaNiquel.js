function gameCacaNiquel(cassinoGrupo, message, dadosUsuario, fs, numeroUsuario, sock, jid, msg){
    
    const cacaNiquelRandom01 = Math.floor(Math.random() * 5);
    const cacaNiquelRandom02 = Math.floor(Math.random() * 5);
    const cacaNiquelRandom03 = Math.floor(Math.random() * 5);
    const emojis = ["🍒", "🍉", "⚡", "🍋", "🍍"]
    
    if(cassinoGrupo == true && message == "/cacaniquel"){
        if(dadosUsuario.xp > 999){
            if(emojis[cacaNiquelRandom01] == emojis[cacaNiquelRandom02] && emojis[cacaNiquelRandom02] == emojis[cacaNiquelRandom03]){
                dadosUsuario.xp += 85000
                fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(dadosUsuario))
                sock.sendMessage(jid, {text: `『${emojis[cacaNiquelRandom01]}${emojis[cacaNiquelRandom02]}${emojis[cacaNiquelRandom03]}』\nvoce ganhou!`}, {quoted:msg})
            }else{
                dadosUsuario.xp -= 1000
                fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(dadosUsuario))
                sock.sendMessage(jid, {text: `『${emojis[cacaNiquelRandom01]}${emojis[cacaNiquelRandom02]}${emojis[cacaNiquelRandom03]}』\nvoce perdeu!`}, {quoted:msg})
            }
        }else{
            sock.sendMessage(jid, {text: "voce nao possui xp suficiente! necessario 1000"}, {quoted:msg})
        }
    }
}
module.exports = gameCacaNiquel;