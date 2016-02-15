/* @flow */
'use strict';

var Car = require('./car');


class TeslaCar extends Car {

    batteryCapacity: number;

    constructor (model: string, year: number, batteryCapacity: number) {
        super('Tesla', model, year.toString());

        this.batteryCapacity = batteryCapacity;
    }

    drive (distance: number, heading: number): boolean {
        return true;

         // super.drive(distance, heading);

        //return Car.drivex(distance);
    }

    // Flow does not allow method signatures in parent / child classes to differ.
    // #FlowExpectError – honk method signature is incompatible with the method signature of Car.honk
    honk (violently: boolean) {
        super.honk(violently ? 15 : 2);
    }

    park () {
        console.log('TeslaCar parked');
    }

    static typicalWheelCount: string = 'four';
    static isTheFuture: boolean;
}

TeslaCar.isTheFuture = true;

/* global Class */
module.exports = (TeslaCar: Class<TeslaCar>);
