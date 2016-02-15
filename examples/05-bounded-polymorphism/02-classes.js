/* @flow */
'use strict';



var Car = require('../resources/classes/car');
var TeslaCar = require('../resources/classes/tesla-car');


class ParkStatus<T: Car> {

    car: T;

    constructor (car: T) {
        this.car = car;
    }

    getCar (): T {
        return this.car;
    }
}

function park<T: Car> (car: T): ParkStatus<T> {
    car.park();
    return new ParkStatus(car);
}

var subaru = new Car('Subaru', 'Forester', '2016');
var tesla = new TeslaCar('Model X', 2016, 85000);



// This works. park(car: Car) returns ParkStatus<Car>
var subaruParkStatus1: ParkStatus<Car> = park(subaru);

// Similarly for TeslaCar
var teslaParkStatus1: ParkStatus<TeslaCar> = park(tesla);

// This also works. The actual returned type is ParkStatus<TeslaCar>
// but we put it in a variable typed ParkStatus<Car>.
// We can do that because TeslaCar is a subtype of Car (@TODO better explanation)
var parkStatus1: ParkStatus<Car> = park(tesla);

// #FlowExpectError – Car is not a subtype of TeslaCar, so this does not work
var parkStatus2: ParkStatus<TeslaCar> = park(subaru);



// Type inference works as expected
var parkStatus3 = park(tesla);
var parkStatus4 = park(subaru);

var tesla2: TeslaCar = parkStatus3.getCar();
var subaru2: Car = parkStatus4.getCar();

// #FlowExpectError – we parked a Car, not a TeslaCar
var tesla3: TeslaCar = parkStatus4.getCar();



