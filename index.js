const { fetchLatestBaileysVersion, default: makeWASocket, useSingleFileAuthState, DisconnectReason, MessageType, MessageOptions, Mimetype , downloadMediaMessage} = require("@adiwajshing/baileys");
const fs = require("fs")
const P = require("pino")
const axios = require("axios")
const {Boom} = require("@hapi/boom")
const gis = require('g-i-s');
const gtts = require('gtts');
const { exec } = require('child_process');
const moment = require("moment-timezone");
const _ = require('lodash');
const path = require('path');
const YTB = require("youtube-sr").default;
const babytube = require("babytube");
require('dotenv').config();

const {setGroups, actions, setAdmin, antilink} = require("./src/grupos");
const {youtubeSearch, imgSearch} = require("./src/search")
const {menu, nsfw, sticker, nexa} = require("./src/outros");
const {ranking , give, getData, doar, agiotar, setPatentes, deleteUser, registro} = require("./src/cassino");
const {gameBingo, gameRoleta, gameLoteria, gameDicionario, gameRoletaRussa, gameCacaNiquel} = require("./src/cassino/games/");

const { state } = useSingleFileAuthState("./auth_info.json");
const startSock = async () => {
    //const { version } = await fetchLatestBaileysVersion();
    const logger = P({ level: 'debug' })
    const sock = makeWASocket({
	    logger: P({ level: 'debug' }),
        version: [2,2323,4],
        printQRInTerminal: true,
        auth: state,
    });

    sock.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect } = update;
        if(connection == "close"){
            if(lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut){
                startSock();
            }else{
                console.log("connection closed");
            }
        }
        console.log("connection update", update);
    });
    sock.ev.on("messages.upsert", async (m) => {
        console.log(JSON.stringify(m, undefined, 2));
        const isGroup = m.messages[0]?.key?.remoteJid?.endsWith("@g.us");
        if(isGroup){
            
            const euDev = 6294530374
            const euBot = 6282411057
            const msg = m.messages[0];
            const jid = msg?.key?.remoteJid
            const prefix = "/";
            const action = msg?.messageStubType
            const message = msg.message?.conversation || msg.message?.extendedTextMessage?.text || msg.message?.buttonsResponseMessage?.selectedDisplayText;
            const mensagemMarcada =msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.buttonsResponseMeasage?.contextInfo?.quotedMessage?.buttonsMessage?.contentText;
            const legendaFoto = msg?.message?.imageMessage?.caption
            const groupMetadata = isGroup ? await sock.groupMetadata(jid) : "";
            const groupName = isGroup ? groupMetadata?.subject : "";
            const groupID = isGroup ? groupMetadata?.id : "";
            const groupMembers = isGroup ? groupMetadata?.participants : "";
            const numero = msg.key?.participant;
            const numeroUsuario = numero?.substr(2,10)
            const nameUser = msg?.pushName;
            registro(fs, numeroUsuario, nameUser, groupName, groupID)
            const actionMember = msg?.messageStubParameters
            const marcado = msg.message?.extendedTextMessage?.contextInfo?.participant;
            const usuarioMarcado = marcado?.substr(2,10)
            const dadosGrupo = fs.existsSync(`./data-base/groups/${groupID}.json`) ? JSON.parse(fs.readFileSync(`./data-base/groups/${groupID}.json`, 'utf-8')) : "";
            const nomeGrupo = dadosGrupo?.nome
            const nsfwGrupo = dadosGrupo?.nsfw
            const antilinkGrupo = dadosGrupo?.antilink
            const cassinoGrupo = dadosGrupo?.cassino
            const dadosUsuario = fs.existsSync(`./data-base/users/${numeroUsuario}.json`) ? JSON.parse(fs.readFileSync(`./data-base/users/${numeroUsuario}.json`, 'utf-8')) : "";
            const dadosUsuarioMarcado = fs.existsSync(`./data-base/users/${usuarioMarcado}.json`) ? JSON.parse(fs.readFileSync(`./data-base/users/${usuarioMarcado}.json`, 'utf-8')) : console.log("error");
            function isAdmin(number) {
                for (let i = 0; i < groupMembers.length; i++) {
                    if (groupMembers[i].id === number && groupMembers[i].admin === 'admin' || groupMembers[i].id === number && groupMembers[i].admin === 'superadmin') {
                        return true;
                    }
                }
                return false;
            }
            const admin = isAdmin(numero)
            const nexaAdmin = isAdmin(`55${euBot}@s.whatsapp.net`)
            
            setAdmin(admin, nexaAdmin, message, marcado, usuarioMarcado, sock, jid, msg, groupName, nameUser, nexaAdmin)
            setGroups(admin, message, dadosGrupo, fs, groupID, sock, jid, msg) 
            antilink(fs, message, admin, antilinkGrupo, numeroUsuario, euBot, sock, jid, numero)
            actions(action, sock, jid, actionMember, groupName)
            youtubeSearch(message, YTB, sock, jid, msg, babytube)
            //imgSearch(message, gis, sock, jid, msg )
            sticker(legendaFoto, downloadMediaMessage, msg, logger, sock, fs, exec, jid, msg, fs)
            menu(moment, prefix, nameUser, message, sock, jid, msg) 
            nsfw(nsfwGrupo, message, sock, jid, msg)
            nexa(message, sock, jid, msg, process, axios, gtts, fs)
            getData(message, sock, jid, dadosUsuario,msg, dadosUsuarioMarcado)
            give(message, numeroUsuario, euDev, dadosUsuario, fs, sock, jid, msg, dadosUsuarioMarcado, usuarioMarcado)
            ranking(cassinoGrupo, message, path, _, sock, jid, msg, exec)
            doar(message, dadosUsuario, fs, numeroUsuario, sock, jid, msg, dadosUsuarioMarcado, usuarioMarcado)
            agiotar(message, dadosUsuario, fs, numeroUsuario, sock, jid, msg, dadosUsuarioMarcado, usuarioMarcado)
            setPatentes(dadosUsuario, fs, numeroUsuario)
            deleteUser(message, numeroUsuario, euDev, fs, sock, jid, msg)
            gameRoletaRussa(cassinoGrupo, message, nexaAdmin, dadosUsuario, fs, numeroUsuario, sock, jid, msg, numero)
            gameDicionario(cassinoGrupo, message, fs, sock, jid, msg, dadosUsuario, numeroUsuario)
            gameLoteria(cassinoGrupo, message, fs, dadosUsuario, sock, jid, msg, numeroUsuario)
            gameBingo(cassinoGrupo, message, dadosUsuario, fs, numeroUsuario, sock, jid, msg)
            gameCacaNiquel(cassinoGrupo, message, dadosUsuario, fs, numeroUsuario, sock, jid, msg)
            gameRoleta(cassinoGrupo, message, dadosUsuario, fs, numeroUsuario, sock, jid, msg)
        }
    })
}
startSock();
