module.exports = class unbox {
    constructor() {
        this.name = 'unbox'
        this.alias = ['unbox']
        this.usage = '!unbox'
    }
    run(message,ight) { 
        if (lastBoy == undefined){
            message.channel.send("I just searched my records and I cannot seem to find who the last unboxer was." +
            " You should set it next time by calling !setboy but anyway, ONTO THE UNBOXING!")
        } else {
            message.channel.send("Last unboxing, the unboxer was " + lastBoy)
        }
        setTimeout(function(){
            message.channel.send("Today's unboxer is... drum roll please...")
        },1000)
        var whichBoyNum = Math.floor(Math.random() * Math.floor(3));
        var whichBoy;
        switch (whichBoyNum){
            case 0:
                whichBoy = "Junaid"
                break
            case 1:
                whichBoy = "Jahanzeb"
                break
            case 2:
                whichBoy = "Umar"
                break
        }
        if (whichBoy == lastBoy){
            setTimeout(function(){
                message.channel.send("Well that's boring... it's " + whichBoy + " again...")
            }, 3000)
            //setLastBoy(whichBoy)
            lastBoy = whichBoy
        } else {
            setTimeout(function() {
                message.channel.send(whichBoy +"!!! This way! The [loot]box is awaiting your attention!")
            }, 3000)
            lastBoy = whichBoy
        }
        
    }
    
}