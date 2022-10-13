import React, { Component } from "react";
import * as AI from "react-icons/ai";

class Footer extends Component {
    render() {
        return (
            <footer>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/MrAhito"
                >
                    MrAhito
                </a>{" "}
                • <AI.AiOutlineCoffee /> • Capstone FE 2022
            </footer>
        );
    }
}

export default Footer;
