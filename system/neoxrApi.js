module.exports = class NeoxrApi {
   baseUrl = 'https://api.nxr.my.id/api'
   apiKey = null

   constructor(apiKey) {
      this.apiKey = apiKey || ''
   }
   
   check = async () => {
  	let json = await Func.fetchJson(this.baseUrl + '/check/' + this.apiKey)
      return json
   }
   
    omri = async (query) => {
      let json = await Func.fetchJson('https://api.agify.io/?name=' + query)
      return json
   } 
   
   universities = async (query) => {
      let json = await Func.fetchJson('http://universities.hipolabs.com/search?country=' + query)
      return json
   } 
   boredapi = async () => {
  	let json = await Func.fetchJson('https://www.boredapi.com/api/activity')
      return json
   }
   
    github = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/ghstalk?username=' + query + '&apikey=' + this.apiKey)
      return json
   }
   
   rexdlsearch = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/rexdl?q=' + query + '&apikey=' + this.apiKey)
      return json
   }  
   
   rexdl2 = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/rexdl-get?url=' + url + '&apikey=' + this.apiKey)
      return json
   } 

   
   
   
   
   apkdone = async (query) => {
      let json = await Func.fetchJson('https://api.indocoder.dev/api/search-apkmod?q=' + query + '&apikey=3yLPmfaoY0')
      return json
   }  
   
   apkdone1 = async (url) => {
      let json = await Func.fetchJson('https://api.indocoder.dev/api/apkmodurl?url=' + url + '&apikey=3yLPmfaoY0')
      return json
   } 
   
   
   
   podcast = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/podcast?url=' + url + '&apikey=' + this.apiKey)
      return json
   }
   
     textpro = async (q) => {
      let json = 'https://bx-hunter.herokuapp.com/api/textpro/blackpink?apikey=tNJF3kxQ8QJdMDwMFxE3lnmTE&text=' + q 
      return json
   }
   
   
   fb = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/fb?url=' + url + '&apikey=' + this.apiKey)
      return json
   }
   
   
   
   gore = async (q) => {
      let json = await Func.fetchJson(this.baseUrl + '/gore-search?q=' + q + '&apikey=' + this.apiKey)
      return json
   }
   
   goreget = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/gore-get?url=' + url + '&apikey=' + this.apiKey)
      return json
   }
   
   

   ig = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/ig?url=' + url + '&apikey=' + this.apiKey)
      return json
   }

   igs = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/igs2?q=' + Func.igFixed(url) + '&apikey=' + this.apiKey)
      return json
   }
   
   line = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/line?url=' + url + '&apikey=' + this.apiKey)
      return json
   }

   pin = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/pin?url=' + url + '&apikey=' + this.apiKey)
      return json
   }

   mediafire = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/mediafire?url=' + url + '&apikey=' + this.apiKey)
      return json
   }

   tiktok = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/tiktok?url=' + url + '&apikey=' + this.apiKey)
      return json
   }

   twitter = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/twitter?url=' + url + '&apikey=' + this.apiKey)
      return json
   }

   soundcloud = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/soundcloud?url=' + url + '&apikey=' + this.apiKey)
      return json
   }

   emojimix = async (emo) => {
      let json = await Func.fetchJson(this.baseUrl + '/emoji?q=' + encodeURIComponent(emo) + '&apikey=' + this.apiKey)
      return json
   }
   
   rexdl = async (str) => {
      let json = str.match('rexdl.com') ? await Func.fetchJson(this.baseUrl + '/rexdl-get?url=' + str + '&apikey=' + this.apiKey) : await Func.fetchJson(this.baseUrl + '/rexdl?q=' + encodeURIComponent(str) + '&apikey=' + this.apiKey)
      return json
   }
   
   sticker = async (str) => {
      let json = str.match('getstickerpack.com') ? await Func.fetchJson(this.baseUrl + '/sticker-get?url=' + str + '&apikey=' + this.apiKey) : await Func.fetchJson(this.baseUrl + '/sticker?q=' + encodeURIComponent(str) + '&apikey=' + this.apiKey)
      return json
   }
   
   pinterest = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/pinterest?q=' + query + '&apikey=' + this.apiKey)
      return json
   }
   

   
   emojimix = async (emoticon) => {
  	let json = await Func.fetchJson(this.baseUrl + '/emoji?q=' + emoticon + '&apikey=' + this.apiKey)
      return json
   }
   
   drakor = async (str) => {
      let json = str.match('drakorasia.us') ? await Func.fetchJson(this.baseUrl + '/drakor-get?url=' + str + '&apikey=' + this.apiKey) : await Func.fetchJson(this.baseUrl + '/drakor?q=' + str + '&apikey=' + this.apiKey)
      return json
   }
   
   anime = async (str) => {
      let json = str.match('62.182.83.93') ? await Func.fetchJson(this.baseUrl + '/anime-get?url=' + str + '&apikey=' + this.apiKey) : await Func.fetchJson(this.baseUrl + '/anime?q=' + str + '&apikey=' + this.apiKey)
      return json
   }
   
   film = async (str) => {
      let json = str.match('167.99.64.64') ? await Func.fetchJson(this.baseUrl + '/film-get?url=' + str + '&apikey=' + this.apiKey) : await Func.fetchJson(this.baseUrl + '/film?q=' + str + '&apikey=' + this.apiKey)
      return json
   }
   
   wallpaper = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/wallpaper2?q=' + query + '&apikey=' + this.apiKey)
      return json
   }
   
   artinama = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/artinama?nama=' + query + '&apikey=' + this.apiKey)
      return json
   }
}
