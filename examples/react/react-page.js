/* @flow */
'use strict';



var React = require('react'); // React must be in scope when using JSX because JSX transpiles into React.createElement(...)
var render = require('react-dom').render;

// Counter has props, state and default props
var Counter = require('./counter');

// Label has no state or default props defined
var Label = require('./label-stateless');



// Note: Unlike React's built-in propTypes, Flow validates props statically.
// Flow also has a real distinction between null and undefined in props

// This uses react-dom interface bundled with Flow. See https://github.com/facebook/flow/blob/master/lib/react.js

module.exports = function renderPage (container: HTMLElement) {
    render(
        <div>
            <Counter color='blue' label='BLUE' step={5} interval={5000} />
            <Counter color='red' label='RED' />

            {/* NOT AN ERROR IN FLOW - React allows passing extra props. It's a React thing. */}
            <Counter color='red' label='RED' foo='bar' />

            {/* #FlowExpectError - required properties color and label are not passed */}
            <Counter />

            {/* #FlowExpectError - required property color is not passed */}
            <Label text='Hello world' />

            {/* #FlowExpectError - color does not pass property validation */}
            <Label text='Hello darkness my old friend' color='greyishbrownpurple' />

            <Label text="I've come to talk with you again" color='orange' />

            {/*
                #Gotcha – Flow types built-in HTML elements' props as `any`, allowing any values.
                ON the plus side, as of v0.21.0 Flow has support for typed JSX intristics.
                However, it needs a manual config and I haven't don that yet in this repo.

                See https://github.com/facebook/flow/tree/master/tests/jsx_intrinsics.custom
            */}
            <div className={false} fooFaa='x'></div>

        </div>,
        container
    );
};
