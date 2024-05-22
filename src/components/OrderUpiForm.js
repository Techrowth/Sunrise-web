import React from 'react'
import { Link } from 'react-router-dom';

export default function OrderUpiForm(props) {
    return (
        <div>
            <h5 style={{ fontWeight: '500', marginTop: '20px', marginBottom: '20px' }}></h5>

            <div className='credit-and-debit'>
                <h5 style={{ fontWeight: '500', fontSize: '12px' }}>{props.mode}</h5>


                <div className="col-12 mb-12">
                    <div className="checkout__input--list my-2">
                        <label>
                            <input className="checkout__input--field border-radius-5" placeholder="UPI Id" type="text" />
                        </label>
                    </div>
                </div>

                <div className='row'>
                    <div class="col-lg-5 mb-12">
                        <div class="checkout__input--list my-2">
                            <label>
                                <input className="checkout__input--field border-radius-5" placeholder="Enter OTP" type="text" />
                            </label>
                        </div>
                    </div>

                    <div class="col-lg-7 mb-12 text-end mt-2">
                        <Link className="primary__btn minicart__button--link my-2" style={{ height: '32px', lineHeight: '32px', borderRadius: '30px', fontWeight: '500' }} >Send OTP</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
