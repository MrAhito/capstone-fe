import React, { Component } from "react";
import { Image } from "react-bootstrap";
import * as AI from "react-icons/ai";
import Package from "../components/Package";
import PackageType from "../components/PackageType";
import InfiniteLoop from "infinite-loop-animation";
import { Link } from "react-router-dom";

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            package: true,
            packageNet: [
                { mbps: 100, price: 1500, speed: 107, add: 40 },
                { mbps: 150, price: 2250, speed: 137, add: 70 },
                { mbps: 250, price: 2750, speed: 190, add: 140 },
            ],
            packageCatv: [
                { mbps: 15, price: 1350, speed: 40, add: -8 },
                { mbps: 30, price: 1600, speed: 50, add: 0 },
                { mbps: 50, price: 1750, speed: 65, add: 13 },
            ],
            images: [
                require("../img/yout.png"),
                require("../img/google.png"),
                require("../img/faceb.png"),
                require("../img/insta.png"),
                require("../img/netflix.png"),
                require("../img/riot.png"),
            ],
            algo: [
                require("../img/algo.png"),
                require("../img/algo1.png"),
                require("../img/algo2.png"),
                require("../img/algo3.png"),
            ],
        };
    }
    reorderImages(i) {
        var arr2 = this.state.images,
            arr = [];
        for (var a = 0; a < 6; a++) {
            if (i > 5) {
                i = 0;
            }
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
                    <InfiniteLoop
                        data={this.state.algo}
                        duration={1200}
                        size={30}
                    />
                    <div className="bg"></div>
                </section>
                <section id="info">
                    <div className="bg-ligh"></div>
                    <div className="brands">
                        {this.state.images.map((v, i) => (
                            <InfiniteLoop 
                                key={i}
                                data={this.reorderImages(5 - i)}
                                duration={1200}
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
                            ? this.state.packageCatv.map((v, i) => (
                                  <Package key={i} data={v} />
                              ))
                            : this.state.packageNet.map((v, i) => (
                                  <Package key={i} data={v} />
                              ))}
                    </div>
                </section>
                <section id="contact">
                    <div className="bg-ligh"></div>
                    <div className="mapouter">
                        <h2>Location</h2>
                        <iframe
                            title="location"
                            width="100%"
                            height="400"
                            id="gmap_canvas"
                            src={"https://maps.google.com/maps?q=bataan%20space%20cable&t=&z=16&ie=UTF8&iwloc=&output=embed"}
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                        />
                    </div>
                    <div className="contacts">
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
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <a href="#package">Internet</a>
                                </li>
                                <li>
                                    <a href="catv">CATv</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>Address</h4>
                            <ul>
                                <li>
                                    <AI.AiOutlineMail className="ic" />{" "}
                                    <span>bscnicompany@gmail.com</span>
                                </li>
                                <li>
                                    <AI.AiOutlinePhone className="ic" />{" "}
                                    <span>09123456789</span>
                                </li>
                                <li>
                                    <AI.AiOutlineShop className="ic" />
                                    <span>
                                        #156 Cuaderno Ave. Doña Francisca,
                                        Balanga City Bataan
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>Social Media</h4>
                            <a href="https://www.facebook.com/profile.php?id=100083135060391">
                                <AI.AiFillFacebook className="ic" /> Facebook
                            </a>
                        </div>
                    </div>
                </section>
                <footer>
                    <a href="https://github.com/MrAhito">MrAhito</a> •{" "}
                    <AI.AiOutlineCoffee /> • Capstone FE 2022
                </footer>
            </>
        );
    }
}

export default HomePage;
