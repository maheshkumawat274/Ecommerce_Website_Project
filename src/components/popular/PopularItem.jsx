import React from 'react'
import './Popular.css'
import product_item from '../assets/data'
import Item from '../item/Item'
function PopularItem() {
  return (
    <>
     <div className='container'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className='row'>
        {product_item.map((item)=><div className='col-lg-3 col-md-6 col-sm-12'>
        <Item id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
        </div>)}
      </div>
     </div>
    </>
  )
}

export default PopularItem