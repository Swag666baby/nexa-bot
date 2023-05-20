
function antilink(fs, message, admin, antilinkGrupo, numeroUsuario, euBot, sock, jid, numero){
    const links = JSON.parse(fs.readFileSync(`./src/grupos/links.json`, 'utf-8'))
    const hasLink = links.some(link => message?.includes(link));

    if(hasLink && !admin && antilinkGrupo && numeroUsuario != euBot){
        sock.groupParticipantsUpdate(jid, [numero], "remove");
    }
}

module.exports = antilink;
