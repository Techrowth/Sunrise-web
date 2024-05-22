import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function MyCartCheckout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="cart__summary border-radius-10">
      <table className="cart__summary--total__table">
        <tbody>
          <tr className="cart__summary--total__list">
            <td className="cart__summary--total__title text-left" style={{ fontSize: 15, fontWeight: 600 }}>Delivery to Bangalore 560092.</td>
            <td className="cart__summary--amount text-right" style={{ color: '#EE2761', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>Change</td>
          </tr>
        </tbody>
      </table>
      <div className='mt-4'>
        <li className="widget__categories--menu__list">
          <table className="cart__summary--total__table">
            <tbody>
              <tr className="cart__summary--total__list">
                <td className="cart__summary--total__title text-left">
                  <label className="widget__categories--menu__label d-flex align-items-center">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                    <span className="widget__categories--menu__text"> <span style={{ fontSize: 15, fontWeight: 600 }}>Standard Shipping</span><br /> <span style={{ fontSize: '12px' }}>Between 05 - 08 November</span></span>
                  </label>
                </td>
                <td className="cart__summary--amount text-right mt-3 mx-2" style={{ fontSize: 15, fontWeight: 600 }}>Free</td>
              </tr>
            </tbody>
          </table>
        </li>
      </div>

      <div className="accordion">
        <div className="accordion-header" onClick={toggleAccordion}>

          <table className="cart__summary--total__table">
            <tbody>
              <tr className="cart__summary--total__list">
                <td className="cart__summary--total__title text-left" style={{ fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>Coupon/Gift Card</td>
                <td className="cart__summary--amount text-right" >        <span className='arrow-icon' style={{ marginLeft: 'auto !important', cursor: 'pointer' }}>
                  {isOpen ? (
                    <i className="fas fa-chevron-up"></i>
                  ) : (
                    <i className="fas fa-angle-down"></i>
                  )}
                </span></td>
              </tr>
            </tbody>
          </table>

        </div>
        {isOpen && (
          <div className="accordion-content my-4">
            <label>
              <input className="checkout__discount--code__input--field border-radius-5" placeholder="Gift card or discount code" type="text" fdprocessedid="kdp2ua" />
            </label>
            <ul className="d-flex text-center justify-content-center mt-4">
              <li><Link className="cart__summary--footer__btn primary__btn checkout">Apply</Link></li>
            </ul>

          </div>
        )}
      </div>

      <div style={{ width: '100%', height: "2", color: '#D9D9D9', borderBottom: '2px solid #d9d9d9', margin: '20px 0px' }}></div>



      <div className="cart__summary--total mb-20">
        <table className="cart__summary--total__table">
          <tbody>
            <tr className="cart__summary--total__list">
              <td className="cart__summary--total__title text-left my-3" style={{ fontSize: 15, fontWeight: 600 }}>Order Summary</td>
            </tr>
            <tr className="cart__summary--total__list">
              <td className="cart__summary--total__title text-left">Subtotal</td>
              <td className="cart__summary--amount text-right">₹ 1272</td>
            </tr>
            <tr className="cart__summary--total__list">
              <td className="cart__summary--total__title text-left">Standard shipping</td>
              <td className="cart__summary--amount text-right">Free</td>
            </tr>
            <tr className="cart__summary--total__list">
              <td className="cart__summary--total__title text-left" style={{ fontSize: 16, fontWeight: 600 }}>Total</td>
              <td className="cart__summary--amount text-right" style={{ fontSize: 16, fontWeight: 600 }}>₹ 1272</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cart__summary--footer">
        <ul className="d-flex text-center justify-content-center mt-3">
          <li><Link className="cart__summary--footer__btn primary__btn checkout" to='/checkout'>Buy Now</Link></li>
        </ul>
        <p className="cart__summary--footer__desc text-center pt-4" style={{ color: '#000', fontWeight: '500' }}>By proceeding to checkout, I agree to SDV’s <span style={{ color: '#EE2761' }}>User Agreement</span></p>
      </div>
    </div>

  )
}
