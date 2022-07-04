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
              <h5>Training</h5>
              <small>DevCodeCamp Full Stack Development Course</small>
            </article>
          </div>


          <p>
            Devin Symone Johnson completed a full stack software development course with DevCode Camp in 2022. 
            She comes from a military and first responder background. She has always had an interest in technology,
            and decided to try her hand at coding. After self teaching for a few months she decided to enroll in a program. 
          </p>

        
          <a href ="#contact" className='btn'> Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About