import React from 'react'
import { Link } from 'react-router-dom';

import CheckoutProductImg from '../assets/img/product/product1.png';

export default function OrderCheckout() {
  return (

    <div className="checkout__summary ">


      <div>
        <table className="summary__table">
          <tbody className="summary__table--body">
            <tr className=" summary__table--items">
              <td className=" summary__table--list">
                <div className="product__image two  d-flex align-items-center">
                  <div className="product__thumbnail border-radius-5">
                    <Link to="/product-details"><img className="border-radius-5" src={CheckoutProductImg} alt="cart-product" /></Link>
                  </div>
                  <div className="product__description">
                    <h3 className="product__description--name h4 "><Link to="/product-details">Black Free Size T-Shirt</Link></h3>
                    <span className="product__description--variant">COLOR: Black</span>
                  </div>
                </div>
              </td>
              <td className=" summary__table--list">
                <span className="cart__price" style={{ fontWeight: '400', fontSize: '14px' }}>₹318</span>
              </td>
            </tr>
            <tr className="summary__table--items">
              <td className=" summary__table--list">
                <div className="cart__product d-flex align-items-center">
                  <div className="product__thumbnail border-radius-5">
                    <Link to="/product-details"><img className="border-radius-5" src={CheckoutProductImg} alt="cart-product" /></Link>
                  </div>
                  <div className="product__description">
                    <h3 className="product__description--name h4"><Link to="/product-details">Black Free Size T-Shirt</Link></h3>
                    <span className="product__description--variant">COLOR: Black</span>
                  </div>
                </div>
              </td>
              <td className=" summary__table--list">
                <span className="cart__price" style={{ fontWeight: '400', fontSize: '14px' }}>₹318</span>
              </td>
            </tr></tbody>
        </table>
      </div>




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

    </div>

  )
}
