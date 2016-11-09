/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded chunks
/******/ 	// "1" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0:1
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "1" is the signal for "already loaded"
/******/ 		if(!installedChunks[chunkId]) {
/******/ 			var chunk = require("./" + chunkId + "../server.bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		}
/******/ 		callback.call(null, __webpack_require__);
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	///<reference path="./typings/index.d.ts"/>
	var express = __webpack_require__(1);
	// import path = require("path");
	// import some new stuff
	var React = __webpack_require__(2);
	// we'll use this to render our app to an html string
	var server_1 = __webpack_require__(3);
	// and these to match the url to routes and then render
	var react_router_1 = __webpack_require__(4);
	var routes_1 = __webpack_require__(5);
	var app = express();
	// serve our static stuff like index.css
	app.use(express.static('./'));
	// send all requests to index.html so browserHistory in React Router works
	app.get('*', function (req, res) {
	    react_router_1.match({ routes: routes_1.default, location: req.url }, function (err, redirect, props) {
	        // `RouterContext` is what the `Router` renders. `Router` keeps these
	        // `props` in its state as it listens to `browserHistory`. But on the
	        // server our app is stateless, so we need to use `match` to
	        // get these props before rendering.
	        var appHtml = server_1.renderToString(React.createElement(react_router_1.RouterContext, __assign({}, props)));
	        // dump the HTML into a template, lots of ways to do this, but none are
	        // really influenced by React Router, so we're just using a little
	        // function, `renderPage`
	        res.send(renderPage(appHtml));
	        // res.sendFile('./index.html', {root: __dirname})
	    });
	});
	function renderPage(appHtml) {
	    return "\n    <!doctype html public=\"storage\">\n    <html>\n        <head>\n            <meta charset=\"UTF-8\" />\n            <title>Hello React!</title>\n        </head>\n        <body>\n            <div id=\"example\">" + appHtml + "</div>\n\n            <!-- Dependencies -->\n            <script src=\"./node_modules/react/dist/react.js\"></script>\n            <script src=\"./node_modules/react-dom/dist/react-dom.js\"></script>\n\n            <!-- Main -->\n            <script src=\"./dist/bundle.js\"></script>\n        </body>\n    </html>\n   ";
	}
	var PORT = 8080;
	app.listen(PORT, function () {
	    console.log('Production Express server running at localhost:' + PORT);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../typings/index.d.ts"/>
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    childRoutes: [{
	            path: '/',
	            getComponent: function (nextState, cb) {
	                __webpack_require__.e/* nsure */(2, function (require) {
	                    cb(null, __webpack_require__(12).default);
	                });
	            },
	            // childRoutes: [
	            //   GoodiesSection
	            // ]
	            // getChildRoutes(partialNextState: any, cb: Function) {
	            //   require.ensure([], (require) => {
	            //     cb(null, [
	            //       require<typeof GoodiesSection>('./routes/Goodies').default,
	            //     ])
	            //   })
	            // }
	            childRoutes: [
	                __webpack_require__(6).default,
	            ]
	        }]
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    path: 'goodies',
	    getComponent: function (nextState, cb) {
	        __webpack_require__.e/* nsure */(1, function (require) {
	            cb(null, __webpack_require__(7).default);
	        });
	    }
	};


/***/ }
/******/ ]);