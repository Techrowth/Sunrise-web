import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderPaymentCreditDebitCard() {


    return (
        <div>
            <h5 style={{ fontWeight: '500', marginTop: '-30px' }}>Credit or debit card</h5>

            <div className='credit-and-debit'>
                <h5 style={{ fontWeight: '500', fontSize: '11px' }}>Please ensure your card is enabled for online transaction.</h5>

                <div className="card-form">
                    <form >


                        <div className="col-12 mb-12">
                            <div className="checkout__input--list my-2">
                                <label>
                                    <input className="checkout__input--field border-radius-5" placeholder="Card Holder Name" type="text" />
                                </label>
                            </div>
                        </div>


                        <div className="col-12 mb-12">
                            <div className="checkout__input--list my-2">
                                <label>
                                    <input className="checkout__input--field border-radius-5" placeholder="Card number" type="text" />
                                </label>
                            </div>
                        </div>

                        <h5 style={{ fontWeight: '500', fontSize: '13px', marginBottom: '8px' }}>Expiry date</h5>

                        <div className='row'>
                            <div class="col-lg-4 mb-12">
                                <div class="checkout__input--list checkout__input--select select">

                                    <select class="checkout__input--select__field border-radius-5" id="expiraydate" >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-4 mb-12">
                                <div class="checkout__input--list checkout__input--select select">

                                    <select class="checkout__input--select__field border-radius-5" id="expirayyyear" >
                                        <option value="1">2023</option>
                                        <option value="2">2024</option>
                                        <option value="3">2025</option>
                                        <option value="5">2026</option>
                                        <option value="6">2027</option>
                                    </select>
                                </div>
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

                            <div class="col-lg-7 mb-12 text-end">
                                <Link className="primary__btn minicart__button--link my-2" style={{ height: '32px', lineHeight: '32px', borderRadius: '30px', fontWeight: '500' }} >Send OTP</Link>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
