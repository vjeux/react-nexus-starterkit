/* jshint ignore:start */
module.exports = {
  "schedule": [,
    {
      "time": "9:00–10:00am",
      "talks": ["Registration", ""],
      "special": true
    },
    {
      "time": "10:00–10:30am",
      "talks": ["keynote", "i18n"]
    },
    {
      "time": "10:45–11:15am",
      "talks": ["wrkfl", "typesc"]
    },
    {
      "time": "11:30–12:00pm",
      "talks": ["ast", "ntflx"]
    },
    {
      "time": "12:00–1:30pm",
      "talks": ["Lunch", "Lunch"],
      "special": true
    },
    {
      "time": "1:30–2:00pm",
      "talks": ["data", "immu"]
    },
    {
      "time": "2:15–2:45pm",
      "talks": ["james", "d3"]
    },
    {
      "time": "3:00–3:30pm",
      "talks": ["routr", "david"]
    },
    {
      "time": "3:30–4:00pm",
      "talks": ["Break", "Break"],
      "special": true
    },
    {
      "time": "4:00–4:30pm",
      "talks": ["pete", "flux"]
    },
    {
      "time": "4:45–5:15pm",
      "talks": ["codecad", "perf"]
    },
    {
      "time": "5:30–6:00pm",
      "talks": ["ryan", "webcomp"]
    },
    {
      "time": "7:00–10:00pm",
      "talks": ["dinner", "cocktail"],
      "special": true
    }
  ],
  "talks": {
    "keynote": {
      "display": true,
      "title": "Keynote",
      "speaker": "Jordan Walke and Christopher Chedeau"
    },
    "typesc": {
      "title": "Static typing with Flow and TypeScript",
      "speaker": "James Brantly",
      "description": ["Learn how to take advantage of static typing in React with Flow and TypeScript. Flow is a recently released static type checker from Facebook designed to work well with React from the ground up.", "TypeScript integration is more difficult and we will cover solutions to common problems such as class system integration and JSX. Both allow you to annotate your React application with types for compile-time checking of invariants and other common issues."],
      "display": true
    },
    "wrkfl": {
      "display": true,
      "title": "Tweak your page in real time, without leaving the comfort of your editor",
      "speaker": "Brenton Simpson",
      "description": ["Dev Tools are awesome!  They let you experiment with the design and structure of your page by providing instant feedback.  Unfortunately, each browser (and device) has its own set that doesn't work with any other's (without some experimental sorcery).  Even then, you often have to leave behind comforts like JSX and Sass to work in the bare-metal world of Web Inspector.", "In this talk, you'll learn how to bring all that instant-feedback magic into your favorite editor, where the key-bindings are familiar and your favorite transpilers are at your aid.  Make changes to your JSX+JS Harmony+Sass-powered app and watch them cascade across every device on your desk in real-time, with no reloading!  Organize your codebase into modules for development, but minify and inline them for production, all without touching a Gruntfile."]
    },
    "codecad": {
      "title": "Codecademy's approach to component communication",
      "speaker": "Bonnie Eisenman",
      "description": ["Codecademy recently rebuilt our entire learning environment using React. The learning environment needs to dynamically accommodate various combinations of components (the code editor, browser preview, terminal, and lesson content, for example), leading to changing communication needs. We solved this using meta-programming to create dynamic communication \"adapters,\" allowing us to mix-and-match functionality on the fly. I'll discuss our motivations for doing so, and how this approach has met our needs for flexibility even if it's not the \"React way\" of doing things."],
      "display": true
    },
    "james": {
      "display": true,
      "title": "Communicating with channels",
      "speaker": " James Long",
      "description": ["React has a simple way for components to communicate with other: pass event handlers down through children and events will flow upwards to parent components. This works well for simple components and certain UI events, but it breaks down with large complex apps. The Flux architecture helps with this by defining 'actions' that components can fire and subscribe to, and you write code outside of your components to handle data and dependencies of the actions.", "With the advent of 'goroutines' and channels in languages like Go and Clojure, we have a new style of coordinating actions. We have developed a library that allows you to write goroutine-like code on top of generators, called js-csp. I will take a look at how this might be used to handle complex data flow in a React-based app. We will see what parts of Flux and React's event system might be improved, or if it even helps at all!"]
    },
    "routr": {
      "display": true,
      "title": "react-router increases your productivity",
      "speaker": "Michael Jackson",
      "description": ["react-router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page. The project benefits from several years of combined experience working with the legendary Ember.js router.", "This talk will show how the router makes it easy to implement many common flows including authentication, navigation prompts, and animation. We'll also explore some advanced techniques including server-side rendering and partial application loading."]
    },
    "pete": {
      "display": true,
      "title": "The future of JavaScript layout systems",
      "speaker": "Pete Hunt",
      "description": ["When you build apps with React, all the time you spent futzing with DOM manipulation goes away. It's amazing.", "Now that I've been building React apps for 2 years, I've realized that I spend most of my time fighting with CSS layout. CSS was designed a long time ago to style semantic documents, not to build complex, interactive applications.", "Grid stylesheets bring the Cassowary constraint solver (popularized by Apple's AutoLayout system in iOS) to the web. In this talk I'll show off my React bindings to this library, why they are awesome, and why they're relevant in a world where we can use flexbox."]
    },
    "data": {
      "display": true,
      "title": "Data fetching for React applications at Facebook",
      "speaker": "Daniel Schafer and Jing Chen",
      "description": "React and the flux architecture combine to simplify many aspects of building a modern web application, but data fetching is still a tricky problem, especially as applications become more complex. We'll describe the approach Facebook uses to make data fetching simple for developers, even as a project grows to include dozens of developers and the application becomes as complex as Facebook's news feed."
    },
    "ryan": {
      "title": "Hype!",
      "speaker": "Ryan Florence",
      "display": true,
      "description": ["Most of the time, I simply find React to make me more productive with the work-a-day tasks of building a UI in the browser. Other times, when I'm asked by fellow developers or designers if, and how, we could do some kind of crazy sounding thing, I find that React saw it coming.", "Lets push the boundaries of what React lets you do with some of the most interesting use-cases I've come across and implemented."]
    },
    "i18n": {
      "title": "Format data and strings in any language with FormatJS and react-intl",
      "speaker": "Eric Ferraiuolo",
      "display": true,
      "description": "You speak English, but most people don't. Formatting numbers, dates, and pluralizing strings is hard enough to get right in English, let alone internationalizing your web app to support multiple languages. FormatJS with react-intl (open sourced by Yahoo) has your back by providing a declarative way for your React-based app to format data and strings for English and over 150 languages in just 7KB gzipped."
    },
    "david": {
      "display": true,
      "title": "Refracting React",
      "speaker": "David Nolen",
      "description": "Om is a popular ClojureScript binding to React that streamlines integration with persistent data structures. Besides providing basic global state management facilities, it also contains some unique concepts that will be of interest to both users and implementers of React and React-like systems. This talk will explore the design decisions, tradeoffs, and benefits that result from taking a more aggressive stance on application state when pursuing scalable component architecture."
    },
    "ntflx": {
      "display": true,
      "title": "Beyond the DOM: How Netflix plans to enhance your television experience",
      "speaker": "Jafar Husain",
      "description": ["Netflix has rebuilt our mobile and web UIs. These UIs are hosted in the browser, and we've seen big performance gains thanks to React's virtual DOM. But what if the DOM is just too slow on a given platform?", "Netflix uses a canvas-like API to maximize performance on smart TVs and game consoles. Given that React improved performance and simplified the code on our other platforms, we asked ourselves \"could React work without the DOM?\"", "Yes. Not only is it possible to use React without the DOM, React's design is particularly well-suited to working with low-level APIs like Canvas or WebGL. As a matter of fact, React's design is heavily influenced by game-rendering engines. In this talk, you will learn about how we are integrating React with our TV platform, and what design patterns we're using to get a good balance of simplicity and performance."]
    },
    "immu": {
      "display": true,
      "title": "Immutable Data and React",
      "speaker": "Lee Byron",
      "description": ["Immutable data unlocks powerful memoization techniques and prohibits accidental coupling via shared mutable state. It's no accident that these are the the same benefits provided by React.", "Persistent data structures provide the benefits of immutability while maintaining high performance reads and writes and present a familiar API.", "Learn about how persistent immutable data structures work, and techniques for using them in your React applications with Immutable.js, a library of fully persistent immutable data structures."],
    },
    "d3": {
      "title": "Scalable Data Visualization",
      "speaker": "Zach Nation",
      "description": ["Visualizing large-scale data in the browser presents many challenges, including performance of rendering, responding to state changes from user input or data changes, and transforming gigabytes of data into hundreds or thousands of visual elements efficiently. Being able to reason about the effects of state changes, and the performance implications of those effects, becomes even more important at large scale. GraphLab uses React.js extensively to help control the complexity of rendering and enable us to build bigger and better visualizations.", "This talk will cover various techniques for rendering, and the pros and cons of each, including: render targets (canvas vs. SVG), client-server application architecture optimized for large data, and integration with other visualization libraries including d3.js. While React.js is a solution for client-side rendering, it must be combined with a whole data pipeline to be effective for rendering larger data than can fit in the browser. By using a stateful server-side and a modified Flux-like architecture, in which XMLHttpRequest communicates with a server-side dispatcher, we can keep transformations close to the raw data  and manage client-side application complexity at the same time."],
      "display": true
    },
    "ast": {
      "title": "Unlocking the structure of your React applications with the AST",
      "speaker": "Gurdas Nijor",
      "display": true,
      "description": ["Lisp programmers have understood the power of the concept of \"code as data\" for decades. Having a structured representation of your code allows for an untold number of new applications that go far beyond what can be achieved by treating it as a lifeless stream of characters.", "Esprima, a parser for javascript pushes your development very far in that direction by allowing you access to an AST (abstract syntax tree) representation of your code, that coupled with the strong conventions and API of React allow for some pretty amazing applications that i'll demonstrate how to implement."]
    },
    "flux": {
      "title": "Flux Roundtable",
      "description": ["Michael Ridgway (Yahoo!), Spike Brehm (Airbnb), Andres Suarez (SoundCloud), Jing Chen (Facebook), Greg Perkins (Facebook) and Ian Obermiller (Facebook)"],
      "speaker": "Bill Fisher",
      "display": true
    },
    "perf": {
      "display": true,
      "title": "Making your app fast with high-performance components",
      "speaker": "Hedger Wang",
      "description": ["We can all appreciate that React apps are easy and awesome. They make great demos that are crushingly good at DOM-manipulations. But as they grow (and they always do), things start to get unwieldy. Big apps — especially ones with long life-spans, huge data sets, or numerous contributors — can suffer serious perf and maintenance inefficiencies.", "The Facebook Ads Interfaces team shares what they’ve learned after spending the last year building one of the world’s largest React applications. By being intentional about your app's component hierarchy, separation, and data-passing, you can achieve excellent performance, sustainable even at a massive scale."]
    },
    "webcomp": {
      "title": "The complementarity of React and Web Components",
      "speaker": "Andrew Rota",
      "description": "The component driven, performance focused approach of React is a perfect complement to the modularity and portability of native HTML Web Components.  At first glance, React and Web Components might seem like two radically different solutions to the same problem.  But when combined properly they complement each other to create an extremely powerful, expressive framework for developing complex web applications.",
      "display": true
    },
    "dinner": {
      "title": "Dinner at Aloft Hotel (included)"
    },
    "cocktail": {
      "title": "Cocktail at Aloft Hotel (included)"
    }
  }
};
/* jshint ignore:end */
