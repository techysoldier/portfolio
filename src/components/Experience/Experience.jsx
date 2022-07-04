import React from 'react'
import './Experience.css'
import {BsShieldCheck} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id= 'experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className='experience__container'>
      <div className='experience_frontend'>
      <h3>Frontend Development</h3>
      <div className='experience__content'>
        <article className='experience__details'>
        <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
        </div>
        <BsShieldCheck/>
        <div>
        <h4>CSS</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        <BsShieldCheck/>
        <div>
        <h4>JavaScript</h4>
        <small className='text-light'>Proficient</small>
        </div>
        <BsShieldCheck/>
        <div>
        <h4>REACT</h4>
        <small className='text-light'>Proficient</small>
        </div>
        <BsShieldCheck/>
        <div>
        <h4>Bootstrap</h4>
        <small className='text-light'>Proficient</small>
        </div>
        <BsShieldCheck/>
        </article>
        </div>
      </div>

    {/* End of Frontend */}

      <div className='experience_backend'>
      <h3>Backend Development</h3>
      <article className='experience__details'>
        <div>
        <h4>Python</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        <BsShieldCheck/>
        <div>
        <h4>Django</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        <BsShieldCheck/>
        <div>
        <h4>C#</h4>
        <small className='text-light'>Proficient</small>
        </div>
        <BsShieldCheck/>
        <div>
        <h4>ASP.Net</h4>
        <small className='text-light'>Proficient</small>
        </div>
        <BsShieldCheck/>
        <div>
        <h4>SQL</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>
      </div>
      </div>
      </section>
  )
  }

  

export default Experience