import React, { useRef } from 'react';
import {  FaTimes } from "react-icons/fa";
import { RiApps2Line } from "react-icons/ri";
import "../Styles/Nav.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

  return (
    <div className='nav-head'>
        
        <p className='hf'></p> <b className='favored'>Highly Favored</b> {" "}
       
        <nav ref={navRef} className='navname'>
            <a href="#home">Home</a>
            <a href="#showreel">Show reels</a>
            <a href="#reels">More Sample</a>
            <a href="#contacts" className='contact'>
                Contact Us
            </a>

            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>

        <button className='nav-btn' onClick={showNavbar}>
            <RiApps2Line/>
        </button>
    </div>
  )
}

export default Navbar