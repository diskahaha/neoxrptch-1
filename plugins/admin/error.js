exports.run = {
   usage: ['menu','mo3jam','quote','oxford'],
   async: async (m, {
      client,
      text,
      args,
      isPrefix,
      command
   }) => {
      
     
     
     
     // ________________________________________________
     
     
     if (command == 'menu') {
       
       // client.reply(m.chat, `bot dyl s7ab bac sf  .bac`, m)
         //client.sendFile(m.chat, 'https://github.com/mohamedBella2000/zimbot/blob/zim-bot-inc/media/tes.mp3?raw=true' , m)
         client.sendFile(m.chat, 'https://github.com/mohamedBella2000/neoxrptch/blob/patch-1/media/image/Cheb%20Larbi%20_Avec%20Le%20Temps%20Tibgheni.MP3?raw=true', 'hello.mp3', '', m, {
               document: false
            })
       
      }
      
      // urbn 
      if (command == 'mo3jam') {
       
       client.reply(m.chat, ` ... `, m)
      if (!text) return client.reply(m.chat, Func.example(isPrefix, command, command != 'artinama' ? 'yntkts' : 'wildan'), m)
      let json = await scrap.mo3jam(text)
      command != 'artinama' ? client.reply(m.chat, `${json.data.content}`, m) : client.reply(m.chat, `${json.data.content}`, m)
      }
      
      // oxfordreference 
      if (command == 'oxford') {
       
       client.reply(m.chat, `Oxford Reference Search Results ....`, m)
      if (!text) return client.reply(m.chat, Func.example(isPrefix, command, command != 'artinama' ? 'yntkts' : 'wildan'), m)
      let json = await scrap.oxfordreference(text)
      command != 'artinama' ? client.reply(m.chat, `${json.data.content}`, m) : client.reply(m.chat, `${json.data.content}`, m)
      }
      
      
      // quote 
      if (command == 'quote') {
       
       client.reply(m.chat, `quote ...`, m)
      if (!text) return client.reply(m.chat, Func.example(isPrefix, command, command != 'artinama' ? 'yntkts' : 'wildan'), m)
      let json = await scrap.quote(text)
      command != 'artinama' ? client.reply(m.chat, `${json.data.content}`, m) : client.reply(m.chat, `${json.data.content}`, m)
    
       
      }
     // ________________________________________________
     
     
   },
   error: false,
   private: false,
   limit: true,
   group: false,
   cache: true,
   location: __filename
}



         
