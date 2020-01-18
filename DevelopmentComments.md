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

### This is one werid mix

So these stateful components are arranged as hierarchies. If you want to control state for hierarchy then according to [this](https://reactjs.org/docs/lifting-state-up.html) article top element must be the *source of truth* and nested element should change state via callbacks and get results via re-render on setState from *source of truth* component.

If this sounds like wtf then you are close to my gripe with this approach.

We have one good idea - we must control state in a disciplined manner.

Why? Because state is what most programs are about. If you have discipline you can easily reproduce scenario of changes for state if you keep it right.

Then we have so-so idea. We should decompose our program into hierarchy of self-containing components that rerender their nested structures on-demand and thanks to magic only the changed bits.

And finally we have just fucking terrible idea. Imagine use case: fill the form, do validation, server request and show the results. Then why don't you decompose it on 10 semi-independent pieces with specific parameter conventions and then spread this logic in some callbacks which we will set via parameters during component initialization (called props in React world).

It is one of those [HURD](https://en.wikipedia.org/wiki/GNU_Hurd) situations. Let's do each component small and reusable. Shit now actual interdependencies are much harder to grasp and reason about! What is value of simple components if you can't understand how they will interact with each other?

And don't even bring the question with smooth animation and styles and other stuff. Now that junk is hidden in specific css files and you NEED smart tooling to work with styling part. Sigh.

### Why bother with React than?

To check out if modern front-end any good.

Check if I want to work with large codebase written with this approach. Doubt it.

Have a tool on my belt to do simple web-apps and convert them to mobile. For some odd reason this looks like a decent idea. Event if implementations specific are trash.

### Testing is idunno

One page says to create mouseevent, then you use some firevent stuff. all because somewhere deep is some simulation of DOM and helpers who have act internally and it seems that you have tests buuut so many things are so not-browser it almost bends my mind...

Still think it may be useful. But would not bet my career on stability of such testing approach.