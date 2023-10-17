"use client"
import React from 'react';
import Accordion from './components/Accordians';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Whatwework from './components/Whatwework';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import ImageSlider from './components/ImageSlider';



const Home = () => {

  return (
    <>
      <div className="container overflow-hidden">
        <Navbar />
        <Herosection />
        <Whatwework />
        <About />
        <Clients/>
        <ImageSlider/>
        <Services />
        <Portfolio/>
        <Team />
        <Pricing/>
        <Accordion />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Home;