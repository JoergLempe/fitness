import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><div>Text</div></BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
