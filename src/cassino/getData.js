function getDados(message, sock, jid, dadosUsuario,msg, dadosUsuarioMarcado){
    if(message == "/nivel"){
        sock.sendMessage(jid, { text: ` *◆◇ NOME:* ${dadosUsuario.nome},\n *◆◇ NUMERO:* ${dadosUsuario.numero},\n *◆◇ PATENTE:* \`\`\`${dadosUsuario.patente}\`\`\`,\n *◆◇ XP:* ${dadosUsuario.xp}`}, {quoted:msg});
    }
    if(message == "/investigar"){
        sock.sendMessage(jid, { text: ` *◆◇ NOME:* ${dadosUsuarioMarcado.nome},\n *◆◇ NUMERO:* ${dadosUsuarioMarcado.numero},\n *◆◇ PATENTE:* \`\`\`${dadosUsuarioMarcado.patente}\`\`\`,\n *◆◇ XP:* ${dadosUsuarioMarcado.xp}`}, {quoted:msg});
    }
}
module.exports = getDados;