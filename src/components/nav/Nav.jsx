import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import{MdPersonOutline} from 'react-icons/md'
import{BsBook} from 'react-icons/bs'
import{BiMessage} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href="#home"><AiOutlineHome/></a>
      <a href="#about"><MdPersonOutline/></a>
      <a href="#experience"><BsBook/></a>
      <a href="#contact"><BiMessage/></a>
    </nav>
  )
}

export default Nav