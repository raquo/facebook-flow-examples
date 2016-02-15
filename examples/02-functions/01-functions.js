/* @flow */
'use strict';


var times2 = function (text: string, numTimes: number = 5): string {
    return times(text, numTimes);
};

var times = function (text: string, numTimes: number): string {
    // Flow makes sure that usages of arguments inside the function
    // are type safe according to declared argument types
    // #FlowExpectError – numTimes is a number
    var x: number = numTimes.length;
    return new Array(numTimes + 1).join(text);
};



// #FlowExpectError – Flow type checks arguments at call site too
var x: string = times('hello ', 'five');

// #FlowExpectError – Flow type checks function output too
var y: number = times('hello ', 3);

var z: string = times('hello ', 3);

// #FlowExpectError – Not enough arguments
var xx: string = times('hello ');

// Flow supports default arguments
var yy: string = times2('hello ');


// Flow type checks your callbacks, how awesome is that?
var model = {
    handleClick: function (newValue: number, multiplier: number): boolean {
        return Math.random() > newValue * multiplier;
    },
    handleSubmit: function (newValue: string): number {
        return Math.random() * newValue.length;
    }
};

// You could inline this type, I'm just extracting it for clarity
type OnClickType = (value: number, mult: number) => boolean;

var view = function (onClick: OnClickType): string {
    onClick(12, 34);
    // #FlowExpectError – invocations are checked too
    onClick(12, 'ya');
    return 'Blah blah';
};

// #FlowExpectError – the signature of this callback does not match OnClickType
view(model.handleSubmit);

view(model.handleClick);



// Exceeding function arity is not an error in Flow.
// For example, Array.prototype.forEach expects a callback with two arguments:
// (element, index). Here we provide a callback that only has one argument.
// Flow knows this, but does not consider this an error for our convenience.
[3, 4, 5].forEach((element) => {
    var x: number = element * 2;
});

// #Gotcha – exceeding arity is allowed on any functions, not just callbacks
var foo: string = times('hello ', 3, 'blah');



// @TODO ESLint choken on the combination of Flow function signatures and fat arrows
var test = (text: string, numTimes: number = 5): string => {
    return times(text, numTimes);
};
