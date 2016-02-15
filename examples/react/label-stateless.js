/* @flow */

'use strict';

var React = require('react');

type LabelProps = {
    text: string,
    color: 'orange'|'boring'
};



// This uses react interface bundled with Flow.
// See https://github.com/facebook/flow/blob/master/lib/react.js

class Label extends React.Component {

    render () {
        return (
            <div className='Label' style={{color: this.props.color}}>
                {this.props.text}
            </div>
        );
    }

    // Do not annotate state or defaultProps if your component does not use these.
    props: LabelProps;
}



module.exports = Label;

