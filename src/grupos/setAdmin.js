const comandosAdmins = ["/add", "/ban","/descg","/nomeg","/promover","/rebaixar","/abrirg","/fecharg","/antilink","/nsfw","/cassino"]

function setAdmin(admin, nexaAdmin, message, marcado, usuarioMarcado, sock, jid, msg, groupName, nameUser, nexaAdmin){
    if(admin && nexaAdmin){
	    if (message == "/add") {
            sock.groupParticipantsUpdate(jid, [marcado], "add");
        }
        if (message?.startsWith("/add ")) {
            const add = message.replace(/[^0-9]/g,"")
            sock.groupParticipantsUpdate(jid, [`${add}@s.whatsapp.net`], "add");
        }
        if (message == "/ban" ){
            sock.groupParticipantsUpdate(jid, [marcado], "remove");
        }
        if (message == "/rebaixar" ){
            sock.groupParticipantsUpdate(jid, [marcado], "demote");
            sock.sendMessage(jid,{text:`o @55${usuarioMarcado} nao e mais um admin!`, mentions:[marcado]}, {quoted: msg})
        }
        if (message == "/promover" ){
            sock.groupParticipantsUpdate(jid, [marcado], "promote");
            sock.sendMessage(jid,{text:`o @55${usuarioMarcado} foi promovido a admin!`, mentions:[marcado]}, {quoted: msg})
        }
        if (message == "/fecharg" ) {
            sock.groupSettingUpdate(jid, "announcement");
            sock.sendMessage(jid, { text: ` *◆◇ GRUPO:* ${groupName},\n *◆◇ ADMIN:* ${nameUser},\n fechado com sucesso!`}, {quoted:msg});
        }
        if (message == "/abrirg") {
            sock.groupSettingUpdate(jid, "not_announcement");
            sock.sendMessage(jid, { text: ` *◆◇ GRUPO:* ${groupName},\n *◆◇ ADMIN:* ${nameUser},\n aberto com sucesso!`}, {quoted:msg});
        } 
        if(message?.includes("/nomeg ")){ 
	        const novoNome = message?.substr(7);
	        sock.groupUpdateSubject(jid, novoNome)
	    }
        if(message?.startsWith("/descg ") ){
     	   const novaDescricao = message?.substr(7);
        	sock.groupUpdateDescription(jid, novaDescricao) 
        }
    }
    for(comando of comandosAdmins){
        if(message?.startsWith(comando) && !admin){
            sock.sendMessage(jid, {text: "comando exclusivo para admins."}, {quoted:msg})
        }
    }
}
module.exports = setAdmin