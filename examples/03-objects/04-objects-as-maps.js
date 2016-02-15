/* @flow */
'use strict';



// This means that objects of type `Configs` can have any
// properties whose names are strings and whose values are numbers.
type Configs = {[key: string]: number|boolean};

var configs: Configs = {
    hue: 123
};

var channel1 = Math.random() > 0.5 ? 'blue' : 'green';
var channel2 = Math.random() > 0.5 ? 'blue' : 'green';

configs.red = 255;
configs[channel1] = 127;

// Even though we've explicitly defined property hue to equal 123 (a number),
// Configs type says it is number|boolean, so we have to accommodate that.
var hue1: number|boolean = configs.hue;
var hue2: number|boolean = configs['hue'];
var channelColor: number|boolean = configs[channel2];

// We can narrow down the type of property as usual
if (typeof configs[channel2] === 'number') {
    var channelColor2: number = configs[channel2];
}

// #FlowExpectError – Flow does not let you define string properties on an object with numbers-only properties
configs.label = 'red';

// #FlowExpectError – Flow knows that all properties on configs are numbers
var colorText: string = configs[channel2];

// Remember – Javascript code always gets executed regardless of Flow annotations or errors.
console.log('configs.label:', configs.label); // prints 'red'

// #Gotcha – NOT AN ERROR IN FLOW – Flow does not check whether properties you access on a map object exist
var size: number|boolean = configs.size;

