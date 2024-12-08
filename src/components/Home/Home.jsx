import React from 'react';
import Navbar from '../Navbar.jsx';
import "../../Styles/Home.css";
import Landing from "./Landing";
import Showreel from '../Reels/Showreel.jsx';
import Reels from '../Reels/Reels.jsx';
import Footer from '../Footer/Footer.jsx';
import Contact from '../Contact/Contact.jsx';
import Skills from "../Reels/Skills";
import Introduction from "../Introduction/About.jsx";
import Featured from '../Features/Featured.jsx';
import Areyou from '../What/Areyou.jsx';
import Ourvideo from '../Ourvideoeditingservices/Ourvideo.jsx';
import Whatwedo from '../What we do/Whatwedo.jsx';
import Howitworks from '../How it works/Howitworks.jsx';
import Moneyback from '../Moneyback guarantee/Moneyback.jsx';

function Home() {
  return (
    <>
      <div >
    
        <div className='home__main' id='home'>
        <Navbar/>
          <div className='home__img'>
          <Landing/>
          </div>
          <Introduction/>
          <Featured/>
          <Areyou/>
          <Ourvideo/>
          <Whatwedo/>
          <Howitworks/>
          <Moneyback/>
          {/* <Showreel/>
          <Reels/>
          <Skills/> */}
          {/* <Contact/> */}
          <Footer/>
         
          
        </div>
      </div>
    </>
  )
}

export default Home;