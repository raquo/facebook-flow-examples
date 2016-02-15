/* @flow */
'use strict';

console.warn('=== gotchas/if-conditions.js ===');

type Message = {
    text: string,
    isBig: boolean
};

var msg: Message = {
    text: 'hello world',
    isBig: true
};

var printMessage = function (str: string) {
    console.log(str);
};

// #FlowExpectError - Error because bar property does not exist
msg.bar = 'bar';

// #FlowExpectError - Error because foo property does not exist
msg.isBig = (msg.foo === 'bar');

try {
    // #FlowExpectError - Error because foo property does not exist, let alone foo.bar
    msg.isBig = (msg.foo.bar === 255);
} catch (e) {
    console.warn('JS exception:');
    console.error(e);
}

// #FlowExpectError - Error because foo property does not exist
printMessage(msg.foo);



// #Gotcha – NOT AN ERROR IN FLOW – foo property does not exist, but printMessage requires a string
if (msg.foo) {
    printMessage(msg.foo);
}

// #Gotcha – NOT AN ERROR IN FLOW – foo property does not exist, but printMessage requires a string
if (!msg.foo) {
    printMessage(msg.foo);
}

// #Gotcha – NOT AN ERROR IN FLOW – foo property does not exist, but no error because of non-strict comparison (==)
if (msg.foo == 'red') {
    console.log('foo is red');
    // #FlowExpectError - Error because printMessage requires a string
    printMessage(msg.foo);
}

// Partial workaround: Use ESLint's eqeqeq rule: http://eslint.org/docs/rules/eqeqeq.html

// #FlowExpectError – as of Flow v0.21.0, this produces an error! Yay!
if (msg.foo === 'red') {
    console.log('foo is red');
}

// #FlowExpectError – as of Flow v0.21.0, this produces an error! Yay!
if (msg.foo > 5) {
    console.log('foo is biiiig');
}

try {
    // #FlowExpectError – as of Flow v0.21.0, this produces an error! Yay!
    if (msg.foo.bar === 255) {
        console.log('foo.bar is 255');
    }
} catch (e) {
    console.warn('JS exception:');
    console.error(e);
}
