exports.run = {
   usage: ['spotify', 'spotifydl'],
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
        // if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://rexdl.com/android/easy-vpn-apk.html/'), m)
        // if (!args[0].match(/(https:\/\/www.rexdl.com\/)/gi)) return client.reply(m.chat, global.status.invalid, m)

         
         
         
         
         
            if (command == 'apkdone') {
                  client.sendReact(m.chat, '🕒', m.key)
                  let json = await Api.apkdone(args)
                  let json2 = await Api.apkdone1(args)
                  if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
   
                  let rows = [
                      {
                        title: json.data[0].name,
                        rowId: `${isPrefix}apkdone1 ` + json.data[0].link,
                        description: json.data[0].downloaded
                     },
                     {
                        title: json.data[1].name,
                        rowId: `${isPrefix}apkdone1 ` + json.data[1].link,
                        description: json.data[1].downloaded
                     },
                     {
                        title: json.data[2].name,
                        rowId: `${isPrefix}apkdone1 ` + json.data[2].link,
                        description: json.data[2].downloaded
                     },
                     {
                        title: json.data[3].name,
                        rowId: `${isPrefix}apkdone1 ` + json.data[3].link,
                        description: json.data[3].downloaded
                     },
                     {
                        title: json.data[4].name,
                        rowId: `${isPrefix}apkdone1 ` + json.data[4].link,
                        description: json.data[4].downloaded
                     },
                     {
                        title: json.data[5].name,
                        rowId: `${isPrefix}apkdone1 ` + json.data[5].link,
                        description: json.data[5].downloaded
                     }
                  ]
                     
                     await client.sendList(m.chat, '', `乂  *apkdone*\n\n`, '', 'Tap!', [{
                        rows
                     }], m)

                  
                  
}
    
         
                  if (command == 'apkdone1') {
                  client.sendReact(m.chat, '🕒', m.key)
                  let json = await Api.apkdone1(args)
                  if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
                  /*let text = `乂  *R E X D L *\n\n`
                  text += '	◦  *Name* : ' + unescape(decode(json.data[0].name)) + '\n'
                  text += '	◦  *update* : ' + json.data[0].update + '\n'
                  text += '	◦  *version* : ' + json.data[0].version + '\n'
                  text += '	◦  *size* : ' + json.data[0].size + '\n'
                  text += '	◦  *password* : ' + json.data[0].password + '\n\n'
                 */
                  // thumbnail: await Func.fetchBuffer('https://telegra.ph/file/1d01612178ca6187189bf.jpg')
                  // client.reply(m.chat, text , m)
                   client.sendFile(m.chat, json.data.download, json.data.filename, '', m)
                 
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
