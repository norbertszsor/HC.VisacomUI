"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var Home = function () { return (React.createElement("div", null,
    React.createElement("video", { autoPlay: true, loop: true, controls: true },
        React.createElement("source", { src: "home.mp4", type: 'video/mp4' })))); };
exports.default = react_redux_1.connect()(Home);
//# sourceMappingURL=Home.js.map