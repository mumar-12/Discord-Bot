module.exports = class help {
    constructor() {
        this.name = 'help'
        this.alias = ['help']
        this.usage = '!help'
    }
    run(message,ight) { 
        message.channel.send("Allow me to introduce myself! I am a CL4P-TP steward bot," + 
        " but my friends call me Claptrap! Or they would, if any of them were still alive. Or" +
        " had existed in the first place! Oh -- I've got something for you!")
        message.channel.send("*humming*")
        setTimeout(function() {
            message.channel.send(
            "**!g GIF_NAME** will give you a gif\n" +
            "**!unbox** will give you one of The Boys to do the unboxing\n" +
            "**!sb NAME** will set the last unboxer to whatever NAME is\n" +
            "**!gb** will give you the last unboxer\n" +
            "**!time** will give you you the time\n" +
            "**!ht NUM** will flip a coin NUM amount of times and tell you the winner\n" +
            "**!rnd NUM** will give you a random number between 1 and NUM\n" +
            "**!d** will roll a dice and give you the result\n")
        }, 5000)
        
    }
}