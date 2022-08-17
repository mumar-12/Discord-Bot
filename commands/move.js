module.exports = class move {
    constructor(){
        this.name = 'move'
        this.alias = ['move']
        this.usage = '!move'
    }
    
    run(message,ight) { 
        message.channel.send(
            "curr_player is: " + curr_player + " player_1 is: " + player_1 + " player_2 is: " + player_2
        )
    }
}