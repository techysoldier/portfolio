import React from 'react'
import './About.css'
import anotherme from '../../images/anotherme.jpg'
import {FaAward} from 'react-icons/fa'
import {BiLibrary} from 'react-icons/bi'
import {IoSchoolOutline} from 'react-icons/io5'

const About = () => {
  return (
    <section id= 'about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src= {anotherme} alt= 'About Me' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Project Based Experience</small>
            </article>

            <article className='about__card'>
              <BiLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Projects Completed</small>
            </article>

            <article className='about__card'>
              <IoSchoolOutline className='about__icon'/>
              <h5>Tools and Technologies</h5>
              <small>Python | JavaScript | HTML | CSS | React.js | Django | JSON </small>
            </article>
          </div>
            <p>
            Devin Johnson is a full stack software developer with a background in military service, law enforcement, and administration. 
            Recently Devin graduated a Software Development course with DevCodeCamp and looks forward to breaking into the SDE industry.  
            </p>

        
          <a href ="#contact" className='btn'> Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About