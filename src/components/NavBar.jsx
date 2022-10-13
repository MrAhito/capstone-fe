import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link as Linkv2, useLocation } from "react-router-dom";
import { animateScroll as scroll, Link } from "react-scroll";
import { navLinks } from "../data/data";
function NavBar() {
    const location = useLocation();

    useEffect(() => {
        scroll.scrollToTop();
    }, [location.pathname]);
    return (

<Navbar collapseOnSelect expand="lg" variant="dark"  className="nav-bar">
    <Container className="">
        <Navbar.Brand  className="nav-brand">
            <Linkv2 to="/" className="nav-brand">
                <h1>
                    <img alt="nav-logo" src={require("../img/favicon.ico")} />
                    <span>Bataan Space</span>
                </h1>           
            </Linkv2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto nav-list">
                <>
                    {navLinks.map((v, i) => location.pathname === "/" ? 
                        <li  key={i}>
                            <Link activeClass="active" to={v.to} spy={true} smooth={true} offset={v.to ==="contact" ? -125 : 0} duration={500}>
                                {v.name}
                            </Link>
                        </li>
                    : 
                        <li  key={i}>
                            <Linkv2 to="/">{v.name}</Linkv2>
                        </li>
                    )}
                </>
                <li>
                    <Linkv2 to={"cable"}>Cable Tv</Linkv2>
                </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    <div className="nav-bg"></div>
    </Navbar>
            
    );
}
// <Link to="/" className="nav-brand">
// {/* <h1>
// <img alt="nav-logo" src={require("../img/favicon.ico")} />
// Bataan Space
// </h1>
// </Link>
// <ul className="nav-list">
// <li>
// {navLinks.map((v, i) => location.pathname === "/" ? (
//     <Link key={i} activeClass="active" to={v.to} spy={true} smooth={true} offset={v.to ==="contact" ? -125 : 0} duration={500}>
//         {v.name}
//     </Link>
// ) : (
//     <Linkv2 key={i} to="/">{v.name}</Linkv2>
// ))}
// </li>
// <li>
// <Linkv2 to={"cable"}>Cable Tv</Linkv2>
// </li>
// </ul>
// <div className="nav-btn"></div>
// <div className="nav-bg"></div> */}
export default NavBar;