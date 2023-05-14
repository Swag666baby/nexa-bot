function deleteUser(message, numeroUsuario, euDev, fs, sock, jid, msg){
    if(message?.startsWith("/deleteuser") && numeroUsuario == euDev){
        const unlinkUser = message.substr(12)
        fs.unlink(`./data-base/users/${unlinkUser}.json`, (err) => {
            if (err) sock.sendMessage(jid, {text: "usuário nao encontrado"}, {quoted:msg})
            sock.sendMessage(jid, {text: "usuário excluido com sucesso!"}, {quoted:msg})
        });
    }
}
module.exports = deleteUser;