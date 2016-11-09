exports.ids = [2];
exports.modules = {

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var react_router_1 = __webpack_require__(4);
	var DashboardApp = (function (_super) {
	    __extends(DashboardApp, _super);
	    function DashboardApp() {
	        _super.apply(this, arguments);
	    }
	    DashboardApp.prototype.render = function () {
	        return (React.createElement("div", {className: "main clearfix"}, 
	            React.createElement("div", {id: "dash-tab-title", className: "dash-tab-title"}), 
	            React.createElement("div", {id: "subtabs-menu", className: "sub-tabs"}, 
	                React.createElement("ul", null, 
	                    // make it work with NavLink
	                    "// make it work with NavLink", 
	                    React.createElement("li", null, 
	                        React.createElement(react_router_1.IndexLink, {to: "/", activeClassName: "active"}, "Home")
	                    ), 
	                    React.createElement("li", null, 
	                        React.createElement(react_router_1.IndexLink, {to: "/goodies", activeClassName: "active"}, "Goodies")
	                    ))
	            ), 
	            React.createElement("div", {id: "tab-data", className: "tab-data"}, this.props.children)));
	    };
	    return DashboardApp;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DashboardApp;


/***/ }

};;