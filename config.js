const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_12_03_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc3LFxuICAgICAgICA5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNixcbiAgICAgICAgODAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0LFxuICAgICAgICA5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMixcbiAgICAgICAgMjM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTksXG4gICAgICAgIDgzLFxuICAgICAgICAzMixcbiAgICAgICAgMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDQzLFxuICAgICAgICA0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY1LFxuICAgICAgICA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiODhrTUhDSGRkUG45OWc5SlJzdEtrWWJaUEY1M2FTK0szTHhBZUZLazZzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJycGNtNUpOMVRlV2FiaVBuOUFtMWhBXCIsXG4gIFwicGhvbmVJZFwiOiBcImNlMmEwOTVkLWU1MWUtNDEwMC1iZmQzLWViZjdmNGI4NTBjNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjcsXG4gICAgICAyMTIsXG4gICAgICA4MCxcbiAgICAgIDEyMSxcbiAgICAgIDE5MixcbiAgICAgIDAsXG4gICAgICA0MSxcbiAgICAgIDEyOCxcbiAgICAgIDE5OCxcbiAgICAgIDQsXG4gICAgICA2NSxcbiAgICAgIDE1NSxcbiAgICAgIDE3NixcbiAgICAgIDE4OSxcbiAgICAgIDUyLFxuICAgICAgMjQ2LFxuICAgICAgMTk4LFxuICAgICAgMTksXG4gICAgICA2MyxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDEwMyxcbiAgICAgIDE2MCxcbiAgICAgIDE5MyxcbiAgICAgIDE3MSxcbiAgICAgIDIxMCxcbiAgICAgIDM1LFxuICAgICAgNjAsXG4gICAgICAxNjYsXG4gICAgICAxNzAsXG4gICAgICAzNyxcbiAgICAgIDIyMyxcbiAgICAgIDI0LFxuICAgICAgMTA1LFxuICAgICAgMTcyLFxuICAgICAgMjE1LFxuICAgICAgMjE5LFxuICAgICAgMTEzLFxuICAgICAgNTcsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOEpWWFZKMzVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjE0MjY0OTc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ5MDkxMDc0MzA2MTcxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGVMaVlFSEVOdnlucjhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6OENvY3I4Q1JzUElxRDBXTXJMcFdQVjdYQUZlc3hQcjZaVU1ZUnlsRmlVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFIY1N0WGE3UllraytGa09UL0hNV3l4aDFRcVFQalllaXc4UDMvbHdSU2d1eUJwOVZMa3JpWk9sa2R1VmtaQXhwRWo0UUNmSGxuakp2VE1od3BJRkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNhTDNRS2NKWXkybUN4L0cwMHlEaDFGYk9PNFh0V2kwSUgwc1F4cnVjWHZwbDYxSnF1VmZGZU9IWHMydGhST3lDanBDa2ZwQ1MzNkJJWjZESUQzVmpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjE0MjY0OTc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MzIzOTUyMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
