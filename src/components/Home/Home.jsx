import React from 'react';
import Navbar from '../Navbar.jsx';
import "../../Styles/Home.css";
import Landing from "./Landing";
import Showreel from '../Reels/Showreel.jsx';
import Reels from '../Reels/Reels.jsx';
import Footer from '../Footer/Footer.jsx';
import Contact from '../Contact/Contact.jsx';
import Skills from "../Reels/Skills";


function Home() {
  return (
    <>
      <div >
    
        <div className='home__main' id='home'>
        <Navbar/>
          <div className='home__img'>
          <Landing/>
          </div>
          <Showreel/>
          <Reels/>
          <Skills/>
          <Contact/>
          <Footer/>
         
          
        </div>
      </div>
    </>
  )
}

export default Home;