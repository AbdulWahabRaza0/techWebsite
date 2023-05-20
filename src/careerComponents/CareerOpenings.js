import React from 'react'
import './scss/CareerOpenings.scss'
import angular from "../assets/angular.png"
import magento from "../assets/magento.png"
import android from "../assets/android.png"
const CareerOpenings = () => {
  return (
<div className="bg-career-opening">
    <div className="container">
        <div className="career-opening-heading  text-center display-4 fw-bold">Current Openings</div>
        <div className="career-opening-p text-center pt-3">feel fulfilled.have fun.help us to shape the future</div>

        {/* vacnacy */}
     
  <div className='vacanies-list'>
   
    <div className="row">
      <ul className="col-12" >
        <li className="job-card new featured">
          <div className="job-card__info">
            <div className="d-md-flex align-items-center">
              <div className="img-c"><img src={angular}/></div>
              <div>
                <div className="d-flex align-items-center">
                  <p>Blockchain</p>
                  <p className="tag-new">New!</p>
                  <p className="tag-featured">Featured</p>
                </div><a href="#" className='vacancy-heading'>
                  <h2>Senior Blockchain Developer</h2></a>
             
              </div>
            </div>
          </div>
          <ul className="job-card__tags">
          <li>Lahore</li>
          <li>Full Time</li>
            <li>Apply now</li>
          </ul>
        </li>
        <li className="job-card new featured">
          <div className="job-card__info">
            <div className="d-md-flex align-items-center">
              <div className="img-c"><img src={android}/></div>
              <div>
                <div className="d-flex align-items-center">
                  <p>UI/UX</p>
                  <p className="tag-new">New!</p>
                  <p className="tag-featured">Featured</p>
                </div><a href="#" className='vacancy-heading'>
                  <h2>UI/UX Designer</h2></a>
             
              </div>
            </div>
          </div>
          <ul className="job-card__tags">
          <li>Lahore</li>
          <li>Full Time</li>
            <li>Apply now</li>
          </ul>
        </li>
        <li className="job-card new featured">
          <div className="job-card__info">
            <div className="d-md-flex align-items-center">
              <div className="img-c"><img src={magento}/></div>
              <div>
                <div className="d-flex align-items-center">
                  <p>React Js Developer</p>
                  <p className="tag-new">New!</p>
                  <p className="tag-featured">Featured</p>
                </div><a href="#" style={{textDecoration:"none"}}
                >
                  <h2 className='vacancy-heading' >Senior React Developer</h2></a>
             
              </div>
            </div>
          </div>
          <ul className="job-card__tags">
          <li>Lahore</li>
          <li>Full Time</li>
            <li>Apply now</li>
          </ul>
        </li>
        <li className="job-card new featured">
          <div className="job-card__info">
            <div className="d-md-flex align-items-center">
              <div className="img-c"><img src={angular}/></div>
              <div>
                <div className="d-flex align-items-center">
                  <p>Java Developer</p>
                  <p className="tag-new">New!</p>
                  <p className="tag-featured">Featured</p>
                </div><a href="#" style={{textDecoration:"none"}}>
                  <h2 className='vacancy-heading'>Senior Java Developer</h2></a>
             
              </div>
            </div>
          </div>
          <ul className="job-card__tags">
          <li>Lahore</li>
          <li>Full Time</li>
            <li>Apply now</li>
          </ul>
        </li>
        <li className="job-card new featured">
          <div className="job-card__info">
            <div className="d-md-flex align-items-center">
              <div className="img-c"><img src={magento}/></div>
              <div>
                <div className="d-flex align-items-center">
                  <p>Sales intern</p>
                  <p className="tag-new">New!</p>
                  <p className="tag-featured">Featured</p>
                </div><a href="#" style={{textDecoration:"none"}}>
                  <h2 className='vacancy-heading'>Sales Intern</h2></a>
             
              </div>
            </div>
          </div>
          <ul className="job-card__tags">
          <li>Lahore</li>
          <li>Full Time</li>
            <li>Apply now</li>
          </ul>
        </li>
      
      </ul>
    </div>
  </div>
   <div className="weneed text-white text-center fs-4 py-4">we are always on the lookout for talented folk to join our team .follow us on linkedin!</div>
    </div>
</div>
  )
}

export default CareerOpenings