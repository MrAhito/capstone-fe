import React, { useEffect } from "react";
import { Link as Linkv2, useLocation } from "react-router-dom";
import { animateScroll as scroll, Link } from "react-scroll";
import { navLinks } from "../data/data";
function NavBar() {
    const location = useLocation();

    useEffect(() => {
        scroll.scrollToTop();
    }, [location.pathname]);
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
                    {navLinks.map((v, i) => location.pathname === "/" ? (
                        <Link key={i} activeClass="active" to={v.to} spy={true} smooth={true} offset={v.to ==="contact" ? -125 : 0} duration={500}>
                            {v.name}
                        </Link>
                    ) : (
                        <Linkv2 key={i} to="/">{v.name}</Linkv2>
                    ))}
                </li>
                <li>
                    <Linkv2 to={"cable"}>Cable Tv</Linkv2>
                </li>
            </ul>
            <div className="nav-btn"></div>
            <div className="nav-bg"></div>
        </nav>
    );
}

export default NavBar;