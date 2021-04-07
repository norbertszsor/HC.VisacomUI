"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
require("./cssStyles/Login.css");
var Login = function () { return (React.createElement("div", { className: "masterCoinainer" },
    React.createElement("div", { className: "container" },
        React.createElement("form", { action: "/action_page.php" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col" },
                    React.createElement("a", { href: "#", className: "fb btn" },
                        React.createElement("i", { className: "fa fa-facebook fa-fw" }),
                        " Login with Facebook"),
                    React.createElement("a", { href: "#", className: "twitter btn" },
                        React.createElement("i", { className: "fa fa-twitter fa-fw" }),
                        " Login with Twitter"),
                    React.createElement("a", { href: "#", className: "google btn" },
                        React.createElement("i", { className: "fa fa-google fa-fw" }),
                        " Login with Google+")),
                React.createElement("div", { className: "col" },
                    React.createElement("div", { className: "hide-md-lg" },
                        React.createElement("p", null, "Or sign in manually:")),
                    React.createElement("input", { type: "text", name: "username", placeholder: "Username", required: true }),
                    React.createElement("input", { type: "password", name: "password", placeholder: "Password", required: true }),
                    React.createElement("input", { type: "submit", value: "Login" }))))),
    React.createElement("div", { className: "bottom-container" },
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col" },
                React.createElement("a", { href: "#", className: "btn" }, "Sign up")),
            React.createElement("div", { className: "col" },
                React.createElement("a", { href: "#", className: "btn" }, "Forgot password?")))))); };
exports.default = react_redux_1.connect()(Login);
//# sourceMappingURL=Login.js.map