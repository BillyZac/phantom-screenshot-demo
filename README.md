# Phantom.js Screenshot Demo
Demonstrates how to take a screenshot with a server-side script using Node.js and webshot, a Phantom.js wrapper.

## Usage
First, install dependencies:
```
npm install
```

Then, take a screenshot:
```
node app.js
```
Uses the internal module `take-screenshot.js` to take a screenshot of Flickr.

This module returns a Promise, with the `resolve` value set to the file name of the screenshot. Screenshot files are named with the timestamp of their creation time.
