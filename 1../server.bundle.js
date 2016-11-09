exports.ids = [1];
exports.modules = [
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	__webpack_require__(8);
	var Goodies = (function (_super) {
	    __extends(Goodies, _super);
	    function Goodies() {
	        _super.apply(this, arguments);
	        this.onFocus = function (event) {
	            event.target.select();
	        };
	    }
	    Goodies.prototype.render = function () {
	        var _this = this;
	        var url = window.location.protocol + '//' + window.location.host + '/' + "Settings.site.name" + '/';
	        var img = window.location.protocol + '//' + window.location.host + '/static/img/resources/';
	        return (React.createElement("div", null, 
	            React.createElement("div", {className: "dash-tab-title"}, 
	                React.createElement("h3", null, "Goodies"), 
	                React.createElement("h3", {className: "sub-title"}, "Here are some goodies for you to use to easily link to your" + ' ' + "RebelMouse page from your blog, site, or anywhere else you'd like!")), 
	            React.createElement("div", {className: "resource"}, 
	                React.createElement("div", {className: "resource-title"}, 
	                    React.createElement("h4", null, "Buttons")
	                ), 
	                React.createElement("div", {className: "resource-note"}, "Save any of these icons to link to your RebelMouse front page."), 
	                React.createElement("ul", {className: "resource-buttons"}, 
	                    React.createElement("li", null, 
	                        React.createElement("i", {className: "goodies-preview bt1"}), 
	                        React.createElement("a", {href: "/static/img/resources/btn1.eps"}, "EPS"), 
	                        React.createElement("a", {href: "/static/img/resources/btn1.png"}, "PNG")), 
	                    React.createElement("li", null, 
	                        React.createElement("i", {className: "goodies-preview bt2"}), 
	                        React.createElement("a", {href: "/static/img/resources/btn2.eps"}, "EPS"), 
	                        React.createElement("a", {href: "/static/img/resources/btn2.png"}, "PNG")), 
	                    React.createElement("li", null, 
	                        React.createElement("i", {className: "goodies-preview bt3"}), 
	                        React.createElement("a", {href: "/static/img/resources/btn3.eps"}, "EPS"), 
	                        React.createElement("a", {href: "/static/img/resources/btn3.png"}, "PNG")), 
	                    React.createElement("li", null, 
	                        React.createElement("i", {className: "goodies-preview bt4"}), 
	                        React.createElement("a", {href: "/static/img/resources/btn4.eps"}, "EPS"), 
	                        React.createElement("a", {href: "/static/img/resources/btn4.png"}, "PNG")), 
	                    React.createElement("li", null, 
	                        React.createElement("i", {className: "goodies-preview bt5"}), 
	                        React.createElement("a", {href: "/static/img/resources/btn5.eps"}, "EPS"), 
	                        React.createElement("a", {href: "/static/img/resources/btn5.png"}, "PNG")), 
	                    React.createElement("li", null, 
	                        React.createElement("i", {className: "goodies-preview bt6"}), 
	                        React.createElement("a", {href: "/static/img/resources/btn6.eps"}, "EPS"), 
	                        React.createElement("a", {href: "/static/img/resources/btn6.png"}, "PNG")))), 
	            React.createElement("div", {className: "resource"}, 
	                React.createElement("div", {className: "resource-title"}, 
	                    React.createElement("h4", null, "Follow Buttons")
	                ), 
	                React.createElement("div", {className: "resource-note"}, "You can copy the HTML below to automatically link to your RebelMouse site."), 
	                React.createElement("ul", {className: "resource-follow-buttons"}, ['follow-me-logo', 'follow-me-drk', 'follow-me-drk-logo'].map(function (itemName, i) {
	                    var val = '<a href="' + url + '"><img src="' + img + 'follow-me-logo.png"/></a>';
	                    return (React.createElement("li", {key: i}, 
	                        React.createElement("a", {href: "#"}, 
	                            React.createElement("i", {className: "icons follow-me-logo"})
	                        ), 
	                        React.createElement("input", {onFocus: _this.onFocus, readOnly: true, value: val})));
	                }))), 
	            React.createElement("div", {className: "resource hidden"}, 
	                React.createElement("div", {className: "resource-title"}, "The Bookmarklet Button"), 
	                React.createElement("div", {className: "resource-note"}, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor" + ' ' + "incididunt ut labore et dolore magna aliqua."), 
	                React.createElement("div", {className: "resource-bookmarklet"}, 
	                    React.createElement("a", {href: "#"}, 
	                        React.createElement("i", {className: "icons stick-btn"})
	                    )
	                )), 
	            React.createElement("div", {className: "resource"}, 
	                React.createElement("div", {className: "resource-title"}, 
	                    React.createElement("h4", null, "Logo and Artwork")
	                ), 
	                React.createElement("div", {className: "resource-note"}, "If you're writing a piece on RebelMouse (or just love the Mouse!), you might find" + ' ' + "these additional images helpful. Feel free to use any of them as long as you link" + ' ' + "back to us."), 
	                React.createElement("ul", {className: "resource-logo"}, 
	                    React.createElement("li", null, 
	                        React.createElement("div", {className: "item"}, 
	                            React.createElement("i", {className: "goodies-preview logo1"})
	                        ), 
	                        React.createElement("a", {href: "/static/img/resources/TextLogo-Light.eps", target: "_blank"}, "EPS"), 
	                        React.createElement("a", {href: "/static/img/resources/TextLogo-Light.png", target: "_blank"}, "PNG")), 
	                    React.createElement("li", null, 
	                        React.createElement("div", {className: "item"}, 
	                            React.createElement("i", {className: "goodies-preview logo2"})
	                        ), 
	                        React.createElement("a", {href: "/static/img/resources/TextLogo-Dark.eps", target: "_blank"}, "EPS"), 
	                        React.createElement("a", {href: "/static/img/resources/TextLogo-Dark.png", target: "_blank"}, "PNG"))), 
	                React.createElement("ul", {className: "resource-artwork"}, 
	                    React.createElement("li", null, 
	                        React.createElement("div", {className: "item"}, 
	                            React.createElement("i", {className: "goodies-preview artwork1"})
	                        ), 
	                        React.createElement("div", null, 
	                            React.createElement("a", {href: "/static/img/resources/TheMouse.eps", target: "_blank"}, "EPS"), 
	                            React.createElement("a", {href: "/static/img/resources/TheMouse.png", target: "_blank"}, "PNG"))), 
	                    React.createElement("li", null, 
	                        React.createElement("div", {className: "item"}, 
	                            React.createElement("i", {className: "goodies-preview artwork2"})
	                        ), 
	                        React.createElement("div", null, 
	                            React.createElement("a", {href: "/static/img/resources/TheMouseMono-LightHead.eps", target: "_blank"}, "EPS"), 
	                            React.createElement("a", {href: "/static/img/resources/TheMouseMono-Light.png", target: "_blank"}, "PNG"))), 
	                    React.createElement("li", null, 
	                        React.createElement("div", {className: "item"}, 
	                            React.createElement("i", {className: "goodies-preview artwork3"})
	                        ), 
	                        React.createElement("div", null, 
	                            React.createElement("a", {href: "/static/img/resources/TheMouseMono-Light.eps", target: "_blank"}, "EPS"), 
	                            React.createElement("a", {href: "/static/img/resources/TheMouseMono-LightHead.png", target: "_blank"}, "PNG"))), 
	                    React.createElement("li", null, 
	                        React.createElement("div", {className: "item item-gr"}, 
	                            React.createElement("i", {className: "goodies-preview artwork4"})
	                        ), 
	                        React.createElement("div", null, 
	                            React.createElement("a", {href: "/static/img/resources/TheMouseMono-Dark.eps", target: "_blank"}, "EPS"), 
	                            React.createElement("a", {href: "/static/img/resources/TheMouseMono-Dark.png", target: "_blank"}, "PNG")))), 
	                React.createElement("ul", {className: "resource-artwork"}, 
	                    React.createElement("li", null, 
	                        React.createElement("div", {className: "item"}, 
	                            React.createElement("i", {className: "goodies-preview artwork5"})
	                        ), 
	                        React.createElement("div", null, 
	                            React.createElement("a", {href: "/static/img/resources/TheMouse-128-128.png", target: "_blank"}, "PNG 128x128")
	                        )), 
	                    React.createElement("li", null, 
	                        React.createElement("div", {className: "item"}, 
	                            React.createElement("i", {className: "goodies-preview artwork6"})
	                        ), 
	                        React.createElement("div", null, 
	                            React.createElement("a", {href: "/static/img/resources/TheMouse-64-64.png", target: "_blank"}, "PNG 64x64")
	                        )), 
	                    React.createElement("li", null, 
	                        React.createElement("div", {className: "item"}, 
	                            React.createElement("i", {className: "goodies-preview artwork7"})
	                        ), 
	                        React.createElement("div", null, 
	                            React.createElement("a", {href: "/static/img/resources/TheMouse-32-32.png", target: "_blank"}, "PNG 32x32")
	                        )), 
	                    React.createElement("li", null, 
	                        React.createElement("div", {className: "item"}, 
	                            React.createElement("i", {className: "goodies-preview artwork8"})
	                        ), 
	                        React.createElement("div", null, 
	                            React.createElement("a", {href: "/static/img/resources/circle mouse.png", target: "_blank"}, "PNG 32x32")
	                        ))))));
	    };
	    return Goodies;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Goodies;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./goodies.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./goodies.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "/* Goodies */\n.goodies .resource {\n  padding: 10px 0;\n  border-bottom: 1px solid #ddd;\n  margin-bottom: 15px; }\n\n.goodies .resource-title {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 8px 0; }\n\n.goodies .resource-subtitle {\n  font-size: 13px;\n  font-weight: 600;\n  margin: 8px 0; }\n\n.goodies .resource-note {\n  font-size: 12px;\n  font-weight: 600;\n  margin: 5px 0; }\n\n.goodies .resource-desc {\n  font: 11px;\n  color: #555;\n  font-weight: 400;\n  margin: 5px 0; }\n\n.goodies .resource-buttons {\n  margin: 15px 0;\n  padding: 0;\n  list-style-type: none;\n  text-align: center; }\n\n.goodies .resource-buttons li {\n  display: inline-block;\n  margin: 0 15px;\n  width: 120px; }\n\n.goodies .resource-buttons li a {\n  font-size: 12px;\n  text-decoration: none; }\n\n.goodies .resource-follow-buttons {\n  margin: 15px 0;\n  padding: 0;\n  list-style-type: none; }\n\n.goodies .resource-follow-buttons li {\n  display: inline-block;\n  margin: 0 15px;\n  width: 205px; }\n\n.goodies .resource-follow-buttons li input {\n  font-size: 12px; }\n\n.goodies .resource-logo {\n  margin: 10px 0;\n  padding: 10px 0;\n  list-style-type: none;\n  text-align: center;\n  border-bottom: 1px solid #e1e1e1; }\n\n.goodies .resource-logo li {\n  display: inline-block; }\n\n.goodies .resource-logo li .item {\n  border: 1px solid white;\n  -webkit-border-radius: 6px;\n  -moz-border-radius: 6px;\n  border-radius: 6px;\n  margin: 0 15px;\n  padding: 10px 0;\n  width: 430px; }\n\n.goodies .resource-logo li:hover .item {\n  border: 1px solid #aaa; }\n\n.goodies .resource-logo li:first-child .item {\n  background-color: #fbfbfb;\n  background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#fbfbfb), to(#eeeeee));\n  background: -webkit-linear-gradient(top, #fbfbfb, #eeeeee);\n  background: -moz-linear-gradient(top, #fbfbfb, #eeeeee);\n  background: -ms-linear-gradient(top, #fbfbfb, #eeeeee);\n  background: -o-linear-gradient(top, #fbfbfb, #eeeeee); }\n\n.goodies .resource-logo li:last-child .item {\n  background-color: #595959;\n  background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#595959), to(#3f3f3f));\n  background: -webkit-linear-gradient(top, #595959, #3f3f3f);\n  background: -moz-linear-gradient(top, #595959, #3f3f3f);\n  background: -ms-linear-gradient(top, #595959, #3f3f3f);\n  background: -o-linear-gradient(top, #595959, #3f3f3f); }\n\n.goodies .resource-logo li a {\n  font-size: 12px;\n  text-decoration: none; }\n\n.goodies .resource-artwork {\n  margin: 10px 0;\n  padding: 0;\n  list-style-type: none;\n  text-align: center; }\n\n.goodies .resource-artwork li {\n  display: inline-block; }\n\n.goodies .resource-artwork li .item {\n  border: 1px solid white;\n  -webkit-border-radius: 6px;\n  -moz-border-radius: 6px;\n  border-radius: 6px;\n  background-color: #fbfbfb;\n  background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#fbfbfb), to(#eeeeee));\n  background: -webkit-linear-gradient(top, #fbfbfb, #eeeeee);\n  background: -moz-linear-gradient(top, #fbfbfb, #eeeeee);\n  background: -ms-linear-gradient(top, #fbfbfb, #eeeeee);\n  background: -o-linear-gradient(top, #fbfbfb, #eeeeee);\n  display: inline-block;\n  margin: 0 15px;\n  padding: 10px 0;\n  width: 160px; }\n\n.goodies .resource-artwork li:hover .item {\n  border: 1px solid #ddd; }\n\n.goodies .resource-artwork li .item-gr {\n  background-color: #595959;\n  background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#595959), to(#4f4f4f));\n  background: -webkit-linear-gradient(top, #595959, #4f4f4f);\n  background: -moz-linear-gradient(top, #595959, #4f4f4f);\n  background: -ms-linear-gradient(top, #595959, #4f4f4f);\n  background: -o-linear-gradient(top, #595959, #4f4f4f); }\n\n.goodies .resource-artwork li a {\n  font: 12px Tahoma, sans-serif;\n  text-decoration: none; }\n\n.goodies-preview {\n  background-image: url(\"/static/img/resources/goodies-sprite.png?2\");\n  display: inline-block; }\n\n.goodies-preview.bt1 {\n  background-position: 0 -309px;\n  width: 120px;\n  height: 120px; }\n\n.goodies-preview.bt2 {\n  background-position: -120px -309px;\n  width: 120px;\n  height: 120px; }\n\n.goodies-preview.bt3 {\n  background-position: -243px -309px;\n  width: 120px;\n  height: 120px; }\n\n.goodies-preview.bt4 {\n  background-position: -366px -309px;\n  width: 120px;\n  height: 120px; }\n\n.goodies-preview.bt5 {\n  background-position: -486px -309px;\n  width: 120px;\n  height: 120px; }\n\n.goodies-preview.bt6 {\n  background-position: -608px -309px;\n  width: 120px;\n  height: 120px; }\n\n/**/\n.goodies-preview.logo1 {\n  background-position: 0 -145px;\n  width: 418px;\n  height: 82px; }\n\n.goodies-preview.logo2 {\n  background-position: 0 -227px;\n  width: 418px;\n  height: 82px; }\n\n.goodies-preview.artwork1 {\n  background-position: 0 0;\n  width: 148px;\n  height: 145px; }\n\n.goodies-preview.artwork2 {\n  background-position: -148px 0;\n  width: 117px;\n  height: 145px; }\n\n.goodies-preview.artwork3 {\n  background-position: -265px 0;\n  width: 153px;\n  height: 145px; }\n\n.goodies-preview.artwork4 {\n  background-position: -418px 0;\n  width: 129px;\n  height: 145px; }\n\n.goodies-preview.artwork5 {\n  background-position: -418px 0;\n  width: 129px;\n  height: 145px; }\n\n.goodies-preview.artwork5 {\n  background-position: 0 -443px;\n  width: 106px;\n  height: 110px; }\n\n.goodies-preview.artwork6 {\n  background-position: -119px -468px;\n  width: 55px;\n  height: 55px; }\n\n.goodies-preview.artwork7 {\n  background-position: -204px -485px;\n  width: 27px;\n  height: 26px; }\n\n.goodies-preview.artwork8 {\n  background-position: -266px -479px;\n  width: 32px;\n  height: 32px; }\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
];;