/* @flow */
'use strict';



// Flow understands block-scope variables!

let size: number = 5;

if (Math.random() > 0.5) {
    let count = 0;
    for (let i = 0; i < 11; i++) {
        count += size;
    }
}

try {
    /* global count */
    // #FlowExpectError – count is not defined in this scope
    var c = count;
} catch (e) {
    console.warn('JS exception:');
    console.error(e);
}



// Flow understands constants!

const MULTIPLE = 2.5;

// THIS WOULD HAVE BEEN AN ERROR IN FLOW. It's also a syntax error in JS, so I've commented it out.
// MULTIPLE = 5;
