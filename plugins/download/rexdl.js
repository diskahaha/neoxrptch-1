exports.run = {
   usage: ['rexdl', 'rex'],
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
                  if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
                  let text = `乂  *R E X D L *\n\n`
                  text += '	◦  *Name* : ' + json.data[0].name + '\n'
                  text += '	◦  *category* : ' + json.data[0].category + '\n'
                  text += '	◦  *publish* : ' + json.data[0].publish + '\n'
                  text += '	◦  *desc* : ' + json.data[0].desc + '\n\n'
                  text += '	◦  *url* : ' + json.data[0].url + '\n\n'
                  client.reply(m.chat, text, m)
 }
    
         
                  if (command == 'rexdl2') {
                  client.sendReact(m.chat, '🕒', m.key)
                  let json = await Api.rexdl2(args)
                  if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
                  let text = `乂  *R E X D L  D O W N L O A D*\n\n`
                  text += '	◦  *Name* : ' + json.name + '\n'
                  text += '	◦  *version* : ' + json.version + '\n'
                  text += '	◦  *size* : ' + json.size + '\n'
                  text += '	◦  *password* : ' + json.password + '\n\n'
                  text += '	◦  *url* : ' + json.data[0].url + '\n\n'
                  client.reply(m.chat, text, m)
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
