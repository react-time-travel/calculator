import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";

const rtt = require('react-time-travel');

ReactDOM.render(<App />, document.getElementById("root"));
rtt(document.getElementById('root'));
