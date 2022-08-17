module.exports = class getboy {
    constructor() {
        this.name = 'getboy'
        this.alias = ['gb']
        this.usage = '!getboy'
    }
    run(message,ight) { 
        if(lastBoy == undefined){
            message.channel.send("I don't know who the last unboxer was :scream::scream: ")
            message.channel.send("Please don't shoot me, please don't shoot me, please don't shoot me!")
        } else {
        message.channel.send("The last unboxer was " + lastBoy)
        }
    }
}