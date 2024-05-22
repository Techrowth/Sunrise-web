import React from 'react';
import { Link } from 'react-router-dom';
import ProductImg1 from '../assets/img/product/product-1.png';
import ProductImg2 from '../assets/img/product/product-2.png';
import ProductImg3 from '../assets/img/product/product-3.png';

import WishlistIcon from '../assets/img/icon/love.png';
import WishlistRemove from '../assets/img/icon/clear.png';

export default function WishlistCard() {
    return (
        <div className="container product-card-design ">
            <div className="tab_content">
                <div className="tab_pane active product-rows show">
                    <h2 className='text-center ' style={{ marginBottom: '60px', fontWeight: '600' }}>Wish List</h2>
                    <div className="product__section--inner row  g-0">

                        <div className="col-md-3 col-6">
                            <div className="product-card">
                                <div className="image-container">
                                    <div className="main-slide-product">
                                        <div className="product__items">
                                            <ul className="product__items--action wishlist-card-icons d-flex">
                                                <li className="product__items--action__list" style={{ marginRight: 'auto' }}>
                                                    <li className="">
                                                        <Link className="below-wishlist-heart" to="/wishlist">
                                                            <img src={WishlistIcon} className='img-fluid' style={{ width: '25px', height: '25px' }} alt="Heart Icon" />
                                                        </Link>
                                                    </li>
                                                </li>

                                                <li className="">
                                                    <Link className="below-wishlist-heart" to="/cart">
                                                        <img src={WishlistRemove} className='img-fluid' style={{ width: '25px', height: '25px' }} alt="Clear Icon" />
                                                    </Link>
                                                </li>
                                            </ul>

                                            <div className="product__items--thumbnail">
                                                <Link className="product__items--link" to="/product-details">
                                                    <img className="product__items--img product__primary--img" src={ProductImg1} alt="Oversize Cotton T-shirt" />
                                                    <img className="product__items--img product__secondary--img" src={ProductImg1} alt="Oversize Cotton T-shirt" />
                                                </Link>
                                            </div>
                                            <div className="product__items--content">
                                                <span className="product__items--content__subtitle">Printed T-Shirts, Women</span>
                                                <h3 className="product__items--content__title h4"><Link to="/product-details">Oversize Cotton T-shirt</Link></h3>
                                                <div className="product__items--price">
                                                    <span className="current__price">₹380</span>
                                                    <span className="price__divided" />
                                                    <span className="old__price">₹670</span>
                                                </div>

                                                <ul className="product__items--action d-flex">
                                                    <li className="product__items--action__list">
                                                        <Link className="product__items--action__btn add__to--cart" to="/cart">
                                                            <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                                                                <g transform="translate(0 0)">
                                                                    <g>
                                                                        <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                                                        <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452.451.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                                                        <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452.451.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <span className="add__to--cart__text"> + Add to cart</span>
                                                        </Link>
                                                    </li>
                                                    <li className="">
                                                        <Link className="below-wishlist-heart" to="/wishlist">
                                                            <img src={WishlistIcon} className='img-fluid' style={{ width: '25px', height: '25px' }}></img>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-6">
                            <div className="product-card">
                                <div className="image-container">
                                    <div className="main-slide-product">
                                        <div className="product__items">
                                            <ul className="product__items--action wishlist-card-icons d-flex">
                                                <li className="product__items--action__list" style={{ marginRight: 'auto' }}>
                                                    <li className="">
                                                        <Link className="below-wishlist-heart" to="/wishlist">
                                                            <img src={WishlistIcon} className='img-fluid' style={{ width: '25px', height: '25px' }} alt="Heart Icon" />
                                                        </Link>
                                                    </li>
                                                </li>

                                                <li className="">
                                                    <Link className="below-wishlist-heart" to="/cart">
                                                        <img src={WishlistRemove} className='img-fluid' style={{ width: '25px', height: '25px' }} alt="Clear Icon" />
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="product__items--thumbnail">
                                                <Link className="product__items--link" to="/product-details">
                                                    <img className="product__items--img product__primary--img" src={ProductImg3} alt="Fashion T-shirt" />
                                                    <img className="product__items--img product__secondary--img" src={ProductImg3} alt="Fashion T-shirt" />
                                                </Link>
                                            </div>
                                            <div className="product__items--content">
                                                <span className="product__items--content__subtitle">Printed T-Shirts, Women</span>
                                                <h3 className="product__items--content__title h4"><Link to="/product-details">Fashion T-shirt</Link></h3>
                                                <div className="product__items--price">
                                                    <span className="current__price">₹380</span>
                                                    <span className="price__divided" />
                                                    <span className="old__price">₹670</span>
                                                </div>
                                                <ul className="product__items--action d-flex">
                                                    <li className="product__items--action__list">
                                                        <Link className="product__items--action__btn add__to--cart" to="/cart">
                                                            <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                                                                <g transform="translate(0 0)">
                                                                    <g>
                                                                        <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                                                        <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452.451.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                                                        <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452.451.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <span className="add__to--cart__text"> + Add to cart</span>
                                                        </Link>
                                                    </li>
                                                    <li className="product__items--action__list">
                                                        <li className="">
                                                            <Link className="below-wishlist-heart" to="/wishlist">
                                                                <img src={WishlistIcon} className='img-fluid' style={{ width: '25px', height: '25px' }}></img>
                                                            </Link>
                                                        </li>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-6">
                            <div className="product-card">
                                <div className="image-container">
                                    <div className="main-slide-product">
                                        <div className="product__items">
                                            <ul className="product__items--action wishlist-card-icons d-flex">
                                                <li className="product__items--action__list" style={{ marginRight: 'auto' }}>
                                                    <li className="">
                                                        <Link className="below-wishlist-heart" to="/wishlist">
                                                            <img src={WishlistIcon} className='img-fluid' style={{ width: '25px', height: '25px' }} alt="Heart Icon" />
                                                        </Link>
                                                    </li>
                                                </li>

                                                <li className="">
                                                    <Link className="below-wishlist-heart" to="/cart">
                                                        <img src={WishlistRemove} className='img-fluid' style={{ width: '25px', height: '25px' }} alt="Clear Icon" />
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="product__items--thumbnail">
                                                <Link className="product__items--link" to="/product-details">
                                                    <img className="product__items--img product__primary--img" src={ProductImg3} alt="Fashion T-shirt" />
                                                    <img className="product__items--img product__secondary--img" src={ProductImg3} alt="Fashion T-shirt" />
                                                </Link>
                                            </div>
                                            <div className="product__items--content">
                                                <span className="product__items--content__subtitle">Printed T-Shirts, Women</span>
                                                <h3 className="product__items--content__title h4"><Link to="/product-details">Fashion T-shirt</Link></h3>
                                                <div className="product__items--price">
                                                    <span className="current__price">₹380</span>
                                                    <span className="price__divided" />
                                                    <span className="old__price">₹670</span>
                                                </div>
                                                <ul className="product__items--action d-flex">
                                                    <li className="product__items--action__list">
                                                        <Link className="product__items--action__btn add__to--cart" to="/cart">
                                                            <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                                                                <g transform="translate(0 0)">
                                                                    <g>
                                                                        <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                                                        <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452.451.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                                                        <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452.451.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <span className="add__to--cart__text"> + Add to cart</span>
                                                        </Link>
                                                    </li>
                                                    <li className="product__items--action__list">
                                                        <li className="">
                                                            <Link className="below-wishlist-heart" to="/wishlist">
                                                                <img src={WishlistIcon} className='img-fluid' style={{ width: '25px', height: '25px' }}></img>
                                                            </Link>
                                                        </li>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second product */}
                        <div className="col-md-3 col-6">
                            <div className="product-card">
                                <div className="image-container">
                                    <div className="main-slide-product">
                                        <div className="product__items">
                                            <ul className="product__items--action wishlist-card-icons d-flex">
                                                <li className="product__items--action__list" style={{ marginRight: 'auto' }}>
                                                    <li className="">
                                                        <Link className="below-wishlist-heart" to="/wishlist">
                                                            <img src={WishlistIcon} className='img-fluid' style={{ width: '25px', height: '25px' }} alt="Heart Icon" />
                                                        </Link>
                                                    </li>
                                                </li>

                                                <li className="">
                                                    <Link className="below-wishlist-heart" to="/cart">
                                                        <img src={WishlistRemove} className='img-fluid' style={{ width: '25px', height: '25px' }} alt="Clear Icon" />
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="product__items--thumbnail">
                                                <Link className="product__items--link" to="/product-details">
                                                    <img className="product__items--img product__primary--img" src={ProductImg2} alt="Freesize Cotton T-shirt" />
                                                    <img className="product__items--img product__secondary--img" src={ProductImg2} alt="Freesize Cotton T-shirt" />
                                                </Link>
                                            </div>
                                            <div className="product__items--content">
                                                <span className="product__items--content__subtitle">Printed T-Shirts, Women</span>
                                                <h3 className="product__items--content__title h4"><Link to="/product-details">Freesize Cotton T-shirt</Link></h3>
                                                <div className="product__items--price">
                                                    <span className="current__price">₹380</span>
                                                    <span className="price__divided" />
                                                    <span className="old__price">₹670</span>
                                                </div>
                                                <ul className="product__items--action d-flex">
                                                    <li className="product__items--action__list">
                                                        <Link className="product__items--action__btn add__to--cart" to="/cart">
                                                            <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                                                                <g transform="translate(0 0)">
                                                                    <g>
                                                                        <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                                                        <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452.451.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                                                        <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452.451.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <span className="add__to--cart__text"> + Add to cart</span>
                                                        </Link>
                                                    </li>
                                                    <li className="product__items--action__list">
                                                        <li className="">
                                                            <Link className="below-wishlist-heart" to="/wishlist">
                                                                <img src={WishlistIcon} className='img-fluid' style={{ width: '25px', height: '25px' }}></img>
                                                            </Link>
                                                        </li>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Third product */}


                        {/* Add more products as needed */}
                    </div>

                    <div className="product__section--inner row  g-0">
                        {/* First product */}



                        <div className="col-md-3 col-6">
                            <div className="product-card">
                                <div className="image-container">
                                    <div className="main-slide-product">
                                        <div className="product__items">
                                            <ul className="product__items--action wishlist-card-icons d-flex">
                                                <li className="product__items--action__list" style={{ marginRight: 'auto' }}>
                                                    <li className="">
                                                        <Link className="below-wishlist-heart" to="/wishlist">
                                                            <img src={WishlistIcon} className='img-fluid' style={{ width: '25px', height: '25px' }} alt="Heart Icon" />
                                                        </Link>
                                                    </li>
                                                </li>

                                                <li className="">
                                                    <Link className="below-wishlist-heart" to="/cart">
                                                        <img src={WishlistRemove} className='img-fluid' style={{ width: '25px', height: '25px' }} alt="Clear Icon" />
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="product__items--thumbnail">
                                                <Link className="product__items--link" to="/product-details">
                                                    <img className="product__items--img product__primary--img" src={ProductImg1} alt="Oversize Cotton T-shirt" />
                                                    <img className="product__items--img product__secondary--img" src={ProductImg1} alt="Oversize Cotton T-shirt" />
                                                </Link>
                                            </div>
                                            <div className="product__items--content">
                                                <span className="product__items--content__subtitle">Printed T-Shirts, Women</span>
                                                <h3 className="product__items--content__title h4"><Link to="/product-details">Oversize Cotton T-shirt</Link></h3>
                                                <div className="product__items--price">
                                                    <span className="current__price">₹380</span>
                                                    <span className="price__divided" />
                                                    <span className="old__price">₹670</span>
                                                </div>
                                                <ul className="product__items--action d-flex">
                                                    <li className="product__items--action__list">
                                                        <Link className="product__items--action__btn add__to--cart" to="/cart">
                                                            <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                                                                <g transform="translate(0 0)">
                                                                    <g>
                                                                        <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                                                        <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452.451.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                                                        <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452.451.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <span className="add__to--cart__text"> + Add to cart</span>
                                                        </Link>
                                                    </li>
                                                    <li className="product__items--action__list">
                                                        <li className="">
                                                            <Link className="below-wishlist-heart" to="/wishlist">
                                                                <img src={WishlistIcon} className='img-fluid' style={{ width: '25px', height: '25px' }}></img>
                                                            </Link>
                                                        </li>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 col-6">
                            <div className="product-card">
                                <div className="image-container">
                                    <div className="main-slide-product">
                                        <div className="product__items">
                                            <ul className="product__items--action wishlist-card-icons d-flex">
                                                <li className="product__items--action__list" style={{ marginRight: 'auto' }}>
                                                    <li className="">
                                                        <Link className="below-wishlist-heart" to="/wishlist">
                                                            <img src={WishlistIcon} className='img-fluid' style={{ width: '25px', height: '25px' }} alt="Heart Icon" />
                                                        </Link>
                                                    </li>
                                                </li>

                                                <li className="">
                                                    <Link className="below-wishlist-heart" to="/cart">
                                                        <img src={WishlistRemove} className='img-fluid' style={{ width: '25px', height: '25px' }} alt="Clear Icon" />
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="product__items--thumbnail">
                                                <Link className="product__items--link" to="/product-details">
                                                    <img className="product__items--img product__primary--img" src={ProductImg1} alt="Oversize Cotton T-shirt" />
                                                    <img className="product__items--img product__secondary--img" src={ProductImg1} alt="Oversize Cotton T-shirt" />
                                                </Link>
                                            </div>
                                            <div className="product__items--content">
                                                <span className="product__items--content__subtitle">Printed T-Shirts, Women</span>
                                                <h3 className="product__items--content__title h4"><Link to="/product-details">Oversize Cotton T-shirt</Link></h3>
                                                <div className="product__items--price">
                                                    <span className="current__price">₹380</span>
                                                    <span className="price__divided" />
                                                    <span className="old__price">₹670</span>
                                                </div>
                                                <ul className="product__items--action d-flex">
                                                    <li className="product__items--action__list">
                                                        <Link className="product__items--action__btn add__to--cart" to="/cart">
                                                            <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                                                                <g transform="translate(0 0)">
                                                                    <g>
                                                                        <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                                                        <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452.451.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                                                        <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452.451.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <span className="add__to--cart__text"> + Add to cart</span>
                                                        </Link>
                                                    </li>
                                                    <li className="product__items--action__list">
                                                        <li className="">
                                                            <Link className="below-wishlist-heart" to="/wishlist">
                                                                <img src={WishlistIcon} className='img-fluid' style={{ width: '25px', height: '25px' }}></img>
                                                            </Link>
                                                        </li>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-6">
                            <div className="product-card">
                                <div className="image-container">
                                    <div className="main-slide-product">
                                        <div className="product__items">
                                            <ul className="product__items--action wishlist-card-icons d-flex">
                                                <li className="product__items--action__list" style={{ marginRight: 'auto' }}>
                                                    <li className="">
                                                        <Link className="below-wishlist-heart" to="/wishlist">
                                                            <img src={WishlistIcon} className='img-fluid' style={{ width: '25px', height: '25px' }} alt="Heart Icon" />
                                                        </Link>
                                                    </li>
                                                </li>

                                                <li className="">
                                                    <Link className="below-wishlist-heart" to="/cart">
                                                        <img src={WishlistRemove} className='img-fluid' style={{ width: '25px', height: '25px' }} alt="Clear Icon" />
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="product__items--thumbnail">
                                                <Link className="product__items--link" to="/product-details">
                                                    <img className="product__items--img product__primary--img" src={ProductImg3} alt="Fashion T-shirt" />
                                                    <img className="product__items--img product__secondary--img" src={ProductImg3} alt="Fashion T-shirt" />
                                                </Link>
                                            </div>
                                            <div className="product__items--content">
                                                <span className="product__items--content__subtitle">Printed T-Shirts, Women</span>
                                                <h3 className="product__items--content__title h4"><Link to="/product-details">Fashion T-shirt</Link></h3>
                                                <div className="product__items--price">
                                                    <span className="current__price">₹380</span>
                                                    <span className="price__divided" />
                                                    <span className="old__price">₹670</span>
                                                </div>
                                                <ul className="product__items--action d-flex">
                                                    <li className="product__items--action__list">
                                                        <Link className="product__items--action__btn add__to--cart" to="/cart">
                                                            <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                                                                <g transform="translate(0 0)">
                                                                    <g>
                                                                        <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                                                        <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452.451.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                                                        <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452.451.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <span className="add__to--cart__text"> + Add to cart</span>
                                                        </Link>
                                                    </li>
                                                    <li className="product__items--action__list">
                                                        <li className="">
                                                            <Link className="below-wishlist-heart" to="/wishlist">
                                                                <img src={WishlistIcon} className='img-fluid' style={{ width: '25px', height: '25px' }}></img>
                                                            </Link>
                                                        </li>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second product */}
                        <div className="col-md-3 col-6">
                            <div className="product-card">
                                <div className="image-container">
                                    <div className="main-slide-product">
                                        <div className="product__items">
                                            <ul className="product__items--action wishlist-card-icons d-flex">
                                                <li className="product__items--action__list" style={{ marginRight: 'auto' }}>
                                                    <li className="">
                                                        <Link className="below-wishlist-heart" to="/wishlist">
                                                            <img src={WishlistIcon} className='img-fluid' style={{ width: '25px', height: '25px' }} alt="Heart Icon" />
                                                        </Link>
                                                    </li>
                                                </li>

                                                <li className="">
                                                    <Link className="below-wishlist-heart" to="/cart">
                                                        <img src={WishlistRemove} className='img-fluid' style={{ width: '25px', height: '25px' }} alt="Clear Icon" />
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="product__items--thumbnail">
                                                <Link className="product__items--link" to="/product-details">
                                                    <img className="product__items--img product__primary--img" src={ProductImg2} alt="Freesize Cotton T-shirt" />
                                                    <img className="product__items--img product__secondary--img" src={ProductImg2} alt="Freesize Cotton T-shirt" />
                                                </Link>
                                            </div>
                                            <div className="product__items--content">
                                                <span className="product__items--content__subtitle">Printed T-Shirts, Women</span>
                                                <h3 className="product__items--content__title h4"><Link to="/product-details">Freesize Cotton T-shirt</Link></h3>
                                                <div className="product__items--price">
                                                    <span className="current__price">₹380</span>
                                                    <span className="price__divided" />
                                                    <span className="old__price">₹670</span>
                                                </div>
                                                <ul className="product__items--action d-flex">
                                                    <li className="product__items--action__list">
                                                        <Link className="product__items--action__btn add__to--cart" to="/cart">
                                                            <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                                                                <g transform="translate(0 0)">
                                                                    <g>
                                                                        <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor" />
                                                                        <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452.451.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor" />
                                                                        <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452.451.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor" />
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <span className="add__to--cart__text"> + Add to cart</span>
                                                        </Link>
                                                    </li>
                                                    <li className="product__items--action__list">
                                                        <li className="">
                                                            <Link className="below-wishlist-heart" to="/wishlist">
                                                                <img src={WishlistIcon} className='img-fluid' style={{ width: '25px', height: '25px' }}></img>
                                                            </Link>
                                                        </li>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Third product */}


                        {/* Add more products as needed */}
                    </div>
                </div>
            </div>
        </div>
    )
}
