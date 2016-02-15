/* @flow */
'use strict';



// This object is unsealed because it was declared with no fields.
// This means:
// * we can add properties to this object after declaration
// * we can change the types of those properties
var goo = {};

goo.color = 'fluorescent green';

var color: string = goo.color;

// NOT AN ERROR IN FLOW – You are free to change property types of unsealed objects. `goo.color` is typed as a number now.
goo.color = 25;

var hue: number = goo.color;

// #FlowExpectError – Error because `var color` was declared to be string while `color` property is a number now.
color = goo.color;

// #Gotcha – NOT AN ERROR IN FLOW – Flow does not check access to non-existent properties of *unsealed* objects
var density: number = goo.density;
