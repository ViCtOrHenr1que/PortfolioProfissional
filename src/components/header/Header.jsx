import React from 'react'
import "./header.css"
import CTA from './CTA'
// import ME from '../../assets/me.JPG'
import HeaderSocials from './HeaderSocials'
import pc from "../../assets/pc.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, meu nome é</h5>
        <h1>Victor Henrique</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={pc} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header