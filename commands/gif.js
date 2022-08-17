module.exports = class gif {
    constructor(){
        this.name = 'gif'
        this.alias = ['g']
        this.usage = '!gif'
    }
    //run(client,message,ight)hinoyesLW{
    run(message,ight) { 
        switch (ight[1]){
            case 'eric':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Eric Andre Unimpressed.gif"] })
                break
            case 'yesss':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Yesss.gif"] })
                break
            case 'enjoythat':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/EnjoyThat.gif"] })
                break
            case 'nooice':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/NOOICE.gif"] })
                break
            case 'ora':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/CatchHands.gif"] })
                break
            case 'wrong':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Wrong.gif"] })
                break
            case 'fistbump':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Fa-la-la-la-la.gif"] })
                break
            case 'idk':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/IDK.gif"] })
                break
            case 'lblaugh':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Long Beach Laugh.gif"] })
                break
            case 'yesyes':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/M Bison Yes! Yes!.gif"] })
                break
            case 'badcomp':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Nice Competetion.gif"] })
                break
            case 'tea':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/The Tea.gif"] })
                break
            case 'window':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Throw You Out The Window.gif"] })
                break
            case 'whathesay':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/What Did He Just Say.gif"] })
                break
            case 'neverwin':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/You Never Win.gif"] })
                break
            case 'hurtmyear':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/You're Hurting My Ear.gif"] })
                break
            case 'highestfive':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Highest of Fives.gif"] })
                break
            case 'bigshaqno':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Big Shaq No.gif"] })
                break
            case 'bigshaqok':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Big Shaq Ok.gif"] })
                break
            case 'garretsmh':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Garret Shake Head.gif"] })
                break
            case 'amazing':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Squidward Amazing.gif"] })
                break
            case 'sweating':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Sweating.gif"] })
                break
            case 't1cringe':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Tyler1 Unimpressed.gif"] })
                break
            case 'devilno':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Yeah...no.gif"] })
                break
            case 'heheboy':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/HeheBoy.gif"] })
                break
            case 'crunk':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/CrunkAintDead.gif"] })
                break
            case 'byplead':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Baby Yoda Force.gif"] })
                break    
            case 'headpat':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Headpat!!!.gif"] })
                break;
            case 'hug':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Hug!!!.gif"] })
                break;
            case 'dealwit':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Deal With It.gif"] })
                break;
            case 'kidyes':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Lil Kid YESSSS.gif"] })
                break;
            case 'hahano':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Decepticon Yeah No.gif"] })
                break;
            case 'socceridk':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/soccer_shrug.gif"] })
                break;
            case 'joekek':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Angry_Joe-hanzeb_Kek.gif"] })
                break;
            case 'critidk':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/critikal_idk.gif"] })
                break;
            case 'bysigh':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/GroguSigh.gif"] })
                break;
            case 'bycon':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Grogu Confused.gif"] })
                break;
            case 'crwtf':
                message.channel.send(this.deleteTheMessage(message,ight), { files: ["./Images/Ronaldo_lol_wtf.gif"] })
                break;
            default:
                message.channel.send("I don't know that one. You either spelled it wrong" +
                " or the coding monkey didn't put it in. You should tell him to put it in. PUT IT IN UMAR!")

        }

    }
    deleteTheMessage(message, ight){
        message.delete(message);
        if(ight[2] != undefined && ight[2][1] == '@' && ight[1] == 'headpat'){
            return message.author.username + " gives " + ight[2] + " a headpat!"
        } else if (ight[2] != undefined && ight[2][1] == '@' && ight[1] == 'hug'){
            return message.author.username + " gives " + ight[2] + " a hug! :ScoobyShaggyHug:"
        } else if(ight[2] != undefined && ight[2][1] == '@'){
            return message.author.username + " responds to " + ight[2] + " with this gif! Zing!"
        }
        
    }
}
/* 
module.exports = { test
	name: 'gif',
	description: 'Embed a gif!',
	execute(message) {
		switch (ight[1]){
            case 'eric':
                message.channel.send({ files: ["./Images/Eric Andre Unimpressed.gif"] })
                break
            case 'yesss':
                message.channel.send({ files: ["./Images/Yesss.gif"] })
                break
            case 'enjoythat':
                message.channel.send({ files: ["./Images/EnjoyThat.gif"] })
                break
            case 'nooice':
                message.channel.send({ files: ["./Images/NOOICE.gif"] })
                break
            case 'ora':
                message.channel.send({ files: ["./Images/CatchHands.gif"] })
                break
            case 'wrong':
                message.channel.send({ files: ["./Images/Wrong.gif"] })
                break
            case 'fistbump':
                message.channel.send({ files: ["./Images/Fa-la-la-la-la.gif"] })
                break
            case 'idk':
                message.channel.send({ files: ["./Images/IDK.gif"] })
                break
            case 'lblaugh':
                message.channel.send({ files: ["./Images/Long Beach Laugh.gif"] })
                break
            case 'yesyes':
                message.channel.send({ files: ["./Images/M Bison Yes! Yes!.gif"] })
                break
            case 'spedcomp':
                message.channel.send({ files: ["./Images/Nice Competetion.gif"] })
                break
            case 'tea':
                message.channel.send({ files: ["./Images/The Tea.gif"] })
                break
            case 'window':
                message.channel.send({ files: ["./Images/Throw You Out The Window.gif"] })
                break
            case 'whathesay':
                message.channel.send({ files: ["./Images/What Did He Just Say.gif"] })
                break
            case 'neverwin':
                message.channel.send({ files: ["./Images/You Never Win.gif"] })
                break
            case 'hurtmyear':
                message.channel.send({ files: ["./Images/You're Hurting My Ear.gif"] })
                break
            case 'highestfive':
                message.channel.send({ files: ["./Images/Highest of Fives.gif"] })
                break
            case 'bigshaqno':
                message.channel.send({ files: ["./Images/Big Shaq No.gif"] })
                break
            case 'bigshaqok':
                message.channel.send({ files: ["./Images/Big Shaq Ok.gif"] })
                break
            case 'garretsmh':
                message.channel.send({ files: ["./Images/Garret Shake Head.gif"] })
                break
            case 'amazing':
                message.channel.send({ files: ["./Images/Squidward Amazing.gif"] })
                break
            case 'sweating':
                message.channel.send({ files: ["./Images/Sweating.gif"] })
                break
            case 't1cringe':
                message.channel.send({ files: ["./Images/Tyler1 Unimpressed.gif"] })
                break
            case 'devilno':
                message.channel.send({ files: ["./Images/Yeah...no.gif"] })
                break
            case 'heheboy':
                message.channel.send({ files: ["./Images/HeheBoy.gif"] })
                break
            default:
                message.channel.send("I don't know that one. You either spelled it wrong" +
                " or the coding monkey didn't put it in. You should tell him to put it in. PUT IT IN UMAR!")

        }
	},
};
*/