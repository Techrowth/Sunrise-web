import React, { useLayoutEffect } from 'react';
import WishlistCard from '../components/WishlistCard';



export default function Wishlist() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='container order-checkout-page my-5'>
          {/* <WishlistCard/> */}
      </div>
    </>
  );
}
