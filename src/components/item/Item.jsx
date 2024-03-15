import React from 'react'
import './Item.css'
function Item(props) {
  return (
    <> 
     <div className='container-fluid'>
      <div className='container p-2'>
            <div className='card'>
              <img className='img-fluid' src={props.image}></img>
              <div className='card-body'>
                <p>{props.name}</p>
                <div className='d-flex gap-2'>
                  <div className='new_price'>${props.new_price}</div>
                  <div className='old_price'>{props.old_price}</div>
                </div>
              </div>
            </div>
      </div>
     </div>
    </>
  )
}

export default Item