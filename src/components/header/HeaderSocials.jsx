import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {GoMarkGithub} from 'react-icons/go'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="__blank"><AiOutlineLinkedin/></a>
        <a href='https://github.com' target="__blank"><GoMarkGithub/></a>
    </div>
  )
}

export default HeaderSocials