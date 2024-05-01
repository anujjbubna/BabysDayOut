import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Vision from './components/vision'
import Services from './components/services'
import About from './components/about'
import Contact from './components/contact'

class Home extends React.Component {

  render() { 
    return (
      <div className="home-container">
        <Helmet>
          <title>BabysDayOut</title>
          <meta property="og:title" content="BabysDayOut" />
        </Helmet>
        <Navbar></Navbar>
        <Hero></Hero>
        <div className="home-section-separator"></div>
        <Vision></Vision>
        <div className="home-section-separator"></div>
        <Services></Services>
        <div className="home-section-separator"></div>
        <About></About>
        <div className="home-section-separator"></div>
        <Contact></Contact>
        
        {/* <div id="services" className="home-services">
          <div className="home-service-card">
            <div className="home-card-content">
              <h3 className="home-text09 BigCard-Heading">Service name</h3>
              <span className="home-text10 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <button className="home-button button Anchor">READ MORE</button>
            </div>
          </div>
          <div className="home-service-card1">
            <div className="home-card-content1">
              <h3 className="home-text11 BigCard-Heading">Service name</h3>
              <span className="home-text12 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <button className="home-button1 button Anchor">READ MORE</button>
            </div>
          </div>
          <div className="home-service-card2">
            <div className="home-card-content2">
              <h3 className="home-text13 BigCard-Heading">Service name</h3>
              <span className="home-text14 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <button className="home-button2 Anchor button">READ MORE</button>
            </div>
          </div>
          <div className="home-service-card3">
            <div className="home-card-content3">
              <h3 className="home-text15 BigCard-Heading">Service name</h3>
              <span className="home-text16 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <button className="home-button3 button Anchor">READ MORE</button>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

export default Home;
