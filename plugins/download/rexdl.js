const { decode } = require('html-entities')
exports.run = {
   usage: ['mf', 'rx'],
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         let json = await Api.rexdl(args[0])
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://rexdl.com/android/easy-vpn-apk.html/'), m)
        // if (!args[0].match(/(https:\/\/www.mediafire.com\/)/gi)) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.rexdl(args[0])
         client.sendFile(m.chat, json.data.link, 'json.data.url', m)

      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}
