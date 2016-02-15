/* @flow */
'use strict';



var renderCounter = require('./react-page');

var reactContainer = document.createElement('div');
document.body.appendChild(reactContainer);

document.addEventListener('DOMContentLoaded', () => {
    renderCounter(reactContainer);
});
