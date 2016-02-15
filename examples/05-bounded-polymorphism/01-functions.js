/* @flow */
'use strict';



// This defines a function that takes one argument, an object
// `point` that must have properties x and y, both numbers.

// Note that `point` can also contain other fields
// (see 03-objects/01-sealed.js for object types).

// Most importantly, type information is preserved – Flow knows
// that this function returns the same type as is given to it
// in `point` argument.
function printCoordinates<T: {x: number, y: number}> (point: T): T {
    var x: number = point.x;
    var y: number = point.y;

    // #FlowExpectError – `point` is not guaranteed to have a `z` field.
    var z: number = point.z;

    console.log('x: ' + Math.abs(x) + ', y: ' + Math.abs(y));

    return point;
}

var point2D = {x: 1, y: -1};
var point3D = {x: 1, y: -1, z: 42};

// Flow knows that the function returns the same type
// as it accepts as an argument.
// So it knows that its output contains both `x` and `z`
// fields because they are present on `point3D`
var x3D: number = printCoordinates(point3D).x;
var z3D: number = printCoordinates(point3D).z;

// #FlowExpectError – result does not have a `z` field because `point2D` does not have one
var z2D: number = printCoordinates(point2D).z;

