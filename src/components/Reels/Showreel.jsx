import React from 'react';
import "../../Styles/Showreel.css";
import show from "../../assets/show.mp4";
import hf from "../../assets/hf.jpg"

function Showreel() {
  return (
    <div className='background' id='showreel'>
        <div className='show_reels'>
            <b className='reels__text'>SHOW </b> <b className='reels__text text' >REELS</b>
        </div>
        <div className='show__box'>
            <div className='vidcard'>
              <div className='show__video'>
              <video src={show} controls autoPlay muted loop className='show__video'></video>
              </div>
            </div>
          
        </div>
        <div className='stands'>
          <div className='stand'>
          </div>
        </div>

        <div className='stands'>
          <div className='downstand'>

          </div>
        </div>

    </div>
  )
}

export default Showreel;