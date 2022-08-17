module.exports = class names {
    constructor() {
        this.name = 'names'
        this.alias = ['names']
        this.usage = '!names'
    }
    run(message,ight) { 
        message.channel.send("The NUEDA Team Members are: \n" +
        "**Kriya** :unicorn:\n" + 
        "**Kathy** :sheep:\n" +
        "**Kuukua** :lizard:\n" +
        "**Luis** :shark:\n" +
        "**Mohamed** :koala: \n" +
        "**Umar** :sloth::shark:")
    }
}