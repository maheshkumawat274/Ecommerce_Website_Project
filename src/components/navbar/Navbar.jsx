import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
function Navbar() {
  const[menu,setmenu]=useState('');
  const handlerMenuhrTag=(event)=>{
     setmenu(event.target.firstChild.data);
  }
  return (
    <>
            
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container">
           <a class="navbar-brand " href="#"><img className='img-fluid' src={logo}></img></a>
           <p className='pt-3' style={{fontSize:"30px"}}>SHOPPER</p>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse justify-content-around" id="navbarNav">
             <ul class="navbar-nav gap-4">
               <li class="nav-item active">
                 <a class="nav-link" onClick={handlerMenuhrTag} href="#"><Link style={{textDecoration:"none",color:'black'}} to='/'>Shop</Link>{menu==='Shop'?<hr/>:<></>}</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" onClick={handlerMenuhrTag} href="#"><Link style={{textDecoration:"none",color:'black'}} to='/men'>Men</Link>{menu==='Men'?<hr/>:<></>}</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" onClick={handlerMenuhrTag} href="#"><Link style={{textDecoration:"none",color:'black'}} to='/women'>Women</Link>{menu==='Women'?<hr/>:<></>}</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" onClick={handlerMenuhrTag} href="#"><Link style={{textDecoration:"none",color:'black'}} to='/kids'>Kids</Link>{menu==='Kids'?<hr/>:<></>}</a>
               </li>
             </ul>
             <div className='d-flex'>
               <button className='menu-btn'><Link style={{textDecoration:"none",color:'black'}} to='/login'>Login</Link></button>
               <Link style={{textDecoration:"none",color:'black'}} to='/cart'><img className='mx-4' src={cart_icon}></img></Link>
               <div className='count'>0</div>
             </div>
           </div>
         </div>
       </nav>
    </>
  )
}

export default Navbar