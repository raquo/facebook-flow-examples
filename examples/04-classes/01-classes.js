/* @flow */
'use strict';



var Car = require('../resources/classes/car');
var TeslaCar = require('../resources/classes/tesla-car');



var forester1: Car = new Car('Subaru', 'Forester', '2014');

// #FlowExpectError – a Car is not necessarily a TeslaCar
var forester2: TeslaCar = new Car('Subaru', 'Forester', '2015');

var tesla1: Car = new TeslaCar('Model X', 2015, 85000);
var tesla2: TeslaCar = new TeslaCar('Model 3', 2016, 90000);



// #FlowExpectError – `Car.year` is a number, not a boolean
var year1: boolean = forester1.year;
var year2: number = forester1.year;



// #FlowExpectError – `Car` does not have `batteryCapacity` property
var batteryCapacity1: number = forester1.batteryCapacity;

// #FlowExpectError – Even though tesla1 is an instance of `TeslaCar`, it is declared with type `Car`
var batteryCapacity2: number = tesla1.batteryCapacity;

var batteryCapacity3: number = tesla2.batteryCapacity;



// #FlowExpectError – Flow does not allow static class property access on class instances
var isTheFuture1: boolean = tesla2.isTheFuture;

// #FlowExpectError – `TeslaCar.isTheFuture` is a boolean, not a number
var isTheFuture2: number = TeslaCar.isTheFuture;

var isTheFuture3: boolean = TeslaCar.isTheFuture;



try {
    // #FlowExpectError – `TeslaCar` does not have a method to fly. We're not quite there yet :(
    tesla2.fly();
} catch (e) {
    console.warn('JS exception:');
    console.error(e);
}

tesla2.drive(100, 0);

try {
    // #FlowExpectError – `Car` needs a parameter to honk()
    forester1.honk();
} catch (e) {
    console.warn('JS exception:');
    console.error(e);
}

// #Gotcha – THIS ACTUALLY IS AN ERROR IN FLOW, and yet this does not fail because
// the error is suppressed by a FlowExpectError comment in tesla-car.js, right above
// the `honk` method definition. So don't use error suppression too much.
tesla2.honk('xxxx');


