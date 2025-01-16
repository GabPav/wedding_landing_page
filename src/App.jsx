import React from 'react'
import './index.css'
import Navbar from './components/Navbar.jsx'
import 'boxicons/css/boxicons.min.css';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testemonials.jsx';
import ContactUs from './components/ContactUs.jsx';
import Footer from './components/Footer.jsx';


function App() {

  return (
    <div className='w-full h-full absolute'>
      <Navbar />
      <Hero />
      <div id='about'>
      <About />
      </div>
      <div id='gallery'>
      <Gallery />
      </div>
      <div id='testimonials'>
      <Testimonials />
      </div>
      <div id='contact'><ContactUs /></div>
      <Footer />
    </div>
  )
}

export default App
