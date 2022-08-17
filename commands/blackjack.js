const Discord = require('discord.js');
module.exports = class blackjack {
    constructor() {
        this.name = 'blackjack'
        this.alias = ['bj']
        this.usage = '!blackjack'
    }
    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
    async run(message, ight) {
        message.channel.send("There are no special rules in this blackjack. However, let me go over some syntax:\n" +
            "1.) When typing in your money, simply type in a number. You don't need the '!' or '$' \n" +
            "2.) Furthermore, simply type in 'hit' or 'hold' when you want to perform that action.\n" +
            "3.) You will have 10 seconds for each move before I crash the game :JahanzebKek:\n" +
            "4.) When you want to stop playing, just type in 'stopgame'\n" +
            "-------------------------------------------------------------------------------------")

        let playerHand = []
        let clappyHand = []
        let matchHistory = []
        let playerMoney = 500
        let stillPlaying = true
        let funnyGuy = false
        let moneyBetWorks = false
        message.channel.send("Blackjack now loading...")
        //while(stillPlaying){
        message.channel.send("How much do you want to bet? You currently have $" + playerMoney);
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        collector.on('collect', message => {
            //this.sleep(10000)
            let msg = message.content
            let number = msg.split(" ")
            if (number[0] > playerMoney) {
                message.channel.send("What the- You don't have that much money! Try again...")
                collector.stop()
            } else if (number[0] <= playerMoney) {
                playerMoney -= number[0]
                message.channel.send(`You bet $${number[0]}, and now have $${playerMoney}.`)
                collector.stop()
                moneyBetWorks = true
            } else if (number[0 == 'stopgame']) {
                message.channel.send("This game is over. Thanks for playing!")
                collector.stop()
                stillPlaying = False;
            } else {
                message.channel.send("So you're a funny guy huh? Well Ha! Since you didn't type in a number, this round is over! I Win.")
                //MATCH HISTORY += FORFEIT TO CLAPPY
                collector.stop()
                funnyGuy = true
            }
        })
        /*
        if (!stillPlaying){
            break
        } else if (funnyGuy){
            continue
        }
        */
       message.channel.send("Round 1")
        if (moneyBetWorks) {
            let playerNumber = Math.floor(Math.random() * Math.floor(10)) + 1;
            let lowerScore = 0
            let upperScore = 0
            if (playerNumber == 1) {
                //ADD Ace to playerHand
                playerHand.push('A')
                lowerScore += 1
                upperScore += 10
            } else {
                //ADD NUMBER TO playerHand
                playerHand.push(playerNumber)
                lowerScore += playerNumber
                upperScore += playerNumber
            }
            message.channel.send(playerHand)
        }


        //}

        if (!stillPlaying) {
            message.channel.send("after game")
        }

        //PUT MATCH HISTORY HERE, AS WELL AS FINAL MONEY
    }
}