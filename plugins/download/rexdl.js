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
                  // if (!json2.status) return client.reply(m.chat, Func.jsonFormat(json), m)
                /*  let text1 = `乂  *R E X D L *\n\n`
                  text1 += '	◦  *Name* : ' + json.data[0].name + '\n'
                  text1+= '	◦  *category* : ' + json.data[0].category + '\n'
                  text1 += '	◦  *publish* : ' + json.data[0].publish + '\n'
                  text1 += '	◦  *desc* : ' + json.data[0].desc + '\n\n'
                  text1 += '	◦  *url* : ' + json.data[0].url + '\n\n'
                  client.reply(m.chat, text1, m) */
   
                  let rows = [
                      {
                        title: json.data[0].name,
                        rowId: `${isPrefix}rexdl2 ` + json.data[0].url,
                        description: json.data[0].desc
                     }]
 
                  
                  
                  
                  
                  
                  
                  
                  }
    
         
                  if (command == 'rexdl2') {
                  client.sendReact(m.chat, '🕒', m.key)
                  let json = await Api.rexdl2(args)
                  if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
                  client.sendFile(m.chat, json.data[0].url, json.data[0].filename, '', m)
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
