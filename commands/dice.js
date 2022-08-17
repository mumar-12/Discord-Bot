module.exports = class dice {
    constructor() {
        this.name = 'dice'
        this.alias = ['d']
        this.usage = '!dice'
    }
    run(message,ight) { 
        var roll = Math.floor(Math.random() * Math.floor(6)) + 1;
        switch (roll){
            case 1:
                message.channel.send(":one:")
                break
            case 2:
                message.channel.send(":two:")
                break
            case 3:
                message.channel.send(":three:")
                break
            case 4:
                message.channel.send(":four:")
                break
            case 5:
                message.channel.send(":five:")
                break
            case 6:
                message.channel.send(":six:")
                break
        }
    }      
}