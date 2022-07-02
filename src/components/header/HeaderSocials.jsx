import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {GoMarkGithub} from 'react-icons/go'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/devinsymonejohnson' target="__blank"><AiOutlineLinkedin/></a>
        <a href='https://github.com/techysoldier' target="__blank"><GoMarkGithub/></a>
    </div>
  )
}

export default HeaderSocials