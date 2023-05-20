import React from 'react'
import "./scss/ContactProductive.scss"
import { Link } from 'react-router-dom'
const ContactProductive = () => {
  return (

<>
<div className="bg-About-contact bg-productive">
   
   <div className="container ">
    
   <div className="d-flex justify-content-center">
       <div className="mm">
       <h4 className='text-center let-start-text'>Let's Started</h4>
       <div className="fs-1 about-heading">Are you ready for a better,more <br /> productive business ?</div>
       <div className='p-about pt-4'>Stop worrying about technology problems. Focus on your business.Let us  <br /> provide the support you deserve.</div>
      <div className="btn-start d-flex justify-content-center mt-4">
      <Link>
          <button className='rounded btn btn-about-contact fs-5 fw-bold '>Contact Us </button>
       </Link>
      </div>
   </div>
  
   </div>
   {/* //image section// */}
   
   </div>
   <div className='kkkk'>
   <section className='hero-header'>
    
   </section>
</div>
  </div>
</>
  )
}

export default ContactProductive