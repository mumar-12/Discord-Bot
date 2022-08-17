const weather = require("./weather");

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
module.exports = class hourlyweather {
    constructor() {
        this.name = '-hourlyweather'
        this.alias = ['hw']
        this.usage = '!hourlyweather'
    }
    //run(client,message,ight)hinoyesLW{
    run(message, ight) {

        //this.deleteTheMessage(message)

        let singleDigitDay = ""
        let singleDigitMonth = ""
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        if (tomorrow.getMonth() + 1 - 10 < 0) {
            singleDigitMonth = "0"
        }
        if (tomorrow.getDate() - 10 < 0) {
            singleDigitDay = "0"
        }
        let UTCtomorrow = `${tomorrow.getFullYear()}-${singleDigitMonth}${tomorrow.getMonth() + 1}-${singleDigitDay}${tomorrow.getDate()}`

        const weatherPics = {
            "Clouds": "⛅️",
            "Rain": "☔️",
            "Haze": "🌫",
            "Thunderstorm": "⛈",
            "Sunny": "☀️",
            "Mist": "🌫",
            "Clear": "☀️"
        }

        var rainProbability = []
        var temp = []
        let feelsLike = []
        let humidity = []
        let windSpeed = []
        let weatherCode = []

        this.rainProbability(rainProbability, UTCtomorrow)
        this.temp(temp, UTCtomorrow)
        this.feelsLike(feelsLike, UTCtomorrow)
        this.humidity(humidity, UTCtomorrow)
        this.windSpeed(windSpeed, UTCtomorrow)
        this.weatherCode(weatherCode, UTCtomorrow)
        setTimeout(function () {
            /*
            message.channel.send(`rainProbability is ${rainProbability}`)
            message.channel.send(`temp is ${temp}`)
            message.channel.send(`feelsLike is ${feelsLike}`)
            message.channel.send(`humidity is ${humidity}`)
            message.channel.send(`windSpeed is ${windSpeed}`)
            message.channel.send(`weatherCode is ${weatherCode}`)
            */


            message.channel.send({
                embed: {
                    color: '#0099ff',
                    author: {
                        name: 'HELLLLLOOOO VIRGINIANS'
                    },
                    title: `Location: Midlothian, Virginia`,
                    fields: [
                    {
                        name: `7:00 AM`,//${weatherPics[currentForcast]}
                        value: `
                            Current: ${temp[0]}\u00B0F
                            ${weatherPics.Clouds}Forecast: ${weatherCode[0]}
                            :droplet: Rain Chance: ${rainProbability[0]}%
                            :small_red_triangle_down: Feels Like: ${feelsLike[0]}\u00B0F
                            :hot_face: Humidity: ${humidity[0]}%
                            :dash: Wind: ${windSpeed[0]}m/s\n
                            `,
                        inline:true
                    },
                    {
                        name: "",
                        value: "",
                        inline:true

                    },
                    {
                        name: `8:00 AM`,//${weatherPics[currentForcast]}
                        value: `
                            Current: ${temp[1]}\u00B0F
                            ${weatherPics.Clouds}Forecast: ${weatherCode[1]}
                            :droplet: Rain Chance: ${rainProbability[1]}%
                            :small_red_triangle_down: Feels Like: ${feelsLike[1]}\u00B0F
                            :hot_face: Humidity: ${humidity[1]}%
                            :dash: Wind: ${windSpeed[1]}m/s\n
                            `,
                        inline:true

                    },
                    {
                        name: `9:00 AM`,//${weatherPics[currentForcast]}
                        value: `
                            Current: ${temp[2]}\u00B0F
                            ${weatherPics.Clouds}Forecast: ${weatherCode[2]}
                            :droplet: Rain Chance: ${rainProbability[2]}%
                            :small_red_triangle_down: Feels Like: ${feelsLike[2]}\u00B0F
                            :hot_face: Humidity: ${humidity[2]}%
                            :dash: Wind: ${windSpeed[2]}m/s\n
                            `,
                        inline:true

                    },
                    {
                        name: `10:00 AM`,//${weatherPics[currentForcast]}
                        value: `\n
                            Current: ${temp[3]}\u00B0F
                            ${weatherPics.Clouds}Forecast: ${weatherCode[3]}
                            :droplet: Rain Chance: ${rainProbability[3]}%
                            :small_red_triangle_down: Feels Like: ${feelsLike[3]}\u00B0F
                            :hot_face: Humidity: ${humidity[3]}%
                            :dash: Wind: ${windSpeed[3]}m/s
                            `,
                        //inline:true

                    },
                    {
                        name: `11:00 AM`,//${weatherPics[currentForcast]}
                        value: `
                            Current: ${temp[4]}\u00B0F
                            ${weatherPics.Clouds}Forecast: ${weatherCode[4]}
                            :droplet: Rain Chance: ${rainProbability[4]}%
                            :small_red_triangle_down: Feels Like: ${feelsLike[4]}\u00B0F
                            :hot_face: Humidity: ${humidity[4]}%
                            :dash: Wind: ${windSpeed[4]}m/s
                            `,
                        inline:true

                    },
                    {
                        name: `12:00 PM`,//${weatherPics[currentForcast]}
                        value: `
                            Current: ${temp[5]}\u00B0F
                            ${weatherPics.Clouds}Forecast: ${weatherCode[5]}
                            :droplet: Rain Chance: ${rainProbability[5]}%
                            :small_red_triangle_down: Feels Like: ${feelsLike[5]}\u00B0F
                            :hot_face: Humidity: ${humidity[5]}%
                            :dash: Wind: ${windSpeed[5]}m/s
                            `,
                        inline:true

                    },
                    {
                        name: `1:00 PM`,//${weatherPics[currentForcast]}
                        value: `
                            Current: ${temp[6]}\u00B0F
                            ${weatherPics.Clouds}Forecast: ${weatherCode[6]}
                            :droplet: Rain Chance: ${rainProbability[6]}%
                            :small_red_triangle_down: Feels Like: ${feelsLike[6]}\u00B0F
                            :hot_face: Humidity: ${humidity[6]}%
                            :dash: Wind: ${windSpeed[6]}m/s
                            `,
                        inline:true

                    },
                    {
                        name: `2:00 PM`,//${weatherPics[currentForcast]}
                        value: `
                            Current: ${temp[7]}\u00B0F
                            ${weatherPics.Clouds}Forecast: ${weatherCode[7]}
                            :droplet: Rain Chance: ${rainProbability[7]}%
                            :small_red_triangle_down: Feels Like: ${feelsLike[7]}\u00B0F
                            :hot_face: Humidity: ${humidity[7]}%
                            :dash: Wind: ${windSpeed[7]}m/s
                            `,
                        inline:true

                    },
                    {
                        name: `3:00 PM`,//${weatherPics[currentForcast]}
                        value: `
                            Current: ${temp[8]}\u00B0F
                            ${weatherPics.Clouds}Forecast: ${weatherCode[8]}
                            :droplet: Rain Chance: ${rainProbability[8]}%
                            :small_red_triangle_down: Feels Like: ${feelsLike[8]}\u00B0F
                            :hot_face: Humidity: ${humidity[8]}%
                            :dash: Wind: ${windSpeed[8]}m/s
                            `,
                        inline:true

                    },
                    {
                        name: `4:00 PM`,//${weatherPics[currentForcast]}
                        value: `
                            Current: ${temp[9]}\u00B0F
                            ${weatherPics.Clouds}Forecast: ${weatherCode[9]}
                            :droplet: Rain Chance: ${rainProbability[9]}%
                            :small_red_triangle_down: Feels Like: ${feelsLike[9]}\u00B0F
                            :hot_face: Humidity: ${humidity[9]}%
                            :dash: Wind: ${windSpeed[9]}m/s
                            `,
                        inline:true

                    },
                    {
                        name: `5:00 PM`,//${weatherPics[currentForcast]}
                        value: `
                            Current: ${temp[10]}\u00B0F
                            ${weatherPics.Clouds}Forecast: ${weatherCode[10]}
                            :droplet: Rain Chance: ${rainProbability[10]}%
                            :small_red_triangle_down: Feels Like: ${feelsLike[10]}\u00B0F
                            :hot_face: Humidity: ${humidity[10]}%
                            :dash: Wind: ${windSpeed[10]}m/s
                            `,
                        inline:true

                    },
                    {
                        name: `6:00 PM`,//${weatherPics[currentForcast]}
                        value: `
                            Current: ${temp[11]}\u00B0F
                            ${weatherPics.Clouds}Forecast: ${weatherCode[11]}
                            :droplet: Rain Chance: ${rainProbability[11]}%
                            :small_red_triangle_down: Feels Like: ${feelsLike[11]}\u00B0F
                            :hot_face: Humidity: ${humidity[11]}%
                            :dash: Wind: ${windSpeed[11]}m/s
                            `,
                        inline:true

                    },
                    {
                        name: `7:00 PM`,//${weatherPics[currentForcast]}
                        value: `
                            Current: ${temp[12]}\u00B0F
                            ${weatherPics.Clouds}Forecast: ${weatherCode[12]}
                            :droplet: Rain Chance: ${rainProbability[12]}%
                            :small_red_triangle_down: Feels Like: ${feelsLike[12]}\u00B0F
                            :hot_face: Humidity: ${humidity[12]}%
                            :dash: Wind: ${windSpeed[12]}m/s
                            `,
                        inline:true

                    },
                    {
                        name: `8:00 PM`,//${weatherPics[currentForcast]}
                        value: `
                            Current: ${temp[13]}\u00B0F
                            ${weatherPics.Clouds}Forecast: ${weatherCode[13]}
                            :droplet: Rain Chance: ${rainProbability[13]}%
                            :small_red_triangle_down: Feels Like: ${feelsLike[13]}\u00B0F
                            :hot_face: Humidity: ${humidity[13]}%
                            :dash: Wind: ${windSpeed[13]}m/s
                            `,
                        inline:true

                    }
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: 'https://static01.nyt.com/images/2014/12/11/technology/personaltech/11machin-illo/11machin-illo-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale',
                        text: "© CL4P-TP Weather Services"
                    }
                }
            })







        }, 5000)




    }
    deleteTheMessage(message) {
        message.delete(message);

    }

    rainProbability(rainProbability, UTCtomorrow) {
        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                //console.log(this.responseText);
                let shorterMessage = this.responseText.split(`{"lon":-77.6491578,"lat":37.5059814,"precipitation_probability":`).join(`,"observation_time":`).split(`,"observation_time":`).join(`{"lat":37.5059814,"lon":-77.6491578,"precipitation_probability":`).split(`{"lat":37.5059814,"lon":-77.6491578,"precipitation_probability":`)
                //console.log(`shorter message is: ${shorterMessage}`)
                for (let i = 0; i < shorterMessage.length; i++) {
                    if (i % 2 == 1) {
                        let yes = (shorterMessage[i].split(`{"value":`).join("").split(`,"units":"%"}`).join(""))
                        //console.log(yes)
                        let curr = parseInt(yes, 10)
                        curr = curr * 2 + 5 //test algorithm
                        //console.log(curr)
                        rainProbability.push(curr)
                        //console.log(rainProbability)

                    }

                }
            }
        });

        xhr.open("GET", `https://api.climacell.co/v3/weather/forecast/hourly?lat=37.5059814&lon=-77.6491578&unit_system=us&start_time=2020-08-12T11:00:00Z&end_time=${UTCtomorrow}&fields=precipitation_probability&apikey=xJT1FBEW1QtGpWyCZqQptELe81osYG5M`);
        xhr.send(data);
    }

    temp(temp, UTCtomorrow) {
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `https://api.climacell.co/v3/weather/forecast/hourly?lat=37.5059814&lon=-77.6491578&unit_system=us&start_time=2020-08-12T11:00:00Z&end_time=${UTCtomorrow}&fields=temp&apikey=xJT1FBEW1QtGpWyCZqQptELe81osYG5M`);
        xhr.send(data);
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                let shorterMessage = this.responseText.split(`{"lon":-77.6491578,"lat":37.5059814,"temp":`).join(`,"observation_time":`).split(`,"observation_time":`).join(`{"lat":37.5059814,"lon":-77.6491578,"temp":`).split(`{"lat":37.5059814,"lon":-77.6491578,"temp":`)

                for (let i = 0; i < shorterMessage.length; i++) {
                    if (i % 2 == 1) {
                        temp.push((shorterMessage[i].split(`{"value":`).join("").split(`,"units":"F"}`).join("")))
                    }

                }
                //console.log(`temp is: ${temp}`)


            }
        });

    }

    feelsLike(feelsLike, UTCtomorrow) {
        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                //console.log(this.responseText);
                let shorterMessage = this.responseText.split(`{"lon":-77.6491578,"lat":37.5059814,"feels_like":`).join(`,"observation_time":`).split(`,"observation_time":`).join(`{"lat":37.5059814,"lon":-77.6491578,"feels_like":`).split(`{"lat":37.5059814,"lon":-77.6491578,"feels_like":`)
                for (let i = 0; i < shorterMessage.length; i++) {
                    if (i % 2 == 1) {
                        feelsLike.push((shorterMessage[i].split(`{"value":`).join("").split(`,"units":"F"}`).join("")))
                    }

                }
                //console.log(`feelsLike is ${feelsLike}`)


            }
        });

        xhr.open("GET", `https://api.climacell.co/v3/weather/forecast/hourly?lat=37.5059814&lon=-77.6491578&unit_system=us&start_time=2020-08-12T11:00:00Z&end_time=${UTCtomorrow}&fields=feels_like&apikey=xJT1FBEW1QtGpWyCZqQptELe81osYG5M`);
        xhr.send(data);
    }

    humidity(humidity, UTCtomorrow) {
        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                //console.log(this.responseText);
                let shorterMessage = this.responseText.split(`{"lon":-77.6491578,"lat":37.5059814,"humidity":`).join(`,"observation_time":`).split(`,"observation_time":`).join(`{"lat":37.5059814,"lon":-77.6491578,"humidity":`).split(`{"lat":37.5059814,"lon":-77.6491578,"humidity":`)
                for (let i = 0; i < shorterMessage.length; i++) {
                    if (i % 2 == 1) {
                        humidity.push((shorterMessage[i].split(`{"value":`).join("").split(`,"units":"%"}`).join("")))
                    }

                }
                //console.log(`humidity is ${humidity}`)


            }
        });

        xhr.open("GET", `https://api.climacell.co/v3/weather/forecast/hourly?lat=37.5059814&lon=-77.6491578&unit_system=us&start_time=2020-08-12T11:00:00Z&end_time=${UTCtomorrow}&fields=humidity&apikey=xJT1FBEW1QtGpWyCZqQptELe81osYG5M`);
        xhr.send(data);
    }

    windSpeed(windSpeed, UTCtomorrow) {
        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                //console.log(this.responseText);
                let shorterMessage = this.responseText.split(`{"lon":-77.6491578,"lat":37.5059814,"wind_speed":`).join(`,"observation_time":`).split(`,"observation_time":`).join(`{"lat":37.5059814,"lon":-77.6491578,"wind_speed":`).split(`{"lat":37.5059814,"lon":-77.6491578,"wind_speed":`)
                for (let i = 0; i < shorterMessage.length; i++) {
                    if (i % 2 == 1) {
                        windSpeed.push((shorterMessage[i].split(`{"value":`).join("").split(`,"units":"mph"}`).join("")))
                    }

                }
                //console.log(`windSpeed is ${windSpeed}`)


            }
        });

        xhr.open("GET", `https://api.climacell.co/v3/weather/forecast/hourly?lat=37.5059814&lon=-77.6491578&unit_system=us&start_time=2020-08-12T11:00:00Z&end_time=${UTCtomorrow}&fields=wind_speed&apikey=xJT1FBEW1QtGpWyCZqQptELe81osYG5M`);
        xhr.send(data);
    }

    weatherCode(weatherCode, UTCtomorrow) {
        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                //console.log(this.responseText);
                let shorterMessage = this.responseText.split(`{"lon":-77.6491578,"lat":37.5059814,"weather_code":`).join(`,"observation_time":`).split(`,"observation_time":`).join(`{"lat":37.5059814,"lon":-77.6491578,"weather_code":`).split(`{"lat":37.5059814,"lon":-77.6491578,"weather_code":`)
                for (let i = 0; i < shorterMessage.length; i++) {
                    if (i % 2 == 1) {
                        weatherCode.push((shorterMessage[i].split(`{"value":"`).join("").split(`"}`).join("")))//.split(`,"units":"mph"}`).join("")))
                    }

                }
                //console.log(`weatherCode is ${weatherCode}`)

            }
        });

        xhr.open("GET", `https://api.climacell.co/v3/weather/forecast/hourly?lat=37.5059814&lon=-77.6491578&unit_system=us&start_time=2020-08-12T11:00:00Z&end_time=${UTCtomorrow}&fields=weather_code&apikey=xJT1FBEW1QtGpWyCZqQptELe81osYG5M`);
        xhr.send(data);
    }

}
