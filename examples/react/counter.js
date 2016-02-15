/* @flow */

'use strict';

var React = require('react');

// #FlowIgnoreAsset - CSS imports do not need to be type-checked
require('./counter.css');

type CounterProps = {
    label: string,
    interval: number, // in milliseconds
    step: number,
    color: 'red'|'blue'|'black'
};

var counterDefaultProps = {
    interval: 10000,
    step: 1
};

type CounterState = {
    ticks: number
}



// This uses react interface bundled with Flow.
// See https://github.com/facebook/flow/blob/master/lib/react.js

class Counter extends React.Component {

    constructor (props: CounterProps) {
        super(props);

        this.state = {
            ticks: 0
        };
    }


    componentDidMount () {
        setInterval(() => {
            this.tick();
        }, this.props.interval);

        // #FlowExpectError - property foo does not exist in state
        this.setState({foo: true});
    }


    render () {
        // #FlowExpectError – nope, state does not have this key
        this.state.bar;

        return (
            <div className='Counter' style={{color: this.props.color}}>
                {this.renderContent()}
            </div>
        );
    }


    renderContent (): React.Element {
        return (
            <span>{'Counter – ' + this.props.label + ': ' + this.state.ticks}</span>
        );
    }


    tick () {
        this.setState({ticks: this.state.ticks + this.props.step});
    }


    // You should always annotate your props.
    // Do not annotate state or defaultProps if your component does not use these.
    state: CounterState;
    props: CounterProps;
    static defaultProps: typeof counterDefaultProps; // Note usage of Flow's typeof operator.
}



// #Gotcha – we've annotated defaultProps above,
// but we didn't assign any value to it!
// You also need to assign defaultProps a value:
Counter.defaultProps = counterDefaultProps;


module.exports = Counter;
