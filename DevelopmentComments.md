# Development comments

While doing this project I may stumble upon something that I consider worth commenting.

That is the file with such information.

### I want to have fun with fresh NodeJS on Linux Min

So I can't just use apt.

I went to [nodesource instructions](https://github.com/nodesource/distributions/blob/master/README.md#debinstall).

And got myself 12 version (which is LTS by the way).

### Let's give it a shot

I definitely can do front-end part with vanilla js, ajax and some Bootstrap/Skeleton for CSS.

But maybe latest frameworks can help me to make my coding experience better?

Let's try reactJs. This [entry point article](https://facebook.github.io/create-react-app/docs/getting-started) looks fine to me.

### First impressions

So *node_modules* needs about 168mb of memory.

Folder *public* with some static stuff and... manifest.json???

Folder *src* with js, css and... setupTest.js???

Command *npm test* is working in some funny watch mode. Press q to quit.

Hmm so my production-built application contains about 300kb of webpack... This is hmm unexpected.

### First change

I get the idea that react is for **simplifying** rendering part of application. Not full-blown framework.

So one detail is that UI is composed of *components*. Which can be described in JSX that is returned by corresponding function (e.g.).

Want to render additional element to one from example? Wrap both of them in brackets and it will work! But test would fail without unique keys...

Thanks to live-reload you can instantly check if everything worked. Pretty cool.

### Material to check out

[This one](https://medium.com/better-programming/creating-a-simple-app-with-react-js-f6aa88998952) describes building of small yet meaningful application.

There is official page to do testing for your components [here](https://reactjs.org/docs/testing.html).

### Not sure about

If we do just rendering. That all the data should be provided by caller.

But I suppose react has some mechanism inside its components to keep state.

Which makes reactJs sort of stateful rendering library. Sounds like some jQu....

### JS classes

I am dissapointed in JS approach changes with newer versions.

no really.

You have prototype based object-oriented style in your language. Everyrone like whaaaat? Closer to Smalltalk!!! That is what.

And without changing underlying behavior you just add some syntactic sugar and call it classes? That is bullshit.

But whatever. They look like useful way to build components in reat in *standard* manner. 