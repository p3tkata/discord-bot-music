module.exports = {
  Admins: ["959864317925261332"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/3Dpuq4Vud3", //Support Server Link
  Token: process.env.Token || "OTU5ODY0MzE3OTI1MjYxMzMy.YkiFTg.Q7sIE8tvsa5FdX33q-JQ9-qCbOA", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "937007457597800509", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "AfZ0aXGKqCwkDxEoJbAf5kBqLX63GbdZ", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "https://discord-musicbot.mundodas1.repl.co", //Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "use .help", // The message shown
    type: "STREAMING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "lavalink-repl.radiantcodes.repl.co",
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: "youshallnotpass",
    secure: true, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "9712a9f4f22f40408f70bb851b94d622", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "489b7079153348ed87e3db23808012e1", //Spotify Client Secret 
  },
};
