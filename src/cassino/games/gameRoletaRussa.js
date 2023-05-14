function gameRoletaRussa(cassinoGrupo, message, nexaAdmin, dadosUsuario, fs, numeroUsuario, sock, jid, msg, numero){
    if(cassinoGrupo){
	    const randomRoletaRussa = Math.floor(Math.random() * 3);
	    if(message == "/roletarussa" && nexaAdmin){
            if(dadosUsuario.xp > 0){
    	        if(randomRoletaRussa == 1){
                    dadosUsuario.xp = Number(dadosUsuario.xp)*3
                    fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(dadosUsuario))
                    sock.sendMessage(jid, {text: `parabens! voce triplicou seu xp e sobreviveu a roleta russa.📌`}, {quoted:msg})
                }else{
                    dadosUsuario.xp -= dadosUsuario.xp 
                    fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(dadosUsuario))
                    sock.sendMessage(jid, {text: `bang bang🔫🧸. voce ja era!`}, {quoted:msg})
                    sock.groupParticipantsUpdate(jid, [numero], "remove");
                }
            }else{
                sock.sendMessage(jid, {text: "voce nao pussui xp para ganhar ou perder. "}, {quoted:msg})
            }
        }else if(message == "/roletarussa" && !nexaAdmin){
            sock.sendMessage(jid, {text: "este comando so pode ser usado quando eu possuir admin."}, {quoted:msg})
        }
    }
}
module.exports = gameRoletaRussa