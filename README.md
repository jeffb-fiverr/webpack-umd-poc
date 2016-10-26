# Webpack UMD POC

> Give this a look whenever you get a chance. The idea is to prove that we can run webpack/babel on js files that **DO NOT require other js files via sprockets** and they'll be output in a format that V2 can consume.

##### This will export those files using Universal Module Definition: meaning the following architectures can consume them:
- CommonJS (let's use this in Node, for now)
- ES6 Modules (let's move toward this on the front end)
- Sprockets requires (via the `window`, let's move away from this)
- AMD (let's never use this)

#### To run locally:
```shell
git clone git@github.com:jeffb-fiverr/webpack-umd-poc.git
cd webpack-umd-poc
npm install
npm install -g webpack
webpack --colors --watch -p
open index.html
```