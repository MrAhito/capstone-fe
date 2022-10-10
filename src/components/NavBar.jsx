import React, { Component } from "react";
import { Container } from "react-bootstrap";

class NavBar extends Component {
    render() {
        return (
            <Container className="p-0">
              <nav className="nav-bar">
                <h1 className="nav-brand">
                  <img alt="nav-logo" src={require('../img/favicon.ico')} />
                  Bataan Space
                </h1>
                <ul className="nav-list">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#package">Package</a></li>
                  <li><a href="#help">Help & Support</a></li>
                  <li><a href="#cable">Cable Tv</a></li>
                </ul>
                <div className="nav-btn">
                  <button href="apply">Apply Now</button>
                </div>
              </nav>
            </Container>
        );
    }
}

export default NavBar;
