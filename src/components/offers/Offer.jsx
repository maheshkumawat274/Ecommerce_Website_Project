import React from 'react'
import exclusive_image from '../assets/exclusive_image.png'
import './offer.css'
function Offer() {
  return (
    <>
     <div className='container-fluid p-5'>
      <div className='container offerscolor'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center'>
            <div>
              <h1 className='offertext'>Exclusive<br/>Offers For You</h1>
              <p className='fs-5'>ONLY ON BEST SELLERS PRODUCTS</p>
              <button className='btn btn-danger px-5 pt-2 pb-2'>Check Now</button>
              </div>

          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 text-center pt-5'>
            <img className='img-fluid' src={exclusive_image}></img>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Offer