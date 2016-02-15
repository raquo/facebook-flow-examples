/* @flow */
'use strict';


// This is a disjoint union. It means that `x` can be either `string` or `number`.
// It's called disjoint because string is not a subtype of number or the other way round.
var x: string|number = 5;

x = 'hello';

var q = function (a: string|number) {

    if (typeof a === 'string') {
        // This is how we refine the type of x to string
        var y: number = a.length;
    } else {
        // Flow understands that the only other possibility is for x to be a number
        var z: number = a * 5;

        // #FlowExpectError – x is not a string in this context
        var s: number = a.length;
    }
};



// Disjoint unions are very useful for representing common patterns:

type Success = {
    status: 'success'
};

type Fail = {
    status: 'fail',
    errorCode: number
}

type Response = Success | Fail;

// This way we can refine the type of errorCode to a number
function getErrorCode (response: Response): number {
    if (response.status === 'fail') {
        return response.errorCode;
    } else {
        return 0;
    }
}

// If instead we were using just one type:
//
// type Response = {
//   status: 'success'|'fail',
//   errorCode: ?number
// }
//
// We would not be able to refine the type of `errorCode` by looking at `status`
// because their relationship was not fully explained to Flow in the type.
