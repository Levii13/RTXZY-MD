/*Ini untuk setting Bot
Untuk gambar background menu ada - di plugins menu
untuk lainya saran jangan di ubah bre nanti eror*/

/*global owner*/
global.owner = ['6281399318253']  
global.mods = ['6281399318253'] 
global.prems = ['6281399318253']
/*Nomor Owner & payment*/
global.nameowner = 'han reveriè.'
global.numberowner = '6281399318253' 
global.dana = '6285773906324'
global.pulsa = '6285773906324'
global.gopay = '6281399318253'
/*Nama Bot & Grouplink*/
global.namebot = 'han reveriè-MD'
global.gc = 'https://chat.whatsapp.com/FfmvYN3xdw336dx4Qr1EMP'
global.web = 'https://github.com/Levii13'
global.instagram = 'https://instagram.com/ardfq_?igshid=YmMyMTA2M2Y='
/*global wm*/
global.lolkey = 'rey2k22'
global.zenzkey = 'BagasPrdn'
global.wm = '© han reveriè'
global.watermark = wm
global.wm2 = '⫹⫺ han reveriè'
global.wm3 = '© han reveriè'
global.wm4 = '© BOT han'
global.fla = 'https://api.tiodevhost.my.id/api/textpro/glitch?text='
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp\han reveriè.'
/*Rest api setting*/
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'http://api.tiodevhost.my.id', 
  popcat: 'https://api.popcat.xyz',
  rey: 'https://sekha.me'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://pencarikode.xyz': 'pais', 
  'https://zekais.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

/*Setting Rpg*/
global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

/*Jangan merubah bagian ini!*/
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
