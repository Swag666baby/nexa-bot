function gameDicionario(cassinoGrupo, message, fs, sock, jid, msg, dadosUsuario, numeroUsuario){
    if(cassinoGrupo){
        
        //variaveis necessarias
        const dicionario = message?.split(" ",3)
        const gameDc = JSON.parse(fs.readFileSync(`./data-base/games/dicionario/gameDicionario.json`, 'utf-8'))
        const palavraGame = `${gameDc.palavra}`
        const dica = palavraGame.substr(0, 3)
        const itensDc = JSON.parse(fs.readFileSync(`./data-base/games/dicionario/itens.json`, 'utf-8'))
            
        //dicas sobre a palavra alvo
        if(message?.startsWith("/dc dica")){
            sock.sendMessage(jid, {text: `◆◇ *tema:* aleatorio\n◆◇ *primeiras letras:* ${dica}\n◆◇ *numero de letras:* ${gameDc.qtdLetras}`}, {quoted:msg})
        }
           // trocar a palavra
        async function setNovaPalavra(){
            const randomFrutas = Math.floor(Math.random() * 669);
            const numeroLetras = `${itensDc[randomFrutas]}`.length 
            const palavraEscolhida= `${itensDc[randomFrutas]}`
            const novaPalavra ={"palavra": `${palavraEscolhida}`, "qtdLetras": numeroLetras, "chances":4}
            fs.writeFileSync(`./data-base/games/dicionario/gameDicionario.json`, JSON.stringify(novaPalavra))
            sock.sendMessage(jid, {text: "palavra trocada!"}, {quoted:msg})
        }
        //chutar a palavra
        if(message?.startsWith("/dc ") && !message?.startsWith("/dc restart") && !message.startsWith("/dc dica")){
            const forca = message.split(" ",2)
            if(forca[1] == gameDc.palavra){
                dadosUsuario.xp += 1850
                fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(dadosUsuario))
                sock.sendMessage(jid, {text: "voce acertou a palavra e ganhou 1.850 xp's!"}, {quoted:msg})
                setNovaPalavra();
             }else{
                 gameDc.chances -=1
                 if(gameDc.chances > 0){
                     sock.sendMessage(jid, {text: `voce errou! sobraram ${gameDc.chances} chances.`}, {quoted:msg})
                     fs.writeFileSync(`./data-base/games/dicionario/gameDicionario.json`, JSON.stringify(gameDc))
                 }else{
                     setNovaPalavra();
                 }
             }
         }
        if(message == "/dc restart"){
            setNovaPalavra();
        }
    }
}
module.exports = gameDicionario;