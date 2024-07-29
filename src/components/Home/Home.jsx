import React from 'react';
import "../../styles/Showreel.css";
import show from "../../assets/show.mp4";
import v1 from "../../assets/v1.mp4";
import v2 from "../../assets/v2.mp4";
import v3 from "../../assets/v3.mp4";
import v4 from "../../assets/v4.mp4";

function Home() {
  return (
    <div>Hosme
        <div className='vidcard'>
              <div className='show__video'>
              <video src={v1} controls autoPlay muted loop className='show__video'></video>
              </div>
        </div>
        <div className='vidcard'>
              <div className='show__video'>
              <video src={v1} controls autoPlay muted loop className='show__video'></video>
              </div>
        </div>
        <div className='vidcard'>
              <div className='show__video'>
              <video src={v2} controls autoPlay muted loop className='show__video'></video>
              </div>
        </div>
        <div className='vidcard'>
              <div className='show__video'>
              <video src={v3} controls autoPlay muted loop className='show__video'></video>
              </div>
        </div>
        <div className='vidcard'>
              <div className='show__video'>
              <video src={v4} controls autoPlay muted loop className='show__video'></video>
              </div>
        </div>
    </div>
  )
}

export default Home