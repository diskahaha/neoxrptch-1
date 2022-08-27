exports.run = {
   usage: ['menutype'],
   async: async (m, {
      client,
      args,
      isPrefix
   }) => {
      const option = args[0] || 1
      if (option == 1) return client.reply(m.chat, submenu1(isPrefix), m)
      if (option == 2) return client.reply(m.chat, submenu2(isPrefix), m)
      if (option == 3) return client.reply(m.chat, submenu3(isPrefix), m)
      if (option == 4) return client.reply(m.chat, submenu4(isPrefix), m)
      if (option == 5) return client.reply(m.chat, submenu5(isPrefix), m)
      if (option == 10) return client.reply(m.chat, submenu6(isPrefix), m)
   },
   error: false
}

const submenu1 = prefix => {
   return `*◦Apaaa Sayang?◦*`
}

const submenu2 = prefix => {
   return `◦  ${prefix}antilink *on / off*
◦  ${prefix}antivirtex *on / off*
◦  ${prefix}filter *on / off*
◦  ${prefix}localonly *on / off*
◦  ${prefix}left *on / off*
◦  ${prefix}welcome *on / off*
◦  ${prefix}mute *1 / 0*
◦  ${prefix}everyone *text*
◦  ${prefix}hidetag *text*
◦  ${prefix}group *close / open*
◦  ${prefix}setdesc *text*
◦  ${prefix}setname *text*
◦  ${prefix}setleft *text*
◦  ${prefix}setwelcome *text*
◦  ${prefix}kick *mention or reply*
◦  ${prefix}demote *mention or reply*`
}

const submenu3 = prefix => {
   return `◦  ${prefix}fb *link*
◦  ${prefix}ig *link*
◦  ${prefix}mediafire *link*
◦  ${prefix}play *query*
◦  ${prefix}pin *link*
◦  ${prefix}tiktok *link*
◦  ${prefix}tikmp3 *link*
◦  ${prefix}twitter *link*
◦  ${prefix}ytmp3 *link*
◦  ${prefix}ytmp4 *link*
◦  ${prefix}gitclone (Limit)
◦  ${prefix}igstalk
◦  ${prefix}wallpaper
◦  ${prefix}wallpaper2`
}

const submenu4 = prefix => {
   return `◦  ${prefix}google
◦  ${prefix}play  
◦  ${prefix}vid
◦  ${prefix}gore
◦  ${prefix}yts
◦  ${prefix}wikipedia
◦  ${prefix}image
◦  ${prefix}stickerline 
◦  ${prefix}apk
◦  ${prefix}apk2
◦  ${prefix}apk5
◦  ${prefix}setmsg`
}

const submenu5 = prefix => {
   return `◦  ${prefix}stiker or s
◦  ${prefix}smeme (Limit)
◦  ${prefix}attp
◦  ${prefix}getexif
◦  ${prefix}stikergif
◦  ${prefix}stikergif
◦  ${prefix}stikerline <url> (Limit)
◦  ${prefix}toimg
◦  ${prefix}toimg2
◦  ${prefix}ttp
◦  ${prefix}wm
◦  ${prefix}take`
}

const submenu6 = prefix => {
   return `◦  ${prefix}join *link group Whatsapp*
◦  ${prefix}gimage
◦  ${prefix}image
◦  ${prefix}ping
◦  ${prefix}speed
◦  ${prefix}del
◦  ${prefix}delete
◦  ${prefix}halah
◦  ${prefix}hilih
◦  ${prefix}huluh
◦  ${prefix}heleh
◦  ${prefix}holoh
◦  ${prefix}qr
◦  ${prefix}qrcode
◦  ${prefix}readmore
◦  ${prefix}spoiler
◦  ${prefix}readviewonce
◦  ${prefix}style
◦  ${prefix}tts
◦  ${prefix}yts
◦  ${prefix}ytsearch`
}
