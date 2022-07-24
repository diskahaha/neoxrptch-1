exports.run = {
   usage: ['rexdl', 'rexdl2'],
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
        // if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://rexdl.com/android/easy-vpn-apk.html/'), m)
        // if (!args[0].match(/(https:\/\/www.rexdl.com\/)/gi)) return client.reply(m.chat, global.status.invalid, m)

         
         
         
         
         
if (command == 'rexdl') {
                  client.sendReact(m.chat, '🕒', m.key)
                  let json = await Api.rexdlsearch(args)
                  let json2 = await Api.rexdl2(args)
                  if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
   
                  let rows = [
                      {
                        title: json.data[0].name,
                        rowId: `${isPrefix}rexdl2 ` + json.data[0].url,
                        description: json.data[0].desc
                     },
                     {
                        title: json.data[1].name,
                        rowId: `${isPrefix}rexdl2 ` + json.data[1].url,
                        description: json.data[0].desc
                     },
                     {
                        title: json.data[2].name,
                        rowId: `${isPrefix}rexdl2 ` + json.data[2].url,
                        description: json.data[0].desc
                     },
                     {
                        title: json.data[3].name,
                        rowId: `${isPrefix}rexdl2 ` + json.data[3].url,
                        description: json.data[0].desc
                     },
                     {
                        title: json.data[4].name,
                        rowId: `${isPrefix}rexdl2 ` + json.data[4].url,
                        description: json.data[0].desc
                     },
                     {
                        title: json.data[5].name,
                        rowId: `${isPrefix}rexdl2 ` + json.data[5].url,
                        description: json.data[0].desc
                     }
                  ]
                     
                        await client.sendList(m.chat, '', `乂  *R E X D L *\n\n`, '', 'Tap!', [{
                        rows
                     }], m)

                  
                  
}
    
         
                  if (command == 'rexdl2') {
                  client.sendReact(m.chat, '🕒', m.key)
                  let json = await Api.rexdl2(args)
                  if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
                  let text = `乂  *M E D I A F I R E*\n\n`
                  text += '	◦  *Name* : ' + unescape(decode(json.data.filename)) + '\n'
                  text += '	◦  *Size* : ' + json.data.size + '\n'
                  text += '	◦  *Extension* : ' + json.data.extension + '\n'
                  text += '	◦  *Mime* : ' + json.data.mime + '\n'
                  text += '	◦  *Uploaded* : ' + json.data.uploaded + '\n\n'
                  client.sendMessageModify(m.chat, text, m, {
                  title: ' (Public Bot)',
                  largeThumb: true,
                  thumbnail: await Func.fetchBuffer('https://telegra.ph/file/fcf56d646aa059af84126.jpg')
               }).then(async () => {
                   client.sendFile(m.chat, json.data[0].url, json.data[0].filename, '', m)
               })
                 
         }
         
         
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}
