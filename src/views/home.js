import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Vision from './components/product'
import Services from './components/features'
import About from './components/about'
import Contact from './components/contact'
import Features from './components/features'
import Product from './components/product'

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
        {/* Will add Vision to another page */}
        {/* <Vision></Vision> 
        <div className="home-section-separator"></div> */}
        <Product></Product>
        <Features></Features>
        {/* <div className="home-section-separator"></div> */}
        {/* <About></About>
        <Contact></Contact> */}
      </div>
    )
  }
}

export default Home;
