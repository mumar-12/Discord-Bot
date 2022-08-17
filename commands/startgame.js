module.exports = class startgame {
    constructor(){
        this.name = 'startgame'
        this.alias = ['sg']
        this.usage = '!startgame'
    }
    run(message,ight) { 
        //game = true
        message.channel.send("ight is " + ight)
        message.channel.send("message is " + message)
        message.channel.send("player_1 is " + player_1)
        message.channel.send("player_2 is " + player_2)
        curr_player = message.author.username;
        player_1 = message.author.username;
        player_2 = ight[1].username;
        global.board = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]
        message.channel.send(
                      "NEW VERSION\n" + 
                      "__" + board[0][0] + " |  " + board[0][1] + "  | " + board[0][2] + "__\n" +
                      "__" + board[1][0] + " |  " + board[1][1] + "  | " + board[1][2] + "__\n" +
                      board[2][0] + " |  " + board[2][1] + "  | " + board[2][2]  
                      
        )
        
    }
}