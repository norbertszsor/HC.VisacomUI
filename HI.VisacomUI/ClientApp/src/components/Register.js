"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
require("./cssStyles/Register.css");
var Register = function () { return (React.createElement("form", { action: "action_page.php" },
    React.createElement("div", { className: "container" },
        React.createElement("h1", null, "Register"),
        React.createElement("p", null, "Please fill in this form to create an account."),
        React.createElement("hr", null),
        React.createElement("label", { htmlFor: "email" },
            React.createElement("b", null, "Email")),
        React.createElement("input", { type: "text", placeholder: "Enter Email", name: "email", id: "email", required: true }),
        React.createElement("label", { htmlFor: "psw" },
            React.createElement("b", null, "Password")),
        React.createElement("input", { type: "password", placeholder: "Enter Password", name: "psw", id: "psw", required: true }),
        React.createElement("label", { htmlFor: "psw-repeat" },
            React.createElement("b", null, "Repeat Password")),
        React.createElement("input", { type: "password", placeholder: "Repeat Password", name: "psw-repeat", id: "psw-repeat", required: true }),
        React.createElement("hr", null),
        React.createElement("p", null,
            "By creating an account you agree to our ",
            React.createElement("a", { href: "#" }, "Terms & Privacy"),
            "."),
        React.createElement("button", { type: "submit", className: "registerbtn" }, "Register")),
    React.createElement("div", { className: "container signin" },
        React.createElement("p", null,
            "Already have an account? ",
            React.createElement("a", { href: "#" }, "Sign in"),
            ".")))); };
exports.default = react_redux_1.connect()(Register);
//# sourceMappingURL=Register.js.map