var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
module.exports = class rainCheck {
    constructor() {
        this.name = '-raincheck'
        this.alias = ['rc']
        this.usage = '!raincheck'
    }
    //run(client,message,ight)hinoyesLW{
    run(message, ight) {

        this.deleteTheMessage(message,ight)

        var data = null;
        var xhr = new XMLHttpRequest();

        let singleDigitDay = ""
        let singleDigitMonth = ""
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        if (tomorrow.getMonth()+1 - 10 < 0){
            singleDigitMonth = "0"
        }
        if (tomorrow.getDate() - 10 < 0){
            singleDigitDay = "0"
        }
        let UTCtomorrow = `${tomorrow.getFullYear()}-${singleDigitMonth}${tomorrow.getMonth()+1}-${singleDigitDay}${tomorrow.getDate()}`

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                //console.log(this.responseText);
                let shorterMessage = this.responseText.split(`{"lon":-77.6491578,"lat":37.5059814,"precipitation_probability":`).join(`,"observation_time":`).split(`,"observation_time":`).join(`{"lat":37.5059814,"lon":-77.6491578,"precipitation_probability":`).split(`{"lat":37.5059814,"lon":-77.6491578,"precipitation_probability":`)
                let messageOnlyValue = []
                let counter = 0
                let highestRainProbability = 0;
                for (let i = 0; i < shorterMessage.length; i++) {
                    if (i % 2 == 1) {
                        messageOnlyValue.push((shorterMessage[i].split(`{"value":`).join("").split(`,"units":"%"}`).join("")))
                        let curr = parseInt(messageOnlyValue[counter], 10)
                        curr = curr * 2 + 5 //test algorithm
                        if (highestRainProbability < curr) {
                            highestRainProbability = curr
                        }
                        counter++
                    }

                }
                //message.channel.send(messageOnlyValue)

                message.channel.send("The highestRainProbability is " + highestRainProbability + "%")
                if (highestRainProbability >= 30) {
                    message.channel.send("It might rain today, be cautious")
                } else {
                    message.channel.send("Seems dry today.")
                }
            }
        });

        //xhr.open("GET", `https://api.climacell.co/v3/weather/forecast/hourly?lat=37.5059814&lon=-77.6491578&unit_system=us&start_time=now&end_time=${UTCtomorrow}&fields=temp%2Cfeels_like%2Chumidity%2Cwind_speed%2Cprecipitation_probability%2Cweather_code&apikey=xJT1FBEW1QtGpWyCZqQptELe81osYG5M`);
        xhr.open("GET", `https://api.climacell.co/v3/weather/forecast/hourly?lat=37.5059814&lon=-77.6491578&unit_system=us&start_time=now&end_time=${UTCtomorrow}&fields=precipitation_probability&apikey=xJT1FBEW1QtGpWyCZqQptELe81osYG5M`);
        xhr.send(data);

    }
    deleteTheMessage(message, ight){
        message.delete(message);
        
    }
}
