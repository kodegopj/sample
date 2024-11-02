import React from 'react';
import "../../Styles/Introduction.css";
import Us from "./Us.jsx";
import Hiring from "./Hiring";
import Pa3 from './Pa3.jsx';



function About() {
  return (
 <div className='about'>
    <div className='Who__text'><b>Who we are</b></div>
    <div className='p__text'>Highly Favored is a video editing agency whose mission is to provide clients with an opportunity to tell their stories and reach more people with video.</div>
    <br />
    <div className='p__text'>
        We started Highly Favored after we realized that entrepreneurs, businesses, and influencers don't always have the expertise or resources to edit their videos.
    </div>
    <div className='about__img'>
      <div className='p1'>
        <div className='hanz'></div>
        
        <div >
       
          <div className='name__text'><i>Hanz Jonvi Malata, </i></div>
          <div className='name__text'><i>Co-Founder of Highly Favored</i></div>
        </div>
      </div>

      <div className='p2'>
        <div className='paul'></div>
        
        <div >
        <div className='name__text'><i>Paul John Cunanan,</i> </div>
        <div className='name__text'><i>Founder of Highly Favored</i></div>
        </div>
      </div>

      <div className='p1'>
        <div className='andrey'></div>
        
        <div >
          <div className='name__text'><i>Andrey Flordeliza</i></div>
          <div className='name__text'><i>Senior Editor of Highly Favored</i></div>
        </div>
      </div>

    </div>
    <Us/>
    <Hiring/>
    <Pa3/>
   
 </div>

  )
}

export default About