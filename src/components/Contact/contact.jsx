import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ptpyh4n', 'template_ect52ib', form.current, 'VWKdw3TIDJ-Bkgnnc')
    e.target.reset()
  };
  return (
    <section id= 'contact'>
      <h5>Let's Chat</h5>
      <h2>Contact</h2>
      <div className='container.contact__container'>
      <article className='contact__options'>
        <AiOutlineMail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>devinsymone@icloud.com</h5>
        <a href="mailto:devinsymone@icloud.com">Send Message</a>
      </article>
      </div>
    {/* End of Contact */}

  <form ref={form} onSubmit={sendEmail}>
    <input type="text" name='name'  placeholder='Your Full Name' required />
    <input type ="email" name='email' placeholder='Your Email' required/>
    <textarea type = 'message' rows="7" placeholder='Your Message' required></textarea>
    <button type='submit' className='contactbtn'>Submit</button>
  </form>
       </section>
  )
}

export default Contact