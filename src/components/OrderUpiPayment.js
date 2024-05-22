import React from 'react'
import PhonePeIcon from '../assets/img/icon/phonepe.png';
import GPayIcon from '../assets/img/icon/gpay.png';
import PaytmIcon from '../assets/img/icon/paytm.png';

export default function OrderUpiPayment() {
  return (
    <div>
      <h5 style={{ fontWeight: '500', marginTop: '-30px' }}>UPI Apps</h5>

      <div className='credit-and-debit'>
        <h5 style={{ fontWeight: '500', fontSize: '12px' }}>Your UPI Apps</h5>

        <div className="card-form">
          <form >

            <div className='row'>
              <div className='col-9'>
                <div className="form-check my-1">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    PhonePe
                  </label>
                </div>
              </div>
              <div className='col-3 text-end'>
                <img className='img-fluid' src={PhonePeIcon}></img>
              </div>
            </div>



            <div className='row'>
              <div className='col-9'>
                <div className="form-check my-1">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Google Pay
                  </label>
                </div>
              </div>
              <div className='col-3 text-end'>
                <img className='img-fluid' src={GPayIcon}></img>
              </div>
            </div>

            <div className='row'>
              <div className='col-9'>
                <div className="form-check my-1">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Paytm
                  </label>
                </div>

              </div>
              <div className='col-3 text-end'>
                <img className='img-fluid' src={PaytmIcon}></img>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
