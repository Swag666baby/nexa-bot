const comandosCassino = ["/nivel","/roleta","/roletarussa ","/doar","/investigar","/loteria","/dc","/bingo","/cacaniquel","/ranking"]
async function rankingXp(cassinoGrupo, message, path, _, sock, jid, msg, exec){
    const fs = require('fs/promises');
    if(cassinoGrupo && message == "/ranking"){
            try {
                const diretorio = path.join(__dirname, '../../data-base/users');
                const arquivos = await fs.readdir(diretorio);
    
                const objetos = await Promise.all(
                    arquivos.map(async arquivo => {
                        const caminhoArquivo = path.join(diretorio, arquivo);
                        const conteudo = await fs.readFile(caminhoArquivo, 'utf-8');
                        return JSON.parse(conteudo);
                    })
                );
    
                const ranking = objetos.sort((obj1, obj2) => obj2.xp - obj1.xp);
                const listaOrdenada = _.orderBy(ranking, [], ['desc']);
                let each
                listaOrdenada.forEach((item, index) => {
                    const posicao = index + 1;
                    if(posicao < 11 && item.xp > 1500 ){
                        each += `${posicao}º \n*◆◇ NOME:* ${item.nome}\n*◆◇ XP:* ${item.xp}\n*◆◇ PATENTE:* \`\`\`${item.patente}\`\`\`\n`
                    }
                });
                sock.sendMessage(jid, {text: `${each}`. replace(/undefined/g,"")}, {quoted:msg})
            } catch (error) {
                console.error(error);
        }
    }
    for(comando of comandosCassino){
        if(message?.startsWith(comando) && !cassinoGrupo){
            sock.sendMessage(jid, {text: `cassino esta desativado aqui, caso for admin me envie o comando "/cassino on" ou peça algum administrador para fazer isso.`}, {quoted:msg})
        }
    }
}

module.exports = rankingXp;