import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/item/Item'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import './CSS/shopCategory.css'
function ShopCategory(props) {
  const {all_product} = useContext(ShopContext)
  return (
    <>  
      <div className='container'>
        <div className='container-fluid'>
          <img className='img-fluid' src={props.banner}></img>
        </div>
        <div className='container pt-5 d-flex justify-content-between'>
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className='sortdropdown text-center pt-1'>Sort by <img src={dropdown_icon}/></div>
        </div>
        <div className='row'>
          {all_product.map(function(item,i){
            if(props.category===item.category){
              return <div className='col-lg-3 col-md-6 col-sm-12'>
                <Item id={i} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
              </div>
            }else{
              return null
            }
          })}
        </div>
      </div>
    </>
  )
}

export default ShopCategory