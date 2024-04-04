import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Greeting from "/components/greeting";
import Hero from "/components/hero";
import NavBar from "/components/navibar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Greeting />
        <Hero />
        <NavBar />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
