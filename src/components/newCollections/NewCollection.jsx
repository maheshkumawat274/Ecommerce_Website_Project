import React from 'react'
import new_collection from '../assets/new_collections'
import Item from '../item/Item'
function NewCollection() {
  return (
    <>
     <div className='container-fluid p-5'>
      <div className='container'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='row'>
          {new_collection.map((item,i)=><div className='col-lg-3 col-md-6 col-sm-12'>
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          </div>)}
        </div>
      </div>
     </div>
    </>
  )
}

export default NewCollection