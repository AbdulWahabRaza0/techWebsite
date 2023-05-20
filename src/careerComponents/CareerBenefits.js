import React from 'react'
import "./scss/CareerBenefits.scss"
import health from "../assets/health.png"
import riding from "../assets/riding.png"
import lunch from "../assets/lunch.png"
import emoji from "../assets/emoji.png"
import flexibility from "../assets/flexibility.png"
const CareerBenefits = () => {
  return (
   <div className="bg-benefits-sections" >
    <div className="container">
        <div className="benefit-heading text-center text-white fs-1 fw-bold">Benefits</div>
        <div className="benefit-p text-center text-white fs-5">Here are just some of the perks you’ll get as a member of tech</div>


        {/* benefit cards */}
        <div className="container">
        <div className="row gap-5 cards-benefits-career">
            <div className="col-lg-2  card-bg-benefits py-4">
               <div className="benefit-card ">
                <div className="div d-flex justify-content-center">
                    <img src={health} alt="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" className='w-25' />
                    </div>
                    <div className="card-heading-benefits text-center fs-4 pt-3 text-white">Health care</div>
                    <div className="card-para-benefits pt-3 text-white">No-premium health, dental, and vision benefits, 401K, FSA</div>
               
               </div>
            </div>
            <div className="col-lg-2  card-bg-benefits py-4">
            <div className="benefit-card ">
                <div className="div d-flex justify-content-center">
                    <img src={flexibility} alt="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" className='w-25' />
                    </div>
                    <div className="card-heading-benefits text-center fs-4 pt-3 text-white">Flexibility</div>
                    <div className="card-para-benefits pt-3 text-white">No-premium health, dental, and vision benefits, 401K, FSA</div>
               
               </div>
            </div>
            <div className="col-lg-2  card-bg-benefits py-4">
            <div className="benefit-card ">
                <div className="div d-flex justify-content-center">
                    <img src={lunch} alt="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" className='w-25' />
                    </div>
                    <div className="card-heading-benefits text-center fs-4 pt-3 text-white">Lunch</div>
                    <div className="card-para-benefits pt-3 text-white">No-premium health, dental, and vision benefits, 401K, FSA</div>
               
               </div>
            </div>
            <div className="col-lg-2  card-bg-benefits py-4">
            <div className="benefit-card ">
                <div className="div d-flex justify-content-center">
                    <img src={emoji} alt="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" className='w-25' />
                    </div>
                    <div className="card-heading-benefits text-center fs-4 pt-3 text-white">Fun</div>
                    <div className="card-para-benefits pt-3 text-white">No-premium health, dental, and vision benefits, 401K, FSA</div>
               
               </div>
            </div>
            <div className="col-lg-2  card-bg-benefits py-4">
            <div className="benefit-card ">
                <div className="div d-flex justify-content-center">
                    <img src={riding} alt="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" className='w-25' />
                    </div>
                    <div className="card-heading-benefits text-center fs-4 pt-3 text-white">Life style</div>
                    <div className="card-para-benefits pt-3 text-white">No-premium health, dental, and vision benefits, 401K, FSA</div>
               
               </div>
            </div>
         
        </div>
        </div>

  </div>
    </div>

  )
}

export default CareerBenefits