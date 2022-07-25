exports.run = {
   usage: ['gore', 'goreget'],
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
        // if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://rexdl.com/android/easy-vpn-apk.html/'), m)
        // if (!args[0].match(/(https:\/\/www.rexdl.com\/)/gi)) return client.reply(m.chat, global.status.invalid, m)

         
         
         
         
         
if (command == 'gore') {
                  client.sendReact(m.chat, '🕒', m.key)
                //  let json = await Api.goreget(args)
                  let json = await Api.gore(args)
                  if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
   
                  let rows = [
                      {
                        title: json.data[0].title,
                        rowId: `${isPrefix}goreget ` + json.data[0].link,
                        description: json.data[0].label
                     },
                     {
                        title: json.data[1].title,
                        rowId: `${isPrefix}goreget ` + json.data[1].link,
                        description: json.data[0].label
                     },
                     {
                        title: json.data[2].title,
                        rowId: `${isPrefix}goreget ` + json.data[2].link,
                        description: json.data[0].label
                     },
                     {
                        title: json.data[3].title,
                        rowId: `${isPrefix}goreget ` + json.data[3].link,
                        description: json.data[0].label
                     },
                     {
                        title: json.data[4].title,
                        rowId: `${isPrefix}goreget ` + json.data[4].link,
                        description: json.data[0].label
                     },
                     {
                        title: json.data[5].title,
                        rowId: `${isPrefix}goreget ` + json.data[5].link,
                        description: json.data[0].label
                     }
                  ]
                     
                     await client.sendList(m.chat, '', `乂  *G O R E*\n\n`, '', 'Tap!', [{
                        rows
                     }], m)

                  
                  
}
    
         
                  if (command == 'goreget') {
                  client.sendReact(m.chat, '🕒', m.key)
                  let json = await Api.goreget(args)
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
                   client.sendFile(m.chat, json.data[0].video, json.data[0].title, '', m)
                 
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