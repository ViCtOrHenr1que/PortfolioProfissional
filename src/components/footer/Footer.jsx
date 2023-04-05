import React from 'react'
import "./footer.css"
import {FiInstagram} from 'react-icons/fi'
import{BsLinkedin} from 'react-icons/bs'
import { AiFillGithub } from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        &lt; VICTOR HENRIQUE &frasl;&gt;
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#experience">Experiência</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://github.com/ViCtOrHenr1que"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.instagram.com/victor.h_18/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/victor-henrique-7952b4211/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Victor Henrique</small>
      </div>
    </footer>
  );
}

export default Footer