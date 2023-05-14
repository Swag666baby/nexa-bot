
function setDataBaseGroups(admin, message, dadosGrupo, fs, groupID, sock, jid, msg) {
    if(admin){
        if(message == '/cassino off'){
            dadosGrupo.cassino = false
            fs.writeFileSync(`./data-base/groups/${groupID}.json`, JSON.stringify(dadosGrupo))
            sock.sendMessage(jid, {text: "cassino desativado com sucesso!"}, {quoted:msg})
        }
        if(message == '/cassino on'){
            dadosGrupo.cassino = true
            fs.writeFileSync(`./data-base/groups/${groupID}.json`, JSON.stringify(dadosGrupo))
            sock.sendMessage(jid, {text: "cassino ativado com sucesso!"}, {quoted:msg})
        }
        if(message == '/nsfw off'){
            dadosGrupo.nsfw = false
            fs.writeFileSync(`./data-base/groups/${groupID}.json`, JSON.stringify(dadosGrupo))
            sock.sendMessage(jid, {text: "nsfw desativado com sucesso!"}, {quoted:msg})
        }
        if(message == '/nsfw on'){
            dadosGrupo.nsfw = true
            fs.writeFileSync(`./data-base/groups/${groupID}.json`, JSON.stringify(dadosGrupo))
            sock.sendMessage(jid, {text: "nsfw ativado com sucesso!"}, {quoted:msg})
        }
        if(message == '/antilink off'){
            dadosGrupo.antilink = false
            fs.writeFileSync(`./data-base/groups/${groupID}.json`, JSON.stringify(dadosGrupo))
            sock.sendMessage(jid, {text: "antilink desativado com sucesso!"}, {quoted:msg})
        }
        if(message == '/antilink on'){
            dadosGrupo.antilink = true
            fs.writeFileSync(`./data-base/groups/${groupID}.json`, JSON.stringify(dadosGrupo))
            sock.sendMessage(jid, {text: "antilink ativado com sucesso!"}, {quoted:msg})
        }
    }
}
module.exports = setDataBaseGroups