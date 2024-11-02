import React from 'react';
import { FaStar } from "react-icons/fa6";
import "../../Styles/Moneyback.css";

function Moneyback() {
  return (
    <div className='money__main'>
        <div className=''>
            <div className='money__title'>
                <b>Money Back Guarantee</b>
            </div>

            <div className='staricon'>
            <div className='star__icon'>
                <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
            </div>
            </div>
            
            <div className='money__p'>
            If you are not happy with the video we edited, you can ask for a full refund within 3 business days after receiving the video.
            </div>
        </div>
    </div>
  )
}

export default Moneyback