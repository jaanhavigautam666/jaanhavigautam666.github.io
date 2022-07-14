import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from 'C:/Users/acer/Desktop/resumep/React_based_portfolio_website/react-portfolio-website-1/src/assets/ME.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>
          Hello I'm 
        </h5>
        <h1>
          Jaanhavi 
        </h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
         <img src={ME} alt="me" /> 
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header