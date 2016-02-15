/* @flow */
'use strict';



// Objects created using spread operator are unsealed and behave
// similarly to objects initialized to empty object literals.

var fooProps = {
    foo: 'bar',
    fooo: 'baz'
};

var props = {
    isGreen: true,
    isBig: false,
    ...fooProps
};

var foo: string = props.foo;

// #FlowExpectError – Error because `var foo2` was declared to be a number while `props.foo` is a string
var foo2: number = props.foo;

// #Gotcha – NOT AN ERROR IN FLOW – Flow does not check access to non-existent properties of *unsealed* objects
var frog: number = props.frog;



// We CAN seal object properties even if we use spread operator – to do that, declare object type on creation.

type Props = {
    isGreen: boolean;
    isBig: boolean;
    foo: string;
};

var sealedProps: Props = {
    isGreen: true,
    isBig: false,
    ...fooProps
};

var foo3: string = props.foo;

// #FlowExpectError – Error because `kitten` property is not defined on `Props`
var kitten: string = sealedProps.kitten;

// #FlowExpectError – Error because `fooo` property is not defined on `Props`, as expected – see objects/sealed.js
var fooo: string = sealedProps.fooo;
