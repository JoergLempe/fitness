import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import homew from "../../img/icon-home-white.png";
import homeg from "../../img/icon-home-grey.png";
import barw from "../../img/icon-bar-white.png";
import barg from "../../img/icon-bar-grey.png";
import profw from "../../img/icon-profile-white.png";
import profg from "../../img/icon-profile-grey.png";

const NavBar2 = () => {
  const location = useLocation();
  const isHomeActive = location.pathname === "./main.jsx";
  const isWorkActive = location.pathname === "/pages/work.jsx";
  const isProfileActive = location.pathname === "/pages/profile.jsx";

  return (
    <nav className="bg-black p-4 fixed bottom-0 w-full rounded-lg flex justify-between items-center">
      <div className="flex justify-between w-full">
        <div className="flex justify-center w-1/4">
          <NavLink to="/">
            <img
              src={isHomeActive ? homew : homeg}
              alt="Home"
              className="h-5 w-5 mr-2"
            />
          </NavLink>
        </div>
        <div className="flex justify-center w-1/4">
          <NavLink to="/work">
            <img
              src={isWorkActive ? barw : barg}
              alt="Home"
              className="h-5 w-5 mr-2"
            />
          </NavLink>
        </div>
        <div className="flex justify-center w-1/4">
          <NavLink to="/profile">
            <img
              src={isProfileActive ? profw : profg}
              alt="Home"
              className="h-5 w-5 mr-2"
            />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar2;
