import React, {useState} from 'react'

import { FaInstagram,FaLinkedin, FaYoutube} from 'react-icons/fa';
import {GiHamburgerMenu} from "react-icons/gi";
import "./navbar.css";
// import myImage from '../Assets/jsw_logo.png'
// import React, { useState } from "react";
// import "./navbar.css";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
        {/* <img src= {myImage}  alt="alternative-text"></img> */}
          <h2>
            JSW 
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
            <a href="#">about</a>
             
            </li>
            <li>
            <a href="#">services</a>
             
            </li>
            <li>
            <a href="#">contact</a>
              
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.instagram.com/jsw.group/"
                target="_jsw">
                <FaInstagram className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/jswgroup/mycompany/verification/"
                target="_jsw">
                <FaLinkedin className="linkedn" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@JSWGroup"
                target="_thapa">
                <FaYoutube className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>JSW E-Library</h1>
      </section>
    </>
  );
};

export default Navbar;