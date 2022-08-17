module.exports = class setboy {
    constructor() {
        this.name = 'setboy'
        this.alias = ['sb']
        this.usage = '!setboy'
    }
    run(message,ight) { 
        //import lastBoy from './Users/billytheredneck/Test/commands/unbox.js';
        //setLastBoy(ight[1])
        lastBoy = ight[1]
        message.channel.send("The last unboxer has been set to: " + lastBoy)
    }
    /*
    setLastBoy(name){
        lastBoy=name;
    }
    */
}