import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

const Greeting2 = () => {
  return (
    <div className="h-40 bg-gradient-to-br from-fitness-color-grandis to-fitness-color-light-pink m-12  text-white p-12 rounded-lg text-3xl">
      Hallo Sportskanone!
    </div>
  );
};

export default Greeting2;
