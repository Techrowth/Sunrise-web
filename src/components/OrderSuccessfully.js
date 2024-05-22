import React from 'react'
import { Link } from 'react-router-dom';

import DoneIcon from '../assets/img/icon/done.png';


export default function OrderSuccessfully() {
  return (
    <div className='container'>
      <div className='order-complitaed text-center justify-content-center'>
        <img className='img-fluid' src={DoneIcon}></img>
        <h3 className='my-2'>Successfully Placed Order</h3>
        <h5 style={{ fontWeight: '500' }}>Thanks For Ordering</h5>
        <div className="minicart__button d-flex justify-content-center my-4">
          <Link to='/track-order' className="primary__btn minicart__button--link my-2" style={{ padding: '0px 40px', borderRadius: '15px' }}>Continue</Link>
        </div>
      </div>
    </div>

  )
}
