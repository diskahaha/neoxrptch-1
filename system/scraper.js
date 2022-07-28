const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')
global.creator = `@neoxrs – Wildan Izzudin`

module.exports = class Scraper {
   
   /*
   ======= getlanglist cour
   */
    getlanglist() {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://www.alloschool.com/category/physical-science')).data
            let $ = cheerio.load(html)
            let title = []
            let link = []
            $('ul.ul-timeline li a div.t-h h2').each((i, e) => title.push($(e).text()))
            $('ul.ul-timeline li a').each((i, e) => link.push($(e).attr('href')))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  
                  title: title,
                  link: link,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
   
   /*
   ======= apkgoogle
   */
    apkgoogle(q) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://apkgoogle.org/fr/?s=' + q)).data
            let $ = cheerio.load(html)
            let content = []
            let title = []
            $('a.sidebar-a').each((i, e) => content.push($(e).attr('href')))
            $('a.sidebar-a').each((i, e) => title.push($(e).attr('title')))
 
            if (content.lenght == 0) return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  content: content,
                  title: title,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
   
   
   /*
   ======= apkgoogledl
   */
    apkgoogledl(url){
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get( url + '')).data
            let $ = cheerio.load(html)
            let content = []
            let title = []
            $('p.gt-block strong a').each((i, e) => content.push($(e).attr('href')))
             $('div.short-detail h3').each((i, e) => title.push($(e).text()))
 
            if (content.lenght == 0) return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  content: content[0],
                  title: title[0].trim(),
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   } 
   
   
  /*
   ======= 
   */
lesson(url){
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get( url + '')).data
            let $ = cheerio.load(html)
            let link = []
            let title = []
            $('.ul-timeline li.lesson').each((i, e) => link.push($(e).attr('id').replace('sections-','')))
             $('.ul-timeline li.lesson .t-h  h2').each((i, e) => title.push($(e).text().trimStart()))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  link: link,
                  title: title,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   } 
   
   
   /* section
    * @param {String} bid
    * @param {String} key
    * @param {String} text
    */
   
   section(q){
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://www.alloschool.com/section/' + q)).data
            let $ = cheerio.load(html)
            let link = []
            let title = []
            $('div.row .er').each((i, e) => link.push($(e).attr('href')))
             $('div.row .er').each((i, e) => title.push($(e).text().trimStart()))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  link: link,
                  title: title,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   } 
   
   /* section
    * @param {String} bid
    * @param {String} key
    * @param {String} text
    */
   
   pdfdl(url){
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get(url + '')).data
            let $ = cheerio.load(html)
            let dl_link = []
            $('.pdf-tag-hide a').each((i, e) => dl_link.push($(e).attr('href')))
    
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  dl_link: dl_link,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   } 
   
   /* Chat AI
    * @param {String} bid
    * @param {String} key
    * @param {String} text
    */
   chatAI = (bid, key, text) => {
      return new Promise(async (resolve) => {
         try {
            let json = await (await axios.get('http://api.brainshop.ai/get?bid=' + bid + '&key=' + key + '&uid=neoxr&msg=' + encodeURI(text))).data
            if (typeof json.cnt == 'undefined') return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               cretor: global.creator,
               status: true,
               msg: json.cnt
            })
         } catch (e) {
            console.log(e)
            return resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
   
   
    mo3jam(q) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://ar.mo3jam.com/search?q=' + q)).data
            let $ = cheerio.load(html)
            let content = []
            $('div.def-body').each((i, e) => content.push($(e).text()))
 
            if (content.lenght == 0) return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  content: content[0].trim(),
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
   //_________________________________________________________________________
    quote(q) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://quotes4all.net/search-quotes?q=' + q)).data
            let $ = cheerio.load(html)
            let content = []
            $('div.q-te').each((i, e) => content.push($(e).text()))
 
            if (content.lenght == 0) return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  content: content[0].trim(),
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
   // ________________________________________________________________________
   
   //_________________________________________________________________________
    oxfordreference(q) {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://www.oxfordreference.com/search?q=' + q)).data
            let $ = cheerio.load(html)
            let content = []
            $('p.hitContext').each((i, e) => content.push($(e).text()))
 
            if (content.lenght == 0) return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  content: content[0].trim(),
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
   
   /* URL Shortener
    * @param {String} url
    */
   shorten = (url) => {
      return new Promise(async (resolve) => {
         try {
            let params = new URLSearchParams()
            params.append('url', url)
            let json = await (await fetch('https://s.nxr.my.id/api', {
               method: 'POST',
               body: params
            })).json()
            if (json.error) return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  url: 'https://s.nxr.my.id/r/' + json.data.code
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
   
      /* section
    * @param {String} bid
    * @param {String} key
    * @param {String} text
    */
   
   APKMirrorSearch(q){
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s=' + q)).data
            let $ = cheerio.load(html)
            let link = []
            let title = []
            let byDeveloper = []
            let data_utcdate = []
            $('div.appRow .fontBlack').each((i, e) => link.push($(e).attr('href')))
            $('div.appRow h5').each((i, e) => title.push($(e).text().trimStart()))
            $('div.appRow .byDeveloper').each((i, e) => byDeveloper.push($(e).text().trimStart()))
            $('div.appRow .dateyear_utc').each((i, e) => data_utcdate.push($(e).attr('data-utcdate')))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  link: 'https://www.apkmirror.com' + link,
                  title: title,
                  byDeveloper: byDeveloper,
                  data_utcdate: data_utcdate,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   } 
         /* section
    * @param {String} bid
    * @param {String} key
    * @param {String} text
    */
   
   APKMirrorVersion(url){
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get(url + '')).data
            let $ = cheerio.load(html)
            let link = []
            let title = []
            let byDeveloper = []
            let data_utcdate = []
            $('div.headerFont .accent_color').each((i, e) => link.push($(e).attr('href')))
            $('div.headerFont .accent_color ').each((i, e) => title.push($(e).text().trimStart()))
 
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  link: 'https://www.apkmirror.com' + link,
                  title: title,
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   } 
   /* Image Uploader (telegra.ph)
    * @param {Buffer} buffer
    */
   uploadImage = async (buffer) => {
      let {
         ext
      } = await fromBuffer(buffer)
      let form = new FormData
      form.append('file', buffer, 'tmp.' + ext)
      let res = await fetch('https://telegra.ph/upload', {
         method: 'POST',
         body: form
      })
      let img = await res.json()
      if (img.error) throw img.error
      return 'https://telegra.ph' + img[0].src
   }
}
