import React from "react";
import "./scss/ContactHero.scss";
import lunch from "../assets/lunch.png"
const ContactHero = () => {
  return (
    <>
      <div className="bg-contact-page">
        <div className="container container-contact-us">
          <div className="contact-heading-hero">
            <div className="heading-contact-page text-center text-white ">Contact us </div>

            <div className="text-center text-white para-contact-page">
              Interested in our IT services or need advice? Then please get in
              touch and we’ll be glad to help.
            </div>
            
          </div>
        </div>

      
        <section className='section-about-card'>
   <div className="container ">
   
     <div className="row  ">
       <div className="column">
         <div className="card ">
           <h2 className='text-white fw-bold'>FAQs</h2>
           <p className='pt-3 fw-bold'>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           consectetur adipisicing elit. Lorem ipsum dolor, sit amet  sit amet
           </p>
           <div className="icon-wrapper">
             <img src={lunch} alt="" style={{ width: "63px" }} />
           </div>
          
           <div className='fs-4 text-white fw-bold pt-3'>Help center</div>
           
         </div>
       </div>
       <div className="column">
       <div className="card ">
           <h2 className='text-white fw-bold'>FAQs</h2>
           <p className='pt-3 fw-bold'>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           consectetur adipisicing elit. Lorem ipsum dolor, sit amet  sit amet
           </p>
           <div className="icon-wrapper">
             <img src={lunch} alt="" style={{ width: "63px" }} />
           </div>
          
           <div className='fs-4 text-white fw-bold pt-3'>Help center</div>
           
         </div>
       </div>
     
       <div className="column">
       <div className="card ">
           <h2 className='text-white fw-bold'>FAQs</h2>
           <p className='pt-3 fw-bold'>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           consectetur adipisicing elit. Lorem ipsum dolor, sit amet  sit amet
           </p>
           <div className="icon-wrapper">
             <img src={lunch} alt="" style={{ width: "63px" }} />
           </div>
          
           <div className='fs-4 text-white fw-bold pt-3'>Help center</div>
           
         </div>
       </div>
     </div>
   </div>
 </section>
        </div>

       
 
    </>
  );
};

export default ContactHero;
