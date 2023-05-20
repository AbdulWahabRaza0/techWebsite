import React from 'react'
import "./scss/ContactFormProductive.scss"
import building from "../assets/building.png"
const ContactFormProductive = () => {
  return (
   <>
   <div className="bg-contact">
<section className='contact container'>
  <div className="contact-form ">
    <h1 className=''>Contact <span>us</span></h1>
    <p> i am available for freelancer work connect with me via phone :032219903230 or email: info@tech.com</p>
    <form action="">
        <input type="" placeholder='your name' required />
        <input type="" placeholder='email' required />
        <input type="" placeholder='write a subject' required />
        <textarea name="" id="" cols="30" rows="10" placeholder='Your message' required></textarea>
        <input type="sumbit" name='' value="Submit" className='btn' />
    </form>
  </div>
  {/* //// */}
  <div className="contact-img">
    <img src={building} alt="" />
  </div>
</section>
</div>
   </>
  )
}

export default ContactFormProductive