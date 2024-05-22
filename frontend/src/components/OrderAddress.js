import React from 'react'
import { Link } from 'react-router-dom';

export default function OrderAddress() {
  return (
    <main className="main__content_wrapper">
      <form action="#">
        <div className="checkout__content--step section__contact--information">
          <div className="section__header checkout__section--header d-flex align-items-center justify-content-between mb-25">
            <h2 className="section__header--title h3">Contact information</h2>
            <p className="layout__flex--item">
              Already have an account?
              <Link className="layout__flex--item__link" to='/login' > Log in</Link>
            </p>
          </div>
          <div className="customer__information">
            <div className="checkout__email--phone mb-12">
              <label>
                <input className="checkout__input--field border-radius-5" placeholder="Email or mobile phone mumber" type="text" />
              </label>
            </div>
            <div className="checkout__checkbox">
              <input className="checkout__checkbox--input" id="check1" type="checkbox" />
              <span className="checkout__checkbox--checkmark" />
              <label className="checkout__checkbox--label" htmlFor="check1">
                Email me with news and offers</label>
            </div>
          </div>
        </div>
        <div className="checkout__content--step section__shipping--address">
          <div className="section__header mb-25">
            <h3 className="section__header--title h3">Shipping address</h3>
          </div>
          <div className="section__shipping--address__content">
            <div className="row">
              <div className="col-lg-6 mb-12">
                <div className="checkout__input--list ">
                  <label>
                    <input className="checkout__input--field border-radius-5" placeholder="First name" type="text" />
                  </label>
                </div>
              </div>
              <div className="col-lg-6 mb-12">
                <div className="checkout__input--list">
                  <label>
                    <input className="checkout__input--field border-radius-5" placeholder="Last name" type="text" />
                  </label>
                </div>
              </div>
              <div className="col-12 mb-12">
                <div className="checkout__input--list">
                  <label>
                    <input className="checkout__input--field border-radius-5" placeholder="Address" type="text" />
                  </label>
                </div>
              </div>
              <div className="col-12 mb-12">
                <div className="checkout__input--list">
                  <label>
                    <input className="checkout__input--field border-radius-5" placeholder="Land Mark" type="text" />
                  </label>
                </div>
              </div>
              <div className="col-lg-6 mb-12">
                <div className="checkout__input--list">
                  <label>
                    <input className="checkout__input--field border-radius-5" placeholder="City" type="text" />
                  </label>
                </div>
              </div>
              <div className="col-lg-6 mb-12">
                <div className="checkout__input--list">
                  <label>
                    <input className="checkout__input--field border-radius-5" placeholder="Postal code" type="text" />
                  </label>
                </div>
              </div>
            </div>
            <div className="checkout__checkbox">
              <input className="checkout__checkbox--input" id="check2" type="checkbox" />
              <span className="checkout__checkbox--checkmark" />
              <label className="checkout__checkbox--label" htmlFor="check2">
                Save this information for next time</label>
            </div>
          </div>
        </div>
        <div className="checkout__content--step__footer d-flex align-items-center">
          <Link className="continue__shipping--btn primary__btn " to="/checkout" style={{ height: '40px', lineHeight: '40px' }}>Next</Link>
        </div>
      </form>
    </main>

  )
}
