import React from 'react'
import './About.css'
import anotherme from '../../images/anotherme.jpg'
import {FaAward} from 'react-icons/fa'
import {BiLibrary} from 'react-icons/bi'

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
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Project Based Experience</small>
            </article>

            <article className='about_card'>
              <BiLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Projects Completed</small>
            </article>
          </div>


          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis adipisci, mollitia, 
            earum quas totam optio tempora quaerat, quibusdam eligendi eaque fugiat ipsam sapiente expedita 
            voluptatibus error. Ipsum, facere commodi?
          </p>

        
          <a href ="#contact" className='btn'> Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About