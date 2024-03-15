import React from 'react'
import './shopitem.css'
import handIcon from '../assets/hand_icon.png'
import arrowIcon from '../assets/arrow.png'
import heroImage from '../assets/hero_image.png'
function Shopitem() {
  return (
    <>
     
     <div className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 p-5'>
            <p style={{fontSize:"25px"}}>NEW ARRIVALS ONLY</p>
            <h1 className='textsize'>new <img className='img-fluid' src={handIcon}></img><br></br>collections<br/>for everyone</h1>
            <button className='btn btn-danger'>Latest Collection <img className='img-fluid' src={arrowIcon}/></button>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 text-center'>
            <img className='img-fluid' src={heroImage}></img>
          </div>
        </div>
      </div>
     </div>

    </>
  )
}

export default Shopitem