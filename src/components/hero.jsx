import React from "react";
import heropic from "../../img/heropic.png";

function Hero() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xs">
        <img
          src={heropic}
          alt="Training"
          className="px-10 mb-5"
          style={{ maxWidth: "100vw", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default Hero;
