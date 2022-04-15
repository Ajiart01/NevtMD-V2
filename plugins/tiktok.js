let moment = require('moment-timezone')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, {text}) => {
if (!text) return conn.reply(m.chat, 'Harap masukkan link\n\nContoh: .tiktok https://tiktok.com/xxxxxx', m)

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(4001)
let anu = `*── 「 TIKTOK 」 ──*

SILAHKAN PILIH`
     let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/yuta.jpg')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: anu,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '📍instagram',
               url: instagram
               }
               
             },
             {
             quickReplyButton: {
               displayText: 'Tanpa Watermark',
               id: `.tiktoknowm ${text}`,
             }
           },
           {
             quickReplyButton: {
               displayText: 'dengan watermark',
               id: `.tiktokwm ${text}`,
             }
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok)$/i

module.exports = handler

/*const hxz = require("hxz-api")
let handler = async(m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
if (!args[0].match(/tiktok/gi)) throw `*Link salah! Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
let p = await  hxz.ttdownloader(args[0])
const { nowm, wm, audio } = p
// made by aine
 conn.sendFile(m.chat, nowm, 'tiktok.mp4', `*© Nevt*`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|tiktokdl)$/i
handler.limit = true
handler.group = true
module.exports = handler*/

