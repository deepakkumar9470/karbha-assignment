import React from 'react'
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Feature from './components/Feature';

import Home from './components/Home';
import img1 from './images/about.png'
import img2 from './images/download.png'



function App() {



  return (
    <div className="App">
         
          <Home/>
          <Feature/>
          <About title="About DigiMarket" image={img1} button="Read More"/>
          <About title="Download the theme and customize" image={img2} button="Download Themes"/>
          <Contact/>
    </div>
  );
}

export default App;
