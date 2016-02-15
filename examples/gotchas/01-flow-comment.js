// I'm a comment!

/* @flow */
'use strict';

// #Gotcha – This file is NOT checked by Flow because the
// /* @flow */ comment is not the first comment in this file.

// Make sure to start your files with /* @flow */.



// Flow requires that all Flow annotations be located in files with a
// /* @flow */ comment. Since it does not see that comment in this file,
// the following otherwise valid Flow annotation will throw an error
// telling you about this requirement.

// If you uncomment the following line, Flow will throw an error for
// the above reason. Even a #FlowExpectError comment can't prevent that.
//var x: string = 'mind-blown.jpeg';

// If you want to exclude a file from flow's type checking,
// add a /* @noflow */ comment on top instead of /* @flow */.
