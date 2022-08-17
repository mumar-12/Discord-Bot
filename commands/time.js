const moment = require("moment-timezone");

module.exports = class time {
    constructor() {
        this.name = 'time'
        this.alias = ['time']
        this.usage = '!time'
    }
    run(message,ight) { 
        //message.channel.send("Hello Traveler. The time is " + moment().tz("America/New_York").format("h:mm A"))
        const timezones = moment.tz.names();
        const randTimezone = timezones[Math.floor(Math.random() * timezones.length)];
        const now = moment.tz(randTimezone).format('h:mm A');
        const nowDay = moment.tz(randTimezone).format('MMMM Do');
        for( var i = 0; i < timezones.length; i++) { 
            if ( timezones[i].startsWith('Etc')) { 
                timezones.splice(i, 1); 
                i--; 
            }
        }
        message.channel.send("Hello Traveler. The time in the " + randTimezone + " timezone is " + now +" on " + nowDay + ".")

    }
}