class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name,cost, power, res){
        super(name,cost)
        this.power=power;
        this.res=res;

    }
    attack(target){
        const attack = (target.res * this.power)
        target.res -= attack;
        console.log (`${this.name} attacked ${target.name}, dealing ${attack} attack`);
        // console.log(this.res);
    }  
}

class Effect extends Card{
    constructor(name,cost, stat, magnitude,target){
        super(name,cost)
        this.stat=stat;
        this.magnitude=magnitude;
        this.target=target;
    }
    play(target) {
        if (target instanceof Unit) {
            if (this.stat === "resilience") {
                target.res += this.magnitude;
            }
            else {
                target.power += this.magnitude;
            }
            if (this.magnitude > 0){
                var direction = "increase";
            }
            else {
                var direction = "decrease";
            }
            console.log(`${direction} ${target.name} ${this.stat} by ${this.magnitude}`);
            } 
            else {
            throw new Error( "Target must be a unit!" );
            }
        }
        
}

const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)
const HardAlgorithm = new Effect("Hard Algorithm", 2, "resilience", 3)
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "resilience", -2)
const PairProgramming = new Effect("Pair Programming", 3, "power", 2)

HardAlgorithm.play(RedBeltNinja)
PairProgramming.play(RedBeltNinja)
UnhandledPromiseRejection.play(BlackBeltNinja)
RedBeltNinja.attack(BlackBeltNinja)
