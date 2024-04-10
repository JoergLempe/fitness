import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Greeting from "/components/greeting";
import Hero from "/components/hero";
import Start from "/components/startcontent";
import FeldGrau from "/components/feldgrau";
import NavBar2 from "/components/navibar2";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Greeting />
        <Hero />
        <Start />
        <FeldGrau />
        <NavBar2 />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
