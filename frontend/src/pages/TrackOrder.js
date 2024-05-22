import React, { useLayoutEffect } from 'react';
import OrderCheckout from '../components/OrderCheckout';
import OrderTrack from '../components/OrderTrack';


export default function TrackOrder() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='container order-checkout-page my-5'>
        <div className='row' style={{ marginBottom: '20px' }}>
            <h2 style={{marginBottom:'40px', fontWeight:'600', fontFamily:'Montserrat'}}>Track Order</h2>
          <div className="col-xl-8 col-lg-9">
            <h3 className='mb-4' style={{ fontFamily: 'Montserrat' }}>Arriving 05th November 2023</h3>
          <OrderTrack/>
          </div>
          <div className="col-xl-4 col-lg-3">
            <OrderCheckout />
          </div>
        </div>
      </div>
    </>
  );
}
