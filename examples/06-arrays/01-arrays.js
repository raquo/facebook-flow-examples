/* @flow */
'use strict';


// Very rough definitions, not Flow-specific:
// Tuples are lists of different things (possibly of different type)
// Arrays are lists of similar things (of the same type)


// Flow lets you define tuple types:
type Time = [number, number, string];

var now: Time = [12, 54, 'am'];

// #FlowExpectError – last element in the tuple must be a string
var badTime: Time = [12, 54, 20];

// With static access, Flow knows which exact type we're getting
var minute: number = now[1];

// With dynamic access, however, Flow can only figure out the supertype
// of all tuple elements, it does not know the type of the exact element you're getting
// #FlowExpectError – the type of  now[now.length - 1]  is  number | string
var partOfDay: string = now[now.length - 1];


// Arrays can be typed:
var list: Array<number|string> = [];

for (var i = 0; i < 10; i++) {
    // #FlowExpectError – can't put mistyped elements in a typed array
    list[i] = true;
    list[i] = (i % 2 == 0 ? 'x' : i);
}

list.forEach((el, j) => {
    // #FlowExpectError – Flow does not refine types automagically. typeof el === number | string
    var x: number = (j % 2 == 0 ? el.length : el);
    // Refine your types explicitly!
    var y: number = (typeof el === 'string' ? el.length : el);
});
