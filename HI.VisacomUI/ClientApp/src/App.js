"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var Layout_1 = require("./components/Layout");
var Home_1 = require("./components/Home");
var Login_1 = require("./components/Login");
var Register_1 = require("./components/Register");
require("./custom.css");
exports.default = (function () { return (React.createElement(Layout_1.default, null,
    React.createElement(react_router_1.Route, { exact: true, path: '/', component: Home_1.default }),
    React.createElement(react_router_1.Route, { path: '/Login', component: Login_1.default }),
    React.createElement(react_router_1.Route, { path: '/Register', component: Register_1.default }))); });
//# sourceMappingURL=App.js.map