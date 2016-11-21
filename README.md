# js-dev-env
[![Travis Build Status](https://travis-ci.org/sonalsatpute/js-dev-env.svg?branch=master)](https://travis-ci.org/sonalsatpute/js-dev-env)


[![Build status](https://ci.appveyor.com/api/projects/status/github/sonalsatpute/js-dev-env?svg=true)]
(https://ci.appveyor.com/api/projects/status/github/sonalsatpute/js-dev-env)

### Editorconfig
  - *.editorconfig*

### Package Managers
  - Bower
  - *npm*
  - JSPM
  - Jam
  - volo

### Node.js (6)
  - Configuration using *package.json*

### Automation
  - Grunt
  - Gulp
  - *nmp scripts*
  - *{
      "scripts": 
      {
        "command-name" : "command"
      }
    }*

### Security Check
  - *$nsp check*

### Development Server
  - http-server 
  - live-server
  - *Express*
  - budo
  - webpack dev server
  - Browsersync

### Share 
  - *localtunnerl* (public url with in your network)
  - ngrok (Secure tunnel - need authtoken)
  - Surge (host static files, simple)
  - now (Quickly deploy Node.js to cloud)

### Transpiling
  - *Babel*
  - TypeScript
  - Elm

### Bundling
  - *webpack*
  - Require JS
  - Browserify 
  - Roolup
  - JSPM

### Linting
  - JSLint
  - JSHint
  - *ESLint*

### Testing Framwork
  - *Mocha* (highly configurable)
  - Jasmine (build in assertion libary)
  - Tape (lean and simple)
  - QUnit (jQurty testing)
  - AVA (execute affected only)
  - Jest (from facebook wraper over Jasmine)

### Assertion Library 
  - *Chai*
  - ShouldJS
  - Expect

### Helper Library
  - *JSDOM* (simulat the browser's DOM without browser)
  - Cheerio (jQuery for the server, Query virtual DOM uisng jQuery selectors)

### Test Runner
  - In Browser
    -- Karma
    -- Testem
  - Headless Browser (no visible interface)
    -- PhantomJS (V8 enggine behind)
  - In-memory DOM
    -- *JSDOM* (fast and quick the setup)

### Test Files Location
  - Centralized
    -- Less "noise" in src folder
    -- Deployment confussion
    -- Inertia
  - *Alongside*
    -- Easy import
    -- Clear Visibility
    -- Convenient to open
    -- No recreating folde structure
    -- Easy file moves 

### When should test runs
  - (unit tests) When you hit save (Rapid feedback, Facilitates TDD, Automatic/Low friction, Incress test Visibility)

### Unit Tests
  - Test a small unit
  - Often single function
  - Fast
  - Run upon save

### Integration Tests
  - Test multiple units
  - Often involves clicking and waiting
  - Slow
  - Often run on demand, or in QA


### Multiple Task Parallel Execusion

### Http Calls
### Mocking Http Calls


## Commands

- $node buildScript\srcServer.js
- $npm install -g localtunnel
- $node buildScript\srcServer.js
- $Lt --port 3000 
- $npm start 
- $npm run security-check
