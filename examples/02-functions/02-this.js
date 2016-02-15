/* @flow */
'use strict';

var car = {
    make: 'Nissan',
    model: 'Pathfinder',

    // `this` is context-dependent in Javascript.
    toString: function () {
        return this.make + ' (' + this.model + ')';
    }
};



// In this case, `this` is `car` inside the `toString` function,
// because we call that function on `car`.
var x = car.toString();

// A reference to `car.toString` does not include setting `car` as its context.
var carToString = car.toString;

// So when `carToString()` is called, `this` inside `toString` is not `car`,
// it's actually `window`, the global object, which acts as a sort of "default `this`".

// This has nothing to do with Flow. This is Javascript for you.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

// #FlowExpectError – Flow recognizes this mistake
var y = carToString();



// Flow also recognizes that Function.bind lock the function's context to its argument
var boundCarToString = car.toString.bind(car);
var z = boundCarToString();
