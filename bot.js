var schedule = require('node-schedule');

const Discord = require('discord.js');
const { prefix, prefix2, token } = require('./config.json');
const ytdl = require("ytdl-core");
const queue = new Map();
const Client = require('./client/Client');
const fs = require('fs')
const { CommandHandler } = require('djs-commands');
const weather = require('./commands/weather');
const CH = new CommandHandler({
    folder: __dirname + "/commands/",
    prefix: ['!']
})
let meme = 0;  
let dailyMeme = 0
let dailyWeather = "!-raincheck"
global.lastBoy = null
global.muted = false
global.game = false
global.curr_player = null;
global.player_1 = null;
global.player_2 = null;
const client = new Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

console.log(client.commands);


client.on('ready', () => {
    console.log('Bot is logged in!')
})
/*
//scheduled message for meme-a-day
client.on('ready', () => {

    const channel = client.channels.cache.get('570344442255376387')
    const channel1 = client.channels.cache.get('688827517913530565')
    var dailyMemeReminder = schedule.scheduleJob("0 20 * * 1-5", function () {
        if (dailyMeme == 0) {
            channel1.send("Sure is lonely around here... wish I had a meme.")
            dailyMeme++
        }
    })
    var dailyMemeReminderWeekend = schedule.scheduleJob("0 20 * * 6,0", function () {
        channel1.send("Sure is lonely arou - Wrong day. Carry on.")
    })

    var dailyMemeReset = schedule.scheduleJob("0 4 * * *", function () {
        dailyMeme == 0
    })

    var checking = schedule.scheduleJob("38 0 * * *", function () {
        channel1.send(dailyWeather)

    })

})
hello
*/
client.on('message', async message => {
    /*
    688827517913530565
    570344442255376387
    */
    if (message.channel.id == 570344442255376387 && message.attachments.size > 0) {
        if (message.author.bot) return;
        meme++
        if (meme == 1) {
            setTimeout(function () {
                message.channel.send("Seeya next time!")
                meme = 0;
                dailyMeme++
            }, 1500)
        }
        return
    }
    if ( ! (message.author.bot && message.content == dailyWeather)) {
        //console.log(!(message.author.bot && message.content == dailyWeather))
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
        if (muted) {
            message.channel.send("STOP, I AM REBOOTING")
            return
        }
        
        let msg = message.content.toLowerCase()
        let ight = msg.split(" ")
        let command123 = ight[0]
        let cmd = CH.getCommand(command123)
        if (game) {
            if (ight[0] != "!move" || message.author.username != curr_player) 
                message.channel.send("You're a real funny guy...");
            else
                try {
                    cmd.run(message, ight);
                } catch (error) {
                    console.error(error);
                    message.channel.send("Hmmmm, that's not a command. I'm just gonna pretend I didn't hear it.");
                }
            return    
        }
        try {
            if (ight[0] != "!music")
                cmd.run(message, ight);
            else {
                const serverQueue = queue.get(message.guild.id);

                if (ight[1] == "play") {
                  execute(message, serverQueue);
                } else if (ight[1] == "skip") {
                  skip(message, serverQueue);
                } else if (ight[1] == "stop") {
                  stop(message, serverQueue);
                } else {
                  message.channel.send("If you're gonna use !music, you have to put play, skip, or stop after !music");
                }
            }  
        } catch (error) {
            console.error(error);
            message.channel.send("Hmmmm, that's not a command. I'm just gonna pretend I didn't hear it.");
        }
    }    
    
});

async function execute(message, serverQueue) {
    let ight = message.content.split(" ")
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send(
        "You need to be in a voice channel to play music!"
      );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
      return message.channel.send(
        "I need the permissions to join and speak in your voice channel!"
      );
    }
  
    const songInfo = await ytdl.getInfo(ight[2]);
    const song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
     };
  
    if (!serverQueue) {
      const queueContruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true
      };
  
      queue.set(message.guild.id, queueContruct);
  
      queueContruct.songs.push(song);
  
      try {
        var connection = await voiceChannel.join();
        queueContruct.connection = connection;
        play(message.guild, queueContruct.songs[0]);
      } catch (err) {
        console.log(err);
        queue.delete(message.guild.id);
        return message.channel.send(err);
      }
    } else {
      serverQueue.songs.push(song);
      return message.channel.send(`${song.title} has been added to the queue!`);
    }
  }
  
  function skip(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You have to be in a voice channel to stop the music!"
      );
    if (!serverQueue)
      return message.channel.send("There is no song that I could skip!");
    serverQueue.connection.dispatcher.end();
  }
  
  function stop(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You have to be in a voice channel to stop the music!"
      );
      
    if (!serverQueue)
      return message.channel.send("There is no song that I could stop!");
    if (serverQueue.isEmpty())
        return message.channel.send("There is no song that I could stop!");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
  
  function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
      serverQueue.voiceChannel.leave();
      queue.delete(guild.id);
      return;
    }
  
    const dispatcher = serverQueue.connection
      .play(ytdl(song.url))
      .on("finish", () => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
      })
      .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`Start playing: **${song.title}**`);
  }

  

client.login(token);

