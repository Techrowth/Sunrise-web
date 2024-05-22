import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderPaymentCreditDebitCard from './OrderPaymentCreditDebitCard';
import OrderUpiPayment from './OrderUpiPayment';
import OrderUpiForm from './OrderUpiForm';

export default function OrderPayment() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('creditDebitCard'); // Default method

  // Function to handle payment method selection
  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div className='order-delivery'>
      <h4>Select a payment method</h4>

      <div className='way-to-pay'>
        <h5 style={{ fontWeight: '500', marginTop: '30px' }}>Way To Pay</h5>

        <div className='payment-method'>
          <div className='col-9'>
            <div className='row'>
              <div className='col-md-6 col-12'>
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked={selectedPaymentMethod === 'creditDebitCard'}
                    onChange={() => handlePaymentMethodChange('creditDebitCard')}
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    &nbsp; Credit or debit card
                  </label>
                </div>

                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked={selectedPaymentMethod === 'netBanking'}
                    onChange={() => handlePaymentMethodChange('netBanking')}
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    &nbsp; Net Banking
                  </label>
                </div>
              </div>

              <div className='col-md-6 col-12'>
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    checked={selectedPaymentMethod === 'upiApps'}
                    onChange={() => handlePaymentMethodChange('upiApps')}
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault3">
                    &nbsp; UPI Apps
                  </label>
                </div>

                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                    checked={selectedPaymentMethod === 'cashOnDelivery'}
                    onChange={() => handlePaymentMethodChange('cashOnDelivery')}
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault4">
                    &nbsp; Cash on Delivery
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="minicart__button d-flex justify-content-center Button-1 my-5">
          {(selectedPaymentMethod !== 'creditDebitCard' && selectedPaymentMethod !== 'upiApps') && (
            <Link className="primary__btn minicart__button--link my-2">Continue</Link>
          )}
        </div>
      </div>

      <div className='payment-done-box row'>
        <div className='col-md-6 col-12'>
          {selectedPaymentMethod === 'creditDebitCard' && <OrderPaymentCreditDebitCard />}
          {selectedPaymentMethod === 'upiApps' && (
            <OrderUpiPayment
              phonePeText="PhonePe"
              googlePayText="Google Pay"
              paytmText="Paytm"
            />
          )}
          {selectedPaymentMethod === 'cashOnDelivery' && <div className="black-page"></div>}
        </div>
        <div className='col-md-6 col-12'>
          {selectedPaymentMethod === 'upiApps' && <OrderUpiForm />}
        </div>
      </div>
      <div className='payment-continue'>
        <div className="minicart__button d-flex justify-content-end Button-2 mb-5 mx-4">
          {(selectedPaymentMethod !== 'cashOnDelivery' && selectedPaymentMethod !== 'netBanking') && (
            <Link className="primary__btn minicart__button--link my-2">Continue</Link>
          )}
        </div>
      </div>
    </div>
  );
}
