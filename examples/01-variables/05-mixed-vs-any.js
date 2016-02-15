/* @flow */
'use strict';

// `mixed` is the supertype of all types. Anything can flow into it.
var a: mixed = 5;
a = 'five';
a = [1, 2, 3, 4, 5];

var getSomething = (): mixed => {
    return 112;
};

var x: mixed = getSomething();

// However, `mixed` can not flow into any other type:
// #FlowExpectError – even though 112 is a number, it is typed as `mixed`
var y: number = getSomething();

// Of course, you can manually refine a mixed type:
var z: number = (typeof x === 'number' ? x : 0);



// `any` is a type that is not type checked. Like `mixed`, any type
// can flow into it, but unlike `mixed`, `any` can also flow into any other type.

var b: any = 2;
b = 'two';

var getAnything = (): any => {
    return 112;
};

// No error here
var c: boolean = getAnything();

// `any` is a hack, something you can use to get Flow out of your way, e.g.
// when dealing with third party libraries. Don't abuse it.

// If you do use `any`, make sure to have some other means to check validity of your code.
