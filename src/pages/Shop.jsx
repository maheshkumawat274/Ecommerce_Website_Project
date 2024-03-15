import React from 'react';
import Shopitem from '../components/shopitem/Shopitem';
import PopularItem from '../components/popular/PopularItem';
import Offer from '../components/offers/Offer';
import NewCollection from '../components/newCollections/NewCollection';
import NewLetter from '../components/newletter/NewLetter';
import FooterItem from '../components/footer/FooterItem';
function Shop() {
  return (
    <>
     <Shopitem/>
     <PopularItem/>
     <Offer/>
     <NewCollection/>
     <NewLetter/>
    </>
  )
}

export default Shop