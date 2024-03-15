import React from 'react'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
function FooterItem() {
  return (
    <>
      <div className='container-fluid p-5 text-center'>
        <div className='container'>
          <div className='d-flex justify-content-center gap-4'>
            <img className='img-fluid' src={footer_logo}></img>
            <h1 className='pt-4'>SHOPPER</h1>
          </div>
          <ul className='list-unstyled d-flex justify-content-center gap-3 pt-3'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div>
            <ul className='list-unstyled d-flex justify-content-center gap-3'>
              <li>
                <img className='img-fluid' src={instagram_icon}></img>
              </li>
              <li>
                <img className='img-fluid' src={pintester_icon}></img>
              </li>
              <li>
                <img className='img-fluid' src={whatsapp_icon}></img>
              </li>
            </ul>
          </div>
          <hr className='w-100'/>
          <p>Copyright @2023 - All right Reserved</p>
        </div>
      </div>
    </>
  )
}

export default FooterItem