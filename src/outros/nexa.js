async function nexa(message, sock, jid, msg, process, axios, gtts, fs){
    if(message?.startsWith("Nexa")){
        const rpc = message?.replace(/"/g,`'`);
        const searchia = rpc.substr(5)
        sock.sendMessage(jid, {text: "processando... aguarde alguns segundos"}, {quoted:msg})
        try{
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            };
            const data = {
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": searchia}],
                "temperature": 0.7
            };
            const response = await axios.post('https://api.openai.com/v1/chat/completions', data, {headers})
            const respostaFiltrada = response.data?.choices[0]?.message?.content
            
            //resposta em audio
            async function convertTextToAudio() {
                const a = new gtts(respostaFiltrada, 'pt-br').save('./data-base/media/audios/nexa.mp3')
            }
            convertTextToAudio();
            setTimeout(() => {
                sock.sendMessage( jid, { audio: { url: `./data-base/media/audios/nexa.mp3` }, mimetype: 'audio/mp4' , caption: `voce `}, {quoted: msg}).catch(err => sock.sendMessage(jid, {text: "erro ao criar audio."}, {quoted:msg}))
            }, 5000);
            sock.sendMessage(jid, {text: respostaFiltrada}, {quoted:msg}).catch(err => console.log("erro"))
        }catch{
            sock.sendMessage(jid, {text: "Desculpe, não entendi a pergunta. Poderia reformulá-la, por favor?"}, {quoted:msg})
        }
    }
    if(message?.startsWith("/nexaimg ")){
        const nexaImg = message.substr(9);
        sock.sendMessage(jid, {text: "gerando imagem..."}, {quoted:msg})
        try{
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            };
            const data = {
                "prompt": nexaImg,
                "n": 1,
                "size": "512x512"
            };
            const response = await axios.post('https://api.openai.com/v1/images/generations', data, {headers})
            sock.sendMessage(jid, {image: {url: `${response.data.data[0].url}`}, mimetype: 'image/jpeg' , caption: `imagem gerada com base em: ${nexaImg}.`},{quoted:msg }).catch ( err => sock.sendMessage(jid, {text: "erro ao gerar imagem"}, {quoted:msg}))
        }catch{
            sock.sendMessage(jid, {text: "erro ao gerar imagem!"}, {quoted:msg})
        }
    }
}

module.exports = nexa;