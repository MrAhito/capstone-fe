import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
    return (
        <nav className="nav-bar">
          <Link to="/" className="nav-brand">
            <h1>
                  <img alt="nav-logo" src={require("../img/favicon.ico")} />
                  Bataan Space
            </h1>
          </Link>
            <ul className="nav-list">
                <li>
                   {location.pathname === "/" ? <a href="#home">Home</a> :  <Link to="/">Home</Link>}
                </li>
                <li>
                   {location.pathname === "/" ? <a href="#package">Package</a> :  <Link to="/">Package</Link>}
                </li>
                <li>
                   {location.pathname === "/" ? <a href="#contact">Contact Us</a> :  <Link to="/">Package</Link>}
                </li>
                <li>
                    <Link to={"cable"}>Cable Tv</Link>
                </li>
            </ul>
            <div className="nav-btn"></div>
            <div className="nav-bg"></div>
        </nav>
    );
}

export default NavBar;
