import React from 'react'

function LoginSignup() {
  return (
    <>
     <div className='container-fluid'>
      <div className='container p-5 d-flex justify-content-center'>
        <div className='row'>
          <div className='col-lg-12'>
          <div className='card'>
          
          <div className='card-body'>
          <form>
            <input type='text' id='name' className='form-control' placeholder='Your Name'></input><br/>
            <input type='email' id='email' className='form-control' placeholder='Email Adddress'></input><br/>
            <input type='password' id='pwrd' className='form-control' placeholder='Password'></input><br/>
            <input type='button' className='btn btn-danger w-50' value="Continue"></input>
          </form><br/>
          Already have an accout ?<span className='text-danger'> Login</span><br/>
          <input type='checkbox' id='checkbox'></input>
          By continuing, i agree to the terms of use & privacy policy.
          </div>
        </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default LoginSignup