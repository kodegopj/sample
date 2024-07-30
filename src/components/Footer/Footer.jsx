import React from "react";
import "../../Styles/Footer.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiMessenger } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Highly Favored</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/kodegopj"
            className="footer__social-link"
            target="_blank"
          >
            <SiMessenger/>
          </a>
          <a href="https://www.linkedin.com/in/paul-john-cunanan-b91176297" className="footer__social-link" target="_blank">
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/pauljohn.cunanan.14"
            className="footer__social-link"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
