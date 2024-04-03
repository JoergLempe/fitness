import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>Hier kommt Inhalt</div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
