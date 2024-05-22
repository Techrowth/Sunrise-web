import React from 'react'
import { Link } from 'react-router-dom';

import CartProduct1 from '../assets/img/product/product1.png';
import CartProduct2 from '../assets/img/product/product2.png';
import CartCrossIcon from '../assets/img/icon/cross-icon.png';



export default function MyCartProducts() {
  return (
    <div className="cart__table">
      <table className="cart__table--inner">
        <thead className="cart__table--header">
          <tr className="cart__table--header__items">
            <th className="cart__table--header__list">Product</th>
            <th className="cart__table--header__list">Quantity</th>
            <th className="cart__table--header__list">Edit</th>
          </tr>
        </thead>
        <tbody className="cart__table--body">
          <tr className="cart__table--body__items">
            <td className="cart__table--body__list">
              <div className="cart__product d-flex align-items-center">
                <div className="cart__thumbnail">
                  <Link to="/product-details"><img className="border-radius-5" src={CartProduct1} alt="cart-product" /></Link>
                </div>
                <div className="cart__content">
                  <h4 className="cart__content--title"><Link to="/product-details">Black Free Size T-Shirt </Link></h4>
                  <span className="cart__content--variant">COLOR: Black</span>
                </div>
              </div>
            </td>
            <td className="cart__table--body__list">
              <div className="quantity__box">
                <button type="button" className="quantity__value quickview__value--quantity decrease" aria-label="quantity value" value="Decrease Value">-</button>
                <label>
                  <input type="number" className="quantity__number quickview__value--number" defaultValue={2} data-counter />
                </label>
                <button type="button" className="quantity__value quickview__value--quantity increase" aria-label="quantity value" value="Increase Value">+</button>
              </div>
            </td>
            <td className="cart__table--body__list">
              <button className="cart__remove--btn" aria-label="search button" type="button">
                <img className='img-fluid' src={CartCrossIcon}></img>
              </button>
            </td>
          </tr>
          <tr className="cart__table--body__items">
            <td className="cart__table--body__list">
              <div className="cart__product d-flex align-items-center">
                <div className="cart__thumbnail">
                  <Link to="/product-details"><img className="border-radius-5" src={CartProduct2} alt="cart-product" /></Link>
                </div>
                <div className="cart__content">
                  <h4 className="cart__content--title"><Link to="/product-details">Black Free Size T-Shirt </Link></h4>
                  <span className="cart__content--variant">COLOR: Black</span>
                </div>
              </div>
            </td>
            <td className="cart__table--body__list">
              <div className="quantity__box">
                <button type="button" className="quantity__value quickview__value--quantity decrease" aria-label="quantity value" value="Decrease Value">-</button>
                <label>
                  <input type="number" className="quantity__number quickview__value--number" defaultValue={1} data-counter />
                </label>
                <button type="button" className="quantity__value quickview__value--quantity increase" aria-label="quantity value" value="Increase Value">+</button>
              </div>
            </td>
            <td className="cart__table--body__list">
              <button className="cart__remove--btn" aria-label="search button" type="button">
                <img className='img-fluid' src={CartCrossIcon}></img>
              </button>
            </td>
          </tr>
          <tr className="cart__table--body__items">
            <td className="cart__table--body__list">
              <div className="cart__product d-flex align-items-center">
                <div className="cart__thumbnail">
                  <Link to="/product-details"><img className="border-radius-5" src={CartProduct1} alt="cart-product" /></Link>
                </div>
                <div className="cart__content">
                  <h4 className="cart__content--title"><Link to="/product-details">Black Free Size T-Shirt </Link></h4>
                  <span className="cart__content--variant">COLOR: Black</span>
                </div>
              </div>
            </td>
            <td className="cart__table--body__list">
              <div className="quantity__box">
                <button type="button" className="quantity__value quickview__value--quantity decrease" aria-label="quantity value" value="Decrease Value">-</button>
                <label>
                  <input type="number" className="quantity__number quickview__value--number" defaultValue={1} data-counter />
                </label>
                <button type="button" className="quantity__value quickview__value--quantity increase" aria-label="quantity value" value="Increase Value">+</button>
              </div>
            </td>
            <td className="cart__table--body__list">
              <button className="cart__remove--btn" aria-label="search button" type="button">
                <img className='img-fluid' src={CartCrossIcon}></img>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}
