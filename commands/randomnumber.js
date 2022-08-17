module.exports = class rnd {
    constructor() {
        this.name = 'randomnumber'
        this.alias = ['rnd']
        this.usage = '!rnd'
    }
    run(message,ight) { 
        var num = ight[1]
        var willIWork = Math.floor(Math.random() * Math.floor(5));
        if (willIWork == 0) {
            message.channel.send("These controls seem to be damaged! Have no fear, I’m sure I can do it! Arrgh...this isn't working!")
            muted = true
                setTimeout(function (){
                    muted=false
                    message.channel.send("Rebooted!")
                }, 5000)
        } else {
            message.channel.send("Your random number is... " + (Math.floor(Math.random() * Math.floor(num)) + 1) )
        }
    }
}