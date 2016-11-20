# js-dev-env
[![Travis Build Status](https://travis-ci.org/sonalsatpute/js-dev-env.svg?branch=master)](https://travis-ci.org/sonalsatpute/js-dev-env)

package mangers: npm, bower, jspm, Jam, Volo

install node.js (6.9.1) 
add package.json 
install packages
- $npm install

Security Check 
- $npm install -g nps
- $nsp check

Development Web Servers
http-server, live-server, Express, Dudo, webpack dev server, Browsersync, 

##Start Express
- $node buildScript\srcServer.js
##Sharing your work in progress
localtunnel, ngrok, surge, nov

- $npm install -g localtunnel
- $node buildScript\srcServer.js

open new command prompt and start localtunnel
- $Lt --port 3000 

##Automation
tools: Grunt, Gulp, nmp scripts
-Automate with npm scripts

add below key in scripts section in package.json
* "start": "node buildScripts/srcServer.js"

Open command prompt and type 
- $npm start 

Security Check
- $npm run security-check

localtunnel command
- $npm run share

Runner multiple task in parallel

in case you get error saying npm-run-all not found please install 
- $npm install npm-run-all

- $npm start

## Transpiling with Babel

