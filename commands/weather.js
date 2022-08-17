const Discord = require('discord.js');
const axios = require('axios')

module.exports = class weather{
    constructor(){
        this.name = 'weather'
        this.alias = ['w']
        this.usage = '!weather'
    }
    run (message, ight){
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/weather?zip=23114,us&APPID=3815da4ffe5daff0ce55d468a7b30fed`
            )
            .then(response => {
                let apiData = response;
                let currentTemp = Math.round((Math.ceil(apiData.data.main.temp) -273.15) *9/5 +32)
                let maxTemp = Math.round((apiData.data.main.temp_max - 273.15) *9/5 +32);
                let minTemp = Math.round((apiData.data.main.temp_min - 273.15) *9/5 +32);
                const currentForcast = apiData.data.weather[0].main
                let humidity = apiData.data.main.humidity;
                let wind = apiData.data.wind.speed;
                let cityName = apiData.data.name
                let country = apiData.data.sys.country
                let pressure = apiData.data.main.pressure;
                let cloudness = apiData.data.weather[0].description;
                let author = 'Marylanders'
                let icon = apiData.data.weather[0].icon
                const weatherPics = {
                  "Clouds": "⛅️",
                  "Rain": "☔️",
                  "Haze": "🌫",
                  "Thunderstorm": "⛈",
                  "Sunny": "☀️",
                  "Mist": "🌫",
                  "Clear": "☀️"
                }
                message.channel.send({embed: {
                    color: '#0099ff',
                    author: {
                        name:'HELLLLLOOOO VIRGINIANS'
                    },
                    title: `Location: ${cityName}, ${country}.`,
                    fields: [{
                        name: `Current: ${currentTemp}\u00B0F`,
                        value:`
                          ${weatherPics[currentForcast]}Forecast: ${currentForcast}, ${apiData.data.weather[0].description}
                          :small_red_triangle: High: ${maxTemp}\u00B0F
                          :small_red_triangle_down: Low: ${minTemp}\u00B0F
                          :hot_face: Humidity: ${humidity}%
                          :dash: Wind: ${wind}m/s
                          ` 
                      }
                    ],
                    timestamp: new Date(),
                    footer: {
                      icon_url: 'https://static01.nyt.com/images/2014/12/11/technology/personaltech/11machin-illo/11machin-illo-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale',
                      text: "© CL4P-TP Weather Services"
                    }
                  }
                });
            }).catch(err => {
                message.reply(`Enter a valid city name`)
                console.error(err)
            })

        
    }
}