import React, { Component } from 'react'
import Switch from "react-switch";

class PackageType extends Component {
  render() {
    return (
  <Switch
    checked={this.props.checked}
    onChange={()=>{this.props.handleChange()}}
    handleDiameter={28}
    offColor="#fff"
    onColor="#020031"
    offHandleColor="#020031"
    onHandleColor="#fff"
    height={40}
    width={250}
    borderRadius={50}
    activeBoxShadow="1px 1px 1px 2px #020031"
    uncheckedIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "150px",
          marginLeft: "-130px",
          fontSize: 15,
          color: "#020031",
          fontWeight: 600,
        }}
      >
        Internet Only
      </div>
    }
    checkedIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "150px",
          marginLeft: "50px",
          fontSize: 15,
          fontWeight: 600,
        }}
      >
        Internet + CATv
      </div>
    }
    className="react-switch"
    id="small-radius-switch"
  />
    )
  }
}

export default PackageType