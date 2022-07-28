exports.run = {
   usage: ['apkmirror','apkmirror_v'],
   async: async (m, {
      client,
      text,
      args,
      isPrefix,
      command
   }) => {
     
      // APKMirrorSearch 
      if (command == 'apkmirror') {
         client.reply(m.chat, ` ...  `, m)
         // if (!text) return client.reply(m.chat,'no text', m)
         let json = await scrap.APKMirrorSearch(text)
            let rows = [
                        {title: json.data.title[0], rowId: `${isPrefix}apkmirror_v ` + json.data.link[0], description: json.data.byDeveloper[0] + ' - ' + json.data.data_utcdate[0]},
                        {title: json.data.title[1], rowId: `${isPrefix}apkmirror_v ` + json.data.link[1], description: json.data.byDeveloper[1] + ' - ' + json.data.data_utcdate[1]},
                        {title: json.data.title[2], rowId: `${isPrefix}apkmirror_v ` + json.data.link[2], description: json.data.byDeveloper[2] + ' - ' + json.data.data_utcdate[2]}
                      ]

        await client.sendList(m.chat, '', `乂  *P D F*\n\n`, '', 'Tap!', [{
            rows
         }], m)    
      }
      
       // APKMirrorVersion 
      if (command == 'apkmirror_v') {
         client.reply(m.chat, ` ...  `, m)
         // if (!text) return client.reply(m.chat,'no text', m)
         let json = await scrap.APKMirrorVersion(text)
            let rows = [
                        {title: json.data.title[0], rowId: `${isPrefix}apkdone1 ` + json.data.link[0], description: ' - '},
                        {title: json.data.title[1], rowId: `${isPrefix}apkdone1 ` + json.data.link[1], description: ' - '},
                        {title: json.data.title[2], rowId: `${isPrefix}apkdone1 ` + json.data.link[2], description: ' - '}
                      ]

        await client.sendList(m.chat, '', `乂  *P D F*\n\n`, '', 'Tap!', [{
            rows
         }], m)    
      }
      
      

     
     
   },
   error: false,
   private: false,
   limit: true,
   group: false,
   cache: true,
   location: __filename
}


