import React, { Component } from 'react'
import { Container, Image } from 'react-bootstrap'
import * as AI from 'react-icons/ai' 

class HomePage extends Component {
  render() {
    return (
      <Container fluid="lg">
        <section id="home">
          <div className='algo'></div>
          <h2>Fiber Internet and Cable service to your Home</h2>
          <p className='desc'>A Local Fiber Internet and Digital Cable Service Provider in Bataan ensuring high-speed internet connection and HD digital tv signal to your home with the use of Optical Fiber technology.</p>
          <button className='apply-btn'>Apply Now <AI.AiOutlineSend className='apply-ic' /> </button>
          <div className='bg'></div>  
        </section>
            <div className="brands">
              <Image src={require('../img/yout.png')} />
              <Image src={require('../img/google.png')} />
              <Image src={require('../img/faceb.png')} />
              <Image src={require('../img/insta.png')} />
              <Image src={require('../img/netflix.png')} />
              <Image src={require('../img/riot.png')} />
            </div>
            <div className='comp-info'>
              <p className="comp-desc">
              Bataan Space Cable Network, Inc. (“BSCNI”) is a corporation duly organized and existing with the Securities and Exchange Commission, under the laws of the Republic of the Philippines. BSCNI initially started in 1994 as a cable and satellite TV provider under the sole proprietorship of Rodolfo G. Zabala. Over the years, BSCNI has continuously developed and upgraded its infrastructure to provide quality and affordable service to the City of Balanga, the capital of the Province of Bataan, and its nearby towns such as Pilar, and Orion. Recently, BSCNI has transitioned to a fiber-optic system to provide its subscribers digital cable TV and internet service.
              </p>
              <Image src={require('../img/about.jpg')} />
            </div>
        <section id="package">
          <div className='bga-2'></div>  
          <h1>sadasd</h1>
        </section>
        <section id="help">
        </section>
        <section id="cable">
        </section>
      </Container>

    )
  }
}

export default HomePage