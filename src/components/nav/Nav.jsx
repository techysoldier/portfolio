import React, { useState } from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import{MdPersonOutline} from 'react-icons/md'
import{BsBook} from 'react-icons/bs'
import{BiMessage} from 'react-icons/bi'


const Nav = () => {
  const[ activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav
      === '#about' ? 'active': ''}><MdPersonOutline/></a>
      <a href="#experience"onClick={() => setActiveNav('#experience')} className={activeNav
      === '#experience' ? 'active': ''}><BsBook/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav
      === '#contact' ? 'active': ''}><BiMessage/></a>
    </nav>
  )
}

export default Nav