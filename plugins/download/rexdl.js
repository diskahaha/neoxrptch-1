exports.run = {
   usage: ['mf', 'rex'],
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
        // if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://rexdl.com/android/easy-vpn-apk.html/'), m)
        // if (!args[0].match(/(https:\/\/www.rexdl.com\/)/gi)) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.rex(args)
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         let text = `乂  *R E X D L *\n\n`
         text += '	◦  *Name* : ' + json.name + '\n'
         text += '	◦  *version* : ' + json.version + '\n'
         text += '	◦  *size* : ' + json.size + '\n'
         text += '	◦  *password* : ' + json.password + '\n\n'
         text += '	◦  *url* : ' + json.data[0].url + '\n\n'
         client.reply(m.chat, text, m)
           client.sendFile(m.chat, json.data[0].url, json.data[0].filename, '', m)
         
        // let chSize = Func.sizeLimit(json.data.size, global.max_upload)
        // if (chSize.oversize) return client.reply(m.chat, `💀 File size exceeds the maximum limit, download it by yourself via this link :`, m)
        /* client.sendMessageModify(m.chat, text, m, {
            title: '© neoxr-bot v2.2.0 (Public Bot)',
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/fcf56d646aa059af84126.jpg')
         }).then(async () => {
            client.sendFile(m.chat, json.data.url, unescape(decode(json.data.filename)), '', m)
         })*/
         
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}
