import React from 'react'

export default function OrderPlaceOrder() {
  return (
    <div className="checkout__content--step checkout__contact--information2 border-radius-5 place-order-setp my-5">
      <div className="checkout__review d-flex justify-content-between align-items-center">
        <div className="checkout__review--inner d-flex align-items-center">
          <label className="checkout__review--label" style={{ fontWeight: '500', lineHeight: '21px', fontSize: '14px', color: '#000' }}>Shipping&nbsp;to&nbsp;: &nbsp;</label>
          <span className="checkout__review--content"> <h4>Basava</h4>
            <p style={{ fontWeight: '500', lineHeight: '21px', fontSize: '14px', color: '#000' }}>  4-39, Basava Nilaya Sahakar Nagar , Near Vishal Mart Showroom - 560092 <br />Phone number : +91 98765 43210</p></span>
        </div>

      </div>
      <div className="checkout__review d-flex justify-content-between align-items-center">
        <div className="checkout__review--inner d-flex align-items-center">
          <label className="checkout__review--label" style={{ fontWeight: '500', lineHeight: '21px', fontSize: '14px', color: '#000' }}> Payment mode :</label>
          <span className="checkout__review--content" style={{ fontWeight: '500', color: '#000' }}> Cash and Delivery</span>
        </div>

      </div>
      <div className="checkout__review d-flex justify-content-between align-items-center">
        <div className="checkout__review--inner d-flex align-items-center">
          <label className="checkout__review--label" style={{ fontWeight: '500', lineHeight: '21px', fontSize: '14px', color: '#000' }}>Get it By :</label>
          <span className="checkout__review--content" style={{ fontWeight: '500', color: '#000' }}> Standard Shipping</span>
        </div>

      </div>
    </div>


  )
}
