///<reference path="./typings/index.d.ts"/>
import express = require("express");
// import path = require("path");

// import some new stuff
import * as React from 'react'
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server'
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router'
import rootRoute from './src/routes'
 
const app = express()

// serve our static stuff like index.css
app.use(express.static('./'));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req: express.Request, res: express.Response) {
    match({routes: rootRoute, location: req.url}, (err, redirect, props) => {
        // `RouterContext` is what the `Router` renders. `Router` keeps these
        // `props` in its state as it listens to `browserHistory`. But on the
        // server our app is stateless, so we need to use `match` to
        // get these props before rendering.
        const appHtml = renderToString(<RouterContext {...props}/>)

        // dump the HTML into a template, lots of ways to do this, but none are
        // really influenced by React Router, so we're just using a little
        // function, `renderPage`
       res.send(renderPage(appHtml))

        // res.sendFile('./index.html', {root: __dirname})
    });
});
function renderPage(appHtml: string) {
  return `
    <!doctype html public="storage">
    <html>
        <head>
            <meta charset="UTF-8" />
            <title>--------Hello React!-------------</title>
        </head>
        <body>
            <div id="example">${appHtml}</div>

            <!-- Dependencies -->
            <script src="./node_modules/react/dist/react.js"></script>
            <script src="./node_modules/react-dom/dist/react-dom.js"></script>

            <!-- Main -->
            <script src="./dist/bundle.js"></script>
        </body>
    </html>
   `
}

const PORT = 8080
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT)
})
