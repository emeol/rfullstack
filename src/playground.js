class Car{
    constructor(){
        this.wheels=4;
        this.type='Hatchback'
    }

    alertBrand(){
        console.log('hey')
    }
}

class Ford extends Car{

}

const car = new Ford();
console.log(car.wheels);