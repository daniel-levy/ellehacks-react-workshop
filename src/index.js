import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import CSSReset from "@tds/core-css-reset";

ReactDOM.render(
  <div>
    <CSSReset />
    <App />
  </div>,
  document.getElementById("root")
);
