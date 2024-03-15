import React from 'react'
import './newletter.css'
function NewLetter() {
  return (
      <>
       <div className='container-fluid p-3 text-center'>
        <div className='newletter container d-flex justify-content-center align-items-center p-5'>
          <div>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to out newletter and stay updated</p>
            <input className='newletterinput' type='email' id='email' placeholder='Your Email id'></input>
            <button className='newletterbtn'>Subscribe</button>
          </div>
        </div>
       </div>
      </>
  )
}

export default NewLetter