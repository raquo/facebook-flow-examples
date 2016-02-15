# Flow Configuration

Official flow docs: [Advanced Configuration](http://flowtype.org/docs/advanced-configuration.html)

Flow is configured with a `.flowconfig` file written in a custom INI like format.

## Files That Flow Checks

By default, Flow looks at all `.js` and `.jsx` files under the directory where .flowconfig resides. You can tell Flow to check files in other directories using an `[include]` section.

Flow only checks files that have a `/* @flow */` comment at the top. Flow syntax is disallowed in files without such a comment.

You can tell Flow to ignore a file by using a `/* @noflow */` comment in it instead of `/* @flow */`. Flow will not check such files.

Additionally, you can specify regex filename patterns in `[ignore]` section of `.flowconfig`. For example, you should probably ignore your `node_modules`, otherwise Flow will waste a lot of time looking through all your dependencies.

```
[ignore]
.*/node_modules/*
```

The leading `.*/` is added because Flow matches regexes against *absolute* file paths.

**TODO:** write about "module not found" error for ignored node dependencies.

## "Global" Flow Declarations

If you want some declarations to be available to Flow in every file, define their locations in the `[libs]` section.

**TODO:** Add use cases and/or link to type exports and stuff

## Flow Error Suppression

When Flow gets in your way too much, you can shut it up with an error suppression comment. Whatever Flow will find on the next line of code, it will not complain about that.

    suppress_comment=\\(.\\|\n\\)*\\#FlowExpectError
    suppress_comment=\\(.\\|\n\\)*\\#FlowIgnoreAsset

In my `.flowconfig` I've defined two comments that will suppress flow errors. In this repo I use `#FlowExpectError` when I deliberately write code that will fail Flow validation to show you what kind of errors Flow catches. Note that if the next line after an error suppression comment does not in fact contain a Flow error, Flow will throw an error. So you know that all my `#FlowExpectError` comments are followed by verified Flow errors.

I also use `#FlowIgnoreAsset` error suppression comment to require stylesheets – they are not JS files, so Flow can not validate them, and there is no point to that really.

Be careful when using error suppression as it will truly suppress all errors involving the next line of code. You should have other means to guarantee soundness when you do use it.
