function actions(action, sock, jid, actionMember, groupName){
    if(action == 27){
        sock.sendMessage(jid, {text: ` @${actionMember[0]}, bem vindo ao grupo ${groupName}!\n para ver meu menu de comandos: /menu 🧸`.replace("@s.whatsapp.net",""), mentions:[actionMember]});
	}
    if(action == 28){
        sock.sendMessage(jid, {text: ` o membro @${actionMember[0]}, foi removido do grupo ${groupName}`.replace("@s.whatsapp.net",""), mentions:[actionMember]});
	}
	if(action == 32){
        sock.sendMessage(jid, {text: ` o membro @${actionMember[0]}, saiu do grupo ${groupName}`.replace("@s.whatsapp.net",""), mentions:[actionMember]});
	}
}
module.exports = actions;