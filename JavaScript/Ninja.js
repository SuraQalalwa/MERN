class Ninja{
    constructor(name,health=10) {
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log('Name:'+''+this.name)
    }
    showStats(){
        console.log(
            'Name:'+''+this.name,
            'Health:'+''+this.health,
            'Speed:'+''+this.speed,
            'Strength:'+''+this.strength
            )
    }
    drinkSake(){
        this.health +=10;
        console.log('drinkSake:'+''+this.health)
        return this;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
