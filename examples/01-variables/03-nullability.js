/* @flow */
'use strict';



// Variables in Flow can be declared as either non-nullable (by default)...
var x: number = 5;

// #FlowExpectError – non-nullable types can not be assigned null value
x = null;


// ... Or nullable (note the question mark syntax)
var y: ?string = 'hello world';

// Nullable types are also undefined-able.
y = undefined;
y = null;



try {
    // #FlowExpectError – nullable types can not be used as if they were non-nullable
    var length1 = y.length;
} catch (e) {
    console.warn('JS Exception:');
    console.error(e);
}

// We can refine the type of `y` to safely use it as a non-nullable type
if (typeof y === 'string') {
    var length2 = y.length;
}

// #Gotcha – NOT AN ERROR IN FLOW – `y` can not be a `number`, so
// Flow does not type check this code because it knows that this code will never run.
// Flow does not however report this as dead code.
if (typeof y === 'number') {
    var length3 = y.length; // there is no `length` property on `number`
}



// Variables declared without an explicit type can change their type
// with assignments, so they can become null. However their type in that
// scenario will be exactly null, not e.g. null-or-string.

var message = 'hello';

message = null;

// #FlowExpectError – message is null now, can not flow into string now
var z: string = message;
