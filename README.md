# Facebook Flow Examples

[Flow](flowtype.org) is a static type checker, designed to find type errors in JavaScript programs. It's similar to [Typescript](http://www.typescriptlang.org/), but different enough that you might prefer one over the other.

This repo contains JS files with Flow type annotations. It is intended as a quick introduction to Flow in addition to official documentation. For each topic, I try to answer basic questions:

* How to annotate your code with Flow
* What kind of errors Flow can and *can't* detect
* What to do when Flow complains about your code


## How To Use This Repo

0. My comments are not exhaustive, it's a good idea to have the official docs handy for when things get confusing.
1. Install the latest Flow (0.21.0) globally: `brew install flow`.
2. Clone the repo locally, then go to its directory and run `npm install`.
3. Run `flow check` to check for Flow errors. This should bring up zero errors because I suppress Flow errors from all lines that are supposed to cause a Flow error (see [flow-config.md](https://github.com/raquo/facebook-flow-examples/blob/master/flow-config.md)).
4. Go to any JS file, find a `#FlowExpectError` comment, and remove it. Run `flow check` again. You will see Flow report an error for the next line.
5. To make your workflow faster, simply run `flow`. This will start flow as a server which will monitor your folder for changes. Running `flow` again will produce a list of errors instantaneously.
   * Note that the first time you run `flow` command it might appear to fail to connect to the server. That's just a display bug.
   * Flow server must be restarted if you add/change/remove global interface definitions. Don't worry about that for now, as I'm not using those in the repo yet.
6. Read through the code examples in sequence, and see how Flow can make your day better.
7. Make changes to my code, try to write your own annotations.
   * PRs are welcome – for example I haven't yet covered typed Promises, typed Flux actions, using a collections library, declaring interfaces for your dependencies, and a lot more stuff.


## Running Flow Code

The `flow` command merely validates the source code, but how to we run it in the browser? Simple – since Flow annotations do not affect how your code runs in production, we can just strip them all out as part of our transpilation. I'm using Babel for that, which has [babel-plugin-transform-flow-strip-types](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-flow-strip-types) which does exactly what we need. Note that this plugin is part of [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react) so I don't require it explicitly.

To run our code, run `npm run start` and point your browser to [localhost:3000](http://localhost:3000). You won't see much since my code doesn't print out much.

I'm using a simple Webpack config to pack my code for the browser and run a local dev server. I have another repo, [minimal-hapi-react-webpack](https://github.com/raquo/minimal-hapi-react-webpack) that explains how to configure Webpack.

Flow is an extension of Javascript, so tools that normally operate on JS files will probably not work on raw Flow files. For example, I'm using ESLint to type check this repo, and have set it up with `babel-eslint` parser. That works, except one of those tools seems to have a problem with Flow's type annotations for fat arrow functions. You'll see one parse error if you run `npm run lint`, but other files are linted properly. **TODO:** Figure out what's up with ESLint.


## Let's Build a Flow Community

Right now it's rather hard to find materials on Flow online. The most useful resources for me so far have been Flow's [issues](https://github.com/facebook/flow/issues) and [tests](https://github.com/facebook/flow/tree/master/tests). However, those places are not suitable for sharing your experience, blog posts, articles, etc. Reddit seems like a good platform for this sort of thing, so I'm trying to get [/r/flowtype](https://www.reddit.com/r/flowtype) going. Join up!


## License

[MIT](https://github.com/raquo/facebook-flow-examples/blob/master/LICENSE.md). Don't spend it all in one place.
