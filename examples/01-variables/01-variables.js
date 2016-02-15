/* @flow */
'use strict';



// `x` is declared to be a `number` explicitly.
// This means Flow will throw an error if we try to assign
// any value to `x` which is not a `number`.
var x: number = 5;

x = 55;

// #FlowExpectError – string does not match type of x, which is number
x = 'five';



// If we don't declare variable type explicitly, it's not sealed.
var y = true;

y = false;

// We are free to change the type any time by assigning a new value to the variable
y = 'hello';

// #FlowExpectError – Flow still type checks `y`, it knows which type it is currently.
var z: boolean = y;
