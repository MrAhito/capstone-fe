import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { channels } from "../data/data";
import * as AI from "react-icons/ai";
import { Link } from "react-router-dom";

class CablePage extends Component {
    render() {
        return (
            <section id="cable">
                <div className="cable-banner">
                    <Image
                        alt="cable banner-img"
                        src={require("../img/hbanner.jpg")}
                    />
                    <Image
                        alt="cable banner-img"
                        src={require("../img/hbanner2.jpg")}
                    />
                    <button type="submit" className="apply-btn w-25">
                        <Link to="/apply" state={{type: "new", price: 350, plan: "cable" }}>
                            Apply Now <AI.AiOutlineSend className="apply-ic" />
                        </Link>
                    </button>
                    <h2>Watch your Family's Favorite TV Channels</h2>
                    <p>
                        For only <span>₱ 350.00</span> per month you can now watch all your
                        favorite local and international channel in HD.
                    </p>
                </div>

                <ul className="channel-list">
                    {channels.map((v, i) => (
                        <li key={i} className="channel-item">
                            <div className="channel-logo">
                                <img
                                    src={require("../img/" + v.img)}
                                    alt="ex"
                                />
                            </div>
                            {v.hd ? (
                                <img
                                    className="hd-ico"
                                    src={require("../img/hd-ico.png")}
                                    alt="HD Icon"
                                />
                            ) : (
                                ""
                            )}
                            <span>{v.name}</span>
                        </li>
                    ))}
                </ul>
                <div className="bg"></div>
            </section>
        );
    }
}

export default CablePage;
