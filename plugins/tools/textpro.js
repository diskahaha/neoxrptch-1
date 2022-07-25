const { decode } = require('html-entities')
exports.run = {
   usage: ['mf', 'tp'],
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
        
         client.sendReact(m.chat, '🕒', m.key)
         client.sendFile(m.chat, 'https://api.nxr.my.id/api/blackpink?text='+ args + '&apikey=2lleJx', '', '', m)
          
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}