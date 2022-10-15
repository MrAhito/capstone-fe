import React, { Component } from "react";
import { Accordion, Image } from "react-bootstrap";
import * as AI from "react-icons/ai";
import Package from "../components/Package";
import PackageType from "../components/PackageType";
import InfiniteLoop from "infinite-loop-animation";
import { Link } from "react-router-dom";
import { packageNet, packageCatv, images, algo, faqs, cardsInq } from "../data/data";
import { Link as SectionLink } from "react-scroll";

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            package: true,
        };
    }
    reorderImages(i) {
        var arr2 = images, arr = [];

        for (var a = 0; a < 6; a++) {
            if (i > 5) { i = 0; }
            arr.push(arr2[i]);
            i++;
        }
        return arr;
    }
    handleChange(checked) {
        this.setState({ package: checked });
    }
    
    render() {
        return (
            <>
                <section id="home">
                    <h2>Fiber Internet and Cable service to your Home</h2>
                    <p className="desc">
                        A Local Fiber Internet and Digital Cable Service
                        Provider in Bataan ensuring high-speed internet
                        connection and HD digital tv signal to your home with
                        the use of Optical Fiber technology.
                    </p>
                    <button className="apply-btn box">
                        <Link to="apply">
                            Apply Now <AI.AiOutlineSend className="apply-ic" />
                        </Link>
                    </button>
                    <InfiniteLoop data={algo} duration={500} size={30} />
                    <div className="bg"></div>
                </section>
                <section id="info">
                    <div className="bg-ligh"></div>
                    <div className="brands">
                        {images.map((v, i) => (
                            <InfiniteLoop
                                key={i}
                                data={this.reorderImages(5 - i)}
                                duration={1000}
                                size={30}
                            />
                        ))}
                    </div>
                    <div className="comp-info">
                        <div className="comp-desc">
                            <p>
                                <span className="comp-title">
                                    Bataan Space Cable Network, Inc. (“BSCNI”)
                                </span>
                                is a corporation duly organized and existing
                                with the Securities and Exchange Commission,
                                under the laws of the Republic of the
                                Philippines. BSCNI initially started in 1994 as
                                a cable and satellite TV provider under the sole
                                proprietorship of Rodolfo G. Zabala. Over the
                                years, BSCNI has continuously developed and
                                upgraded its infrastructure to provide quality
                                and affordable service to the City of Balanga,
                                the capital of the Province of Bataan, and its
                                nearby towns such as Pilar, and Orion. Recently,
                                BSCNI has transitioned to a fiber-optic system
                                to provide its subscribers digital cable TV and
                                internet service.
                            </p>
                            <Image src={require("../img/about.jpg")} />
                        </div>
                    </div>
                </section>
                <section id="package">
                    <h2>Our Featured Package</h2>
                    <PackageType
                        checked={this.state.package}
                        handleChange={() => {
                            this.handleChange(!this.state.package);
                        }}
                    />
                    <div className="packages">
                        {this.state.package
                            ? packageCatv.map((v, i) => (
                                  <Package key={i} data={v} />
                              ))
                            : packageNet.map((v, i) => (
                                  <Package key={i} data={v} />
                              ))}
                    </div>
                </section>
                <section id="contact">
                    <div className="bg-ligh"></div>
                    <div className="helps">
                        <h2>Frequenty Asked Questions</h2>
                        <Accordion defaultActiveKey="" flush>
                            {faqs.map((v, i) => (
                                <Accordion.Item key={i} eventKey={i}>
                                    <Accordion.Header>
                                        {v.title}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        {v.desc}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                    <div className="inquiry">
                        <h3>Still need help?</h3>
                        <p>You can reach out to us with your concern through email or phone.</p>
                        <div className="contact-cards">
                            {cardsInq.map((v, i) => 
                                <div key={i} className="card">
                                    {v.ic}
                                    <h4>{v.title}</h4>
                                    <p>{v.desc}</p>
                                    {v.item}
                                </div>)}
                        </div>
                    </div>
                    <div className="mapouter">
                        <h3>Location:</h3>
                        <iframe
                            title="location"
                            width="100%"
                            height="460"
                            id="gmap_canvas"
                            src={
                                "https://maps.google.com/maps?q=bataan%20space%20cable&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            }
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                        />
                    </div>
                    <div className="foot-notes">
                        <div className="brand-logo">
                            <span>
                                <img
                                    alt="brand-logo"
                                    src={require("../img/favicon.ico")}
                                />
                                BSCNI
                            </span>
                            <p>
                                Bataan Space Cable Network Inc.
                                <br />
                                Local Internet and Digital Cable service
                                provider of Bataan.
                            </p>
                        </div>
                        <div>
                            <h4>Our Service</h4>
                            <ul>
                                <li>
                                    <SectionLink
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        Home
                                    </SectionLink>
                                </li>
                                <li>
                                    <SectionLink
                                        to="package"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        Internet
                                    </SectionLink>
                                </li>
                                <li>
                                    <Link to={"cable"}>Cable Tv</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>Social Media</h4>
                            <a href="https://www.facebook.com/profile.php?id=100083135060391" target="_blank" rel="noopener noreferrer">
                                <AI.AiFillFacebook className="ic" /> Facebook
                            </a>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default HomePage;
