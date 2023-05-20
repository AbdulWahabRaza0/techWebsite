import React from 'react'
import "./scss/CustomSoftwareSec.scss"
import { Link} from "react-router-dom";
const CustomSoftwareSec = () => {
  return (
  <div className="bg-custom-software">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
                <div className="hhh">
                <div className='heading-custom-software'>Custom Software Development Services</div>
                <div className='para-custom-software mt-3'> Web applications, portable applications, mixed undertakings, and then some.350 + projects | Since 2017</div>
                <div className="list-custom-software mt-4">
                  
                   <li> Advanced tech stack such as Elixir,ruby-on-rails,flutter,kotlin,lonic,mean,python etc  </li>
                        <li>intregration of advanced technologies such as artificial intelligence,big data etc      </li>
                        <li>Daily stand-up meetings with products managers  </li>
                        <li>Staffing with 2 weaks  </li>
                        <li> try risk free-trial   </li>
                </div>
                <Link to="#" className='btn-link'>
                <button className='btn-custom w-25 py-2 rounded  mt-3'>Let' talk</button>
                </Link>
                </div>
            </div>
            <div className="col-lg-6">
                <div className='w-100 bg-col-grow p-5 h-100 d-flex justify-content-center align-items-center'>
                    <div className="hhh">
                    <h1 className='text-center display-5 fw-bold text-white'>GROW YOUR BUSSINESS</h1>
                    <div className='text-center text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default CustomSoftwareSec