
class Traveler {
    constructor(name) {
        this._name = name;
        this._food = 1;
        this._isHealthy = true;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }

    get food(){
        return this._food;
    }

    set food(newFood){
        this._food = newFood;
    }

    get isHealthy(){
        return this._isHealthy;
    }

    set isHealthy(newIsHealthy){
        this._isHealthy = newIsHealthy;
    }

    hunt(){ this.food += 2};
    eat(){
        if (this.food > 0) {
            this.food -= 1;
        } else {
            this.isHealthy = false;
        }
    }
}

class Wagon {
    constructor(capacity) {
        this._capacity = capacity;
        this._passengerList = [];
    }

    get capacity(){
        return this._capacity;
    }

    set capacity(newCapacity){
        this._capacity = newCapacity;
    }

    get passengerList(){
        return this._passengerList;
    }

    set passengerList(newPassengerList){
        this._passengerList = newPassengerList;
    }

    getAvailableSeatCount(){
        return this.capacity - this.passengerList.length;
    }

    join(traveler){
        if (this.getAvailableSeatCount() !== 0) {
            this.passengerList.push(traveler);
        }
    }

    shouldQuarantine(){
        let isSick = false;
        this.passengerList.forEach(element => {
            if(element.isHealthy === false){
                isSick = true;
            }
        });
        return isSick;
    }

    totalFood(){
        return this.passengerList.reduce((amountFood,element)=> amountFood += element.food,0);
    }
}

class Hunter extends Traveler{
    constructor(name){
        super(name);
        this._food = 2
    }

    hunt(){
        this._food += 5;
    }

    eat(){
        if(this._food === 0){
            this.isHealthy = false;
        }else if(this._food === 1){
            this._food -= 1;
            this.isHealthy = false;
        }else{
            this._food -= 2;
        }
    }

    giveFood(traveler, numOfFoodUnits){
        if(this._food >= numOfFoodUnits){
            let amountFood = 0;
            amountFood = numOfFoodUnits;
            this._food -= numOfFoodUnits;
            traveler.food += amountFood;
        }
    }
}

class Doctor extends Traveler{
    constructor(name){
        super(name);
    }

    heal(traveler){
        if(traveler.isHealthy === false){
            traveler.isHealthy = true;
        }
    }
}

