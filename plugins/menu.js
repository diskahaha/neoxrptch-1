  exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: '𝕭𝖔𝖙 • Andii ༢࿔ྀ',
         rowId: `${isPrefix}menutype 1`,
         description: ``
      }, {
         title: 'GROUP-MENU',
         rowId: `${isPrefix}menutype 2`,
         description: ``
      }, {
         title: 'DOWNLOAD-MENU',
         rowId: `${isPrefix}menutype 3`,
         description: ``
      }, {
         title: 'SEARCH-MENU',
         rowId: `${isPrefix}menutype 4`,
         description: ``
         }, {
         title: 'STICKERS-MENU',
         rowId: `${isPrefix}menutype 5`,
         description: ``
         }, {
         title: 'TOOLS-MENU',
         rowId: `${isPrefix}menutype 6`,
         description: ``
      }]
      let text = 'Kenapa Bebek Kaki Nya Dua? Karna Kau Wibu :v\n'
      text += '𝙱𝚈\n'
      text += '𝕭𝖔𝖙 • Andii ༢࿔ྀ\n'
      await client.sendList(m.chat, '', text, '', 'Klik!', [{
         rows
      }], m)
   },
   error: false
}
