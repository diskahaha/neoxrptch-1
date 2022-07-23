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
       
       client.reply(m.chat, `bot dyl s7ab bac sf  .bac`, m)
       client.sendFile(m.chat, buff, 'https://s3.amazonaws.com/text-to-speech.wideo.co/fcc4afe0-0aaa-11ed-8e96-07e3ad7ee7d0.mp3?AWSAccessKeyId=ASIAZSJTG4QM2C5URLMR&Expires=1658682902&Signature=%2BZ1Hn353jomNwdClKHvM7zkiDr8%3D&response-content-disposition=attachment%3B%20filename%3D%22fcc4afe0-0aaa-11ed-8e96-07e3ad7ee7d0.mp3%22&x-amz-security-token=IQoJb3JpZ2luX2VjEDEaCXVzLWVhc3QtMSJHMEUCIQDgiDjoPsczkJFy2jzsNuaX12uskxyGmA191g83n%2FYMCgIgZGK8wQVPO7tdzXjb3%2BLIHBFx3NYEWFwPw2b6JXvJb0EqhAMIehAAGgw2NTc3NzQyNzM1NjEiDMFiGCC0iCAABFT9ZCrhAt%2FcT1AvSeaevZObUGWF8t2egaFcUQMlnrfs%2BvZZdQ0rbC6Upnby3SkVrS3mA3YFKPCmjGKpaMh5%2FMGZPfW5E7HBHF8mdS3al4prwVbP06LAex7ALpMPyut6OLeXAa%2BHbthh7nsiBKD%2B%2FkgLDtBTtigD1PtBV8GFhwRklzZhetk9cJfiI7TTawZPlotFN2TeBdTX0Ta8MnR%2Bx7xExyWq8tITjThhyTDJCp0%2FlUkyetEyoHwl%2BXF5PjQjuhyTWUFmMALs%2BMAki4zti84Rmivex3m1KNwLT3MLLnZb4jmBuUl%2B1oo%2FFISJUx%2FCUa%2FgS3NfYAK%2B6y0LjgbmwFX5YHT3nsM6CGL9Ogq5%2FIxn2znrPAEWPlHu1hurf7i2WFcgi70RWrtoX9k%2B9EIg%2Fi2y8KIkCa5HUKbDERh12W3Btf7EIe%2BQmHiy9C6uIJRI%2FPaKy7RVe4yhxAFeR3b3MSR%2Bv9OL6cLJMJ7T8JYGOp4BpHKRMvfy5idsVYN6Pt8OALnn2a7iHv%2BWtm5zOwHBx6KC3cxBzZV6EzRjHQwoDqy4e0J8Zjq1DATvVr3ylOeMZ8F88S%2BhA6fRWR1nKZAaC3DM9XfcuGQtkG9lma0mU0eZBm05wGFVpB1ItE%2FgMx1hTLqBCb0%2F8ssI%2B0A%2FgDeM%2B7zqF3XNw0J%2FBiFCJnzZ%2BGxs5ByUa9mW4eRIdE8SOGM%3D', '', m)
       
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



         
