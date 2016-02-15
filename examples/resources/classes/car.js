/* @flow */
'use strict';



class Car {

    // This is how you explicitly annotate instance properties in Flow
    make: string;
    year: number;

    model;

    constructor (make: string, model: string, year: string) {

        // Type of `this.make` is explicitly defined above, on line 9
        this.make = make;

        // "this.model: string = model" syntax is not supported,
        // but this.model is inferred to be a string in this case
        this.model = model;

        // #FlowExpectError – this.year is a number, but we are trying to make it a string
        this.year = year;
    }

    drive (distance: number, heading: number): boolean {
        return (distance > 0 && distance < this.maxRange && heading >= 0 && heading < 360);
    }

    honk (times: number) {
        console.log(new Array(times + 1).join('honk '));
    }

    park () {
        console.log('Car parked');
    }

    // This Flow syntax is only supported if esproposal.class_static_fields=enable
    // is added to [options] in .flowconfig
    maxRange: number = 500;
}

/* global Class */
module.exports = (Car: Class<Car>); // @TODO why do we need to specify this Class thing?
