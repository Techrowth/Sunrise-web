import React from 'react'
import { Link } from 'react-router-dom';

export default function OrderDelivery() {
  return (
    <div className='order-delivery'>
      <h4>Select a delivery address</h4>

      <div className='delivery-box'>
        <div className='address-box'>
          <div className='row '>
            <div className='col-2 my-auto d-felex justify-content-end'>
              <div className='text-end'>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              </div>
            </div>
            <div className=' col-10'>
              <h4>Veeresh </h4>
              <p style={{ fontWeight: '500', lineHeight: '21px', fontSize: '14px', color: '#000' }}>4-39, Telangana chowrasta ieeja, Near MRF Showroom - 580036<br /> Phone number : +91 98765 43210</p>
            </div>
          </div>
        </div>

        <div className='address-box'>
          <div className='row '>
            <div className='col-2 my-auto d-felex justify-content-end'>
              <div className='text-end'>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
              </div>
            </div>
            <div className=' col-10'>

              <h4>Basava</h4>
              <p style={{ fontWeight: '500', lineHeight: '21px', fontSize: '14px', color: '#000' }}>  4-39, Basava Nilaya Sahakar Nagar , Near Vishal Mart Showroom - 560092 <br />Phone number : +91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* <div class="address-button-row">
  <button class="button">Button 1</button>
  <button class="button">Button 2</button>
    </div> */}

      </div>
      <div className="minicart__button d-flex justify-content-center mb-5">
        <Link className="primary__btn minicart__button--link my-2" >Delivery to this address</Link>
        <Link className="primary__btn minicart__button--link my-2" style={{ background: '#fff', color: '#ee2761', border: '1px solid #E0E0E0' }} >Add New address</Link>
      </div>
    </div>
  )
}
