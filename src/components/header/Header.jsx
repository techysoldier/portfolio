import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from "../../images/me.jpg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I am</h5>
        <h1>Devin Johnson</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={me} alt="" />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
        </div>
      </header>
  )
}

export default Header