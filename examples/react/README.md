# React

Flow includes a built-in [react interface](https://github.com/facebook/flow/blob/master/lib/react.js) which defines React.Component as a polymorphic class among other things.

I'm only giving examples with ES6 class syntax, but Flow supports legacy `React.createClass` syntax too.

Note that for my examples to work you need these lines in your `.flowconfig`:

    esproposal.class_instance_fields=enable
    esproposal.class_static_fields=enable
