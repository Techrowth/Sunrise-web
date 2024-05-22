import React, { useState, useLayoutEffect } from 'react';
import OrderAddress from '../components/OrderAddress';
import OrderDelivery from '../components/OrderDelivery';
import OrderPayment from '../components/OrderPayment';
import OrderPlaceOrder from '../components/OrderPlaceOrder';
import OrderCheckout from '../components/OrderCheckout';
import OrderSuccessfully from '../components/OrderSuccessfully';

export default function Checkout() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const [selectedComponent, setSelectedComponent] = useState('OrderAddress');

  const handleMenuClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <>
      <div className='container order-checkout-page my-5'>
        <div className='row' style={{ marginBottom: '20px' }}>
          <div className="col-xl-8 col-lg-9">
            <h3 className='mb-4' style={{ fontFamily: 'Montserrat' }}>Order</h3>
            <nav style={{ marginBottom: '40px' }}>
              <ol className="breadcrumb checkout__breadcrumb d-flex">
                <li
                  className={`breadcrumb__item ${
                    selectedComponent === 'OrderAddress' ? 'breadcrumb__item--completed' : ''
                  } d-flex align-items-center`}
                >
                  <a className="breadcrumb__link" onClick={() => handleMenuClick('OrderAddress')}>
                    <span className={selectedComponent === 'OrderAddress' ? 'active' : ''}>Address</span>
                  </a>
                  <svg className="breadcrumb__chevron-icon" xmlns="http://www.w3.org/2000/svg" width="17.007" height="16.831" viewBox="0 0 512 512">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M184 112l144 144-144 144" />
                  </svg>
                </li>
                <li
                  className={`breadcrumb__item ${
                    selectedComponent === 'OrderDelivery' ? 'breadcrumb__item--completed' : ''
                  } d-flex align-items-center`}
                >
                  <a className="breadcrumb__link" onClick={() => handleMenuClick('OrderDelivery')}>
                    <span className={selectedComponent === 'OrderDelivery' ? 'active' : ''}>Delivery</span>
                  </a>
                  <svg className="breadcrumb__chevron-icon" xmlns="http://www.w3.org/2000/svg" width="17.007" height="16.831" viewBox="0 0 512 512">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M184 112l144 144-144 144" />
                  </svg>
                </li>
                <li
                  className={`breadcrumb__item ${
                    selectedComponent === 'OrderPayment' ? 'breadcrumb__item--completed' : ''
                  } d-flex align-items-center`}
                >
                  <a className="breadcrumb__link" onClick={() => handleMenuClick('OrderPayment')}>
                    <span className={selectedComponent === 'OrderPayment' ? 'active' : ''}>Payment</span>
                  </a>
                  <svg className="breadcrumb__chevron-icon" xmlns="http://www.w3.org/2000/svg" width="17.007" height="16.831" viewBox="0 0 512 512">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M184 112l144 144-144 144" />
                  </svg>
                </li>
                <li
                  className={`breadcrumb__item ${
                    selectedComponent === 'OrderPlaceOrder' ? 'breadcrumb__item--completed' : ''
                  } d-flex align-items-center`}
                >
                  <a className="breadcrumb__link" onClick={() => handleMenuClick('OrderPlaceOrder')}>
                    <span className={selectedComponent === 'OrderPlaceOrder' ? 'active' : ''}>Place order</span>
                  </a>
                </li>
              </ol>
            </nav>
            {/* Render the selected component based on the state */}
            {selectedComponent === 'OrderAddress' && <OrderAddress />}
            {selectedComponent === 'OrderDelivery' && <OrderDelivery />}
            {selectedComponent === 'OrderPayment' && <OrderPayment />}
            {selectedComponent === 'OrderPlaceOrder' && <OrderPlaceOrder />}
          
          </div>
          <div className="col-xl-4 col-lg-3">
            <OrderCheckout />
          </div>
          {selectedComponent === 'OrderPlaceOrder' && <OrderSuccessfully />}
        </div>
      </div>
    </>
  );
}
