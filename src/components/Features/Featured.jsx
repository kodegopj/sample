import React from 'react';
import "../../Styles/Featured.css";

function Featured() {
  return (
    <div>
        <div className='featured__title'>
            <b> SOME OF OUR BEST FEATURES</b>
        </div>

        <br />

        <div className='main__box'>
            <div className='box'>
                <div className='name__title'>Professional Editors On Demand</div>
                <br />
                <div className='name__text'>
                In order for Highly Favored to be the best video editing service in the industry, Highly Favored  recruits top talent to handle your edits. Contact us and get your videos edited by expert editors who always strive to make you look amazing.
                </div>
            </div>

            <div className='box'>
                <div className='name__title'>Stock Video & Audio Included</div>
                <br />
                <div className='name__text'>
                Every subscription plan includes stock video and royalty free audio that we will use to totally exceed your expectations in your edits. Simply ask your editor to include whatever and they will do that.
                </div>
            </div>

            <div className='box'>
                <div className='name__title'>Speedy & Reliable Support</div>
                <br />
                <div className='name__text'>
                We are here to help you so that you are able to focus more on video creation and running other parts of your business. We won't stop working until you're overly satisfied and that's built into our culture
                </div>
            </div>

        </div>

        <div className='main__box'>
            <div className='box'>
                <div className='name__title'>Turnaround Time Is Just 2 Days</div>
                <br />
                <div className='name__text'>
                Highly Favored doesn’t take weeks to edit like the other guys. Instead, we offer a 2 day turnaround time. When you get your video back you can always ask for revisions as well. Revisions only take 1 day! For complex videos it can take a few additional hours.
                </div>
            </div>

            <div className='box'>
                <div className='name__title'>Expert Video Consulting Included</div>
                <br />
                <div className='name__text'>
                We’re so much more than just editors. When you signup you can schedule a 1 on 1 call with one of our team members so we can get to know your style and help you create better content on your end.
                </div>
            </div>

            <div className='box'>
                <div className='name__title'>We Deliver Better Quality Videos</div>
                <br />
                <div className='name__text' >
                Not only will we take the burden of editing off your shoulders but the quality of your videos are going to skyrocket and really help you claim your spot as the authority in your space.
                </div>
            </div>

        </div>


    </div>
  )
}

export default Featured