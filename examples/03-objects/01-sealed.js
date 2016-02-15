/* @flow */
'use strict';



// When you declare an object variable, you seal its type.
// You can't add fields to that object after creation.

// Except if you declared an empty object. Then see objects/unsealed.js

type Car = {
    make: string,
    model: string
};

var car: Car = {
    make: 'Nissan',
    model: 'Pathfinder'
};

// Even though `wheel` was declared without an explicit type, it now has the type of {radius: number}
var wheel = {
    radius: 15,
    width: null
};



// #FlowExpectError - `foo` is not a property of `Car`
car.foo = 'bar';

// #FlowExpectError - `isAlloy` is not a property of `wheel`.
wheel.isAlloy = true;

// #FlowExpectError - `radius` is implied to be a non-nullable number.
wheel.radius = null;

// #FlowExpectError - `width` is implied to be null.
wheel.width = 50;

// Remember – Javascript code always gets executed regardless of Flow annotations or errors.
console.log('wheel.width:', wheel.width);



console.log('car.make (before):', car.make);

// #Gotcha – NOT AN ERROR IN FLOW – Flow lets you delete a required property
delete car['make'];

console.log('car.make (after):', car.make);

// #Gotcha – NOT AN ERROR IN FLOW – Flow lets you access a deleted property
// as if it was still there, even though it's undefined now
var carMake: string = car.make;



// #FlowExpectError - required property `make` is not provided
var car2: Car = {
    model: 'Pathfinder'
};

// #Gotcha – NOT AN ERROR IN FLOW – Can declare car3 with properties that are non existent on Car
var car3: Car = {
    make: 'Nissan',
    model: 'Pathfinder',
    foo: 'bar'
};

// #FlowExpectError - However, we can't use property `foo` without checking for its existence
console.log('car3.foo:', car3.foo);

// #Gotcha – NOT AN ERROR IN FLOW – see gotchas/if-conditions.js
if (car3.foo) {
    console.log('car3.foo:', car3.foo);
}
