import React, { Component } from "react";
import { Card } from "react-bootstrap";
import AnimatedProgressProvider from "../api/AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import * as AI from "react-icons/ai";

class Package extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         progress : 0,
      }
    }
    render() {
        return (
            <Card className="pckg-card">
                <div className="speed">
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={this.props.data.speed}
                        duration={1}
                        easingFunction={easeQuadInOut}
                        repeat
                    > 
                    {(value) => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbar
                                    className="speed-text"
                                    value={value}//10}//
                                    text={roundedValue > 1 ? roundedValue+this.props.data.add : roundedValue}
                                    styles={buildStyles({
                                        textSize:33,
                                        textColor: "#040A45",
                                        pathColor:"#040A45",
                                        rotation: 0.4 + (10 / 100) / 2
                                      })}
                                />
                            );
                        }} 
                    </AnimatedProgressProvider> 
                </div>
                <div className="plan-desc">
                    <span>Mbps</span>
                    <div className="plan-info">
                        <h3><span>&#8369; {this.props.data.price}.00</span>/month</h3>
                        <ul>
                            <li><AI.AiOutlineCheck className="check" /> Wi-fi Fiber Modem</li>
                            <li><AI.AiOutlineCheck className="check" />Speed Up to {this.props.data.mbps} mbps</li>
                            <li><AI.AiOutlineCheck className="check" />Digital Cable TV box{this.props.data.mbps < 100 ? "" : "(optional)"} </li>
                            <li><AI.AiOutlineCheck className="check" />IP Dynamic Private</li>
                            <li><AI.AiOutlineCheck className="check" />1 year lock in contract</li>
                        </ul>
                        <button className="apply-btn">
                            Apply Now <AI.AiOutlineSend className="apply-ic" />{" "}
                        </button>
                    </div>
                </div>
            </Card>
        );
    }
}

export default Package;
