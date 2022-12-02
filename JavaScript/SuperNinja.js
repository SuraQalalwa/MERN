class Ninja{
    constructor(name,health=10) {
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log('Name:'+''+this.name)
        return this;
    }
    showStats(){
        console.log(
            'Name:'+''+this.name,
            'Health:'+''+this.health,
            'Speed:'+''+this.speed,
            'Strength:'+''+this.strength
            )
        return this;
    }
    drinkSake(){
        this.health +=10;
        // console.log('Health:'+''+this.health)
        return this;
    }
}
///////////////////////////////////////////////////////
class Sensei extends Ninja {
    constructor(name) {
        super(name,210);
        this.wisdom=10;
        this.speed=10;
        this.strength=10;
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        const Sake = super.drinkSake();
    }

}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
