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