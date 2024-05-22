import React from 'react';
import { Link } from 'react-router-dom';
import ProductImg1 from '../assets/img/product/tab-1.png';
import ProductImg2 from '../assets/img/product/tab-2.png';
import ProductImg3 from '../assets/img/product/tab-3.png';

export default function ShopProducts() {
  return (
    <div className="container product-card-design ">
      <div className="tab_content">
        <div id="featured" className="tab_pane active product-rows show">

          <div className='row sorting-row mb-4'>
            <div className=' col text-start'>
            <select id="sort-select">
  <option value="best-seller">Best Seller</option>
  <option value="popularity">Popularity</option>
  <option value="low-to-high">Price: Low to High</option>
  <option value="high-to-low">Price: High to Low</option>
</select>

            </div>
           < div className='col text-end'>
            <p style={{color:'#000', marginTop:'10px'}}>890 Products</p>
           
            </div>
          </div>
          <div className="product__section--inner row  g-0">
            {/* First product */}
            <div className="col-md-4">
              <div className="product-card">
                <div className="image-container">
                  <div className="main-slide-product">
                    <div className="product__items">

                    <div class="wishlist-icon" onclick="toggleWishlist(this)">
          
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="#ffffff" stroke="none" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 5.58 7.86 8.55 11.54L12 21.35l1.45-1.32C16.42 16.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 14.91L12 18.76l-4.1-3.85C5.17 12.86 4 11.25 4 9.5 4 7.5 5.5 6 7.5 6c1.54 0 3.04.99 3.57 2.36h1.87C13.46 6.99 14.96 6 16.5 6c2 0 3.5 1.5 3.5 3.5 0 1.75-1.17 3.36-3.1 5.41z"/>
</svg>



        </div>
                  <div className="product__items--thumbnail">

                        <Link className="product__items--link" to="/product-details">
                          <img className="product__items--img product__primary--img" src={ProductImg1} alt="Oversize Cotton T-shirt" />
                          <img className="product__items--img product__secondary--img" src={ProductImg1} alt="Oversize Cotton T-shirt" />
                        </Link>
                        
                        <div class="buttons-container">
            <button class="add-to-cart">Add&nbsp;to&nbsp;Cart</button>
            <button class=" buy-now ">Buy&nbsp;Now</button>
        </div>
                   
                      </div>
                      <div className="product__items--content">
                      <ul className="rating product__rating d-flex">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                        </ul>
                        <h3 className="product__items--content__title h4"><Link to="/product-details">Coral Rectangle 
Studs</Link></h3>
                        <div className="product__items--price">
                          <span className="current__price" style={{fontWeight:'500', color:'#000', fontSize:'16px'}}>₹1234.00</span>
                          {/* <span className="price__divided" />
                          <span className="old__price">₹670</span> */}
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
            <div className="product-card">
                <div className="image-container">
                  <div className="main-slide-product">
                    <div className="product__items">

                    <div class="wishlist-icon" onclick="toggleWishlist(this)">
          
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="#ffffff" stroke="none" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 5.58 7.86 8.55 11.54L12 21.35l1.45-1.32C16.42 16.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 14.91L12 18.76l-4.1-3.85C5.17 12.86 4 11.25 4 9.5 4 7.5 5.5 6 7.5 6c1.54 0 3.04.99 3.57 2.36h1.87C13.46 6.99 14.96 6 16.5 6c2 0 3.5 1.5 3.5 3.5 0 1.75-1.17 3.36-3.1 5.41z"/>
</svg>



        </div>
                  <div className="product__items--thumbnail">

                        <Link className="product__items--link" to="/product-details">
                          <img className="product__items--img product__primary--img" src={ProductImg2} alt="Oversize Cotton T-shirt" />
                          <img className="product__items--img product__secondary--img" src={ProductImg2} alt="Oversize Cotton T-shirt" />
                        </Link>
                        
                        <div class="buttons-container">
            <button class="add-to-cart">Add&nbsp;to&nbsp;Cart</button>
            <button class=" buy-now ">Buy&nbsp;Now</button>
        </div>
                   
                      </div>
                      <div className="product__items--content">
                      <ul className="rating product__rating d-flex">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                        </ul>
                        <h3 className="product__items--content__title h4"><Link to="/product-details">Coral Rectangle 
Studs</Link></h3>
                        <div className="product__items--price">
                          <span className="current__price" style={{fontWeight:'500', color:'#000', fontSize:'16px'}}>₹1234.00</span>
                          {/* <span className="price__divided" />
                          <span className="old__price">₹670</span> */}
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second product */}
            <div className="col-md-4">
            <div className="product-card">
                <div className="image-container">
                  <div className="main-slide-product">
                    <div className="product__items">

                    <div class="wishlist-icon" onclick="toggleWishlist(this)">
          
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="#ffffff" stroke="none" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 5.58 7.86 8.55 11.54L12 21.35l1.45-1.32C16.42 16.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 14.91L12 18.76l-4.1-3.85C5.17 12.86 4 11.25 4 9.5 4 7.5 5.5 6 7.5 6c1.54 0 3.04.99 3.57 2.36h1.87C13.46 6.99 14.96 6 16.5 6c2 0 3.5 1.5 3.5 3.5 0 1.75-1.17 3.36-3.1 5.41z"/>
</svg>



        </div>
                  <div className="product__items--thumbnail">

                        <Link className="product__items--link" to="/product-details">
                          <img className="product__items--img product__primary--img" src={ProductImg3} alt="Oversize Cotton T-shirt" />
                          <img className="product__items--img product__secondary--img" src={ProductImg3} alt="Oversize Cotton T-shirt" />
                        </Link>
                        
                        <div class="buttons-container">
            <button class="add-to-cart">Add&nbsp;to&nbsp;Cart</button>
            <button class=" buy-now ">Buy&nbsp;Now</button>
        </div>
                   
                      </div>
                      <div className="product__items--content">
                      <ul className="rating product__rating d-flex">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                        </ul>
                        <h3 className="product__items--content__title h4"><Link to="/product-details">Coral Rectangle 
Studs</Link></h3>
                        <div className="product__items--price">
                          <span className="current__price" style={{fontWeight:'500', color:'#000', fontSize:'16px'}}>₹1234.00</span>
                          {/* <span className="price__divided" />
                          <span className="old__price">₹670</span> */}
                        </div>

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



            <div className="col-md-4">
            <div className="product-card">
                <div className="image-container">
                  <div className="main-slide-product">
                    <div className="product__items">

                    <div class="wishlist-icon" onclick="toggleWishlist(this)">
          
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="#ffffff" stroke="none" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 5.58 7.86 8.55 11.54L12 21.35l1.45-1.32C16.42 16.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 14.91L12 18.76l-4.1-3.85C5.17 12.86 4 11.25 4 9.5 4 7.5 5.5 6 7.5 6c1.54 0 3.04.99 3.57 2.36h1.87C13.46 6.99 14.96 6 16.5 6c2 0 3.5 1.5 3.5 3.5 0 1.75-1.17 3.36-3.1 5.41z"/>
</svg>



        </div>
                  <div className="product__items--thumbnail">

                        <Link className="product__items--link" to="/product-details">
                          <img className="product__items--img product__primary--img" src={ProductImg1} alt="Oversize Cotton T-shirt" />
                          <img className="product__items--img product__secondary--img" src={ProductImg1} alt="Oversize Cotton T-shirt" />
                        </Link>
                        
                        <div class="buttons-container">
            <button class="add-to-cart">Add&nbsp;to&nbsp;Cart</button>
            <button class=" buy-now ">Buy&nbsp;Now</button>
        </div>
                   
                      </div>
                      <div className="product__items--content">
                      <ul className="rating product__rating d-flex">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                        </ul>
                        <h3 className="product__items--content__title h4"><Link to="/product-details">Coral Rectangle 
Studs</Link></h3>
                        <div className="product__items--price">
                          <span className="current__price" style={{fontWeight:'500', color:'#000', fontSize:'16px'}}>₹1234.00</span>
                          {/* <span className="price__divided" />
                          <span className="old__price">₹670</span> */}
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
            <div className="product-card">
                <div className="image-container">
                  <div className="main-slide-product">
                    <div className="product__items">

                    <div class="wishlist-icon" onclick="toggleWishlist(this)">
          
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="#ffffff" stroke="none" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 5.58 7.86 8.55 11.54L12 21.35l1.45-1.32C16.42 16.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 14.91L12 18.76l-4.1-3.85C5.17 12.86 4 11.25 4 9.5 4 7.5 5.5 6 7.5 6c1.54 0 3.04.99 3.57 2.36h1.87C13.46 6.99 14.96 6 16.5 6c2 0 3.5 1.5 3.5 3.5 0 1.75-1.17 3.36-3.1 5.41z"/>
</svg>



        </div>
                  <div className="product__items--thumbnail">

                        <Link className="product__items--link" to="/product-details">
                          <img className="product__items--img product__primary--img" src={ProductImg2} alt="Oversize Cotton T-shirt" />
                          <img className="product__items--img product__secondary--img" src={ProductImg2} alt="Oversize Cotton T-shirt" />
                        </Link>
                        
                        <div class="buttons-container">
            <button class="add-to-cart">Add&nbsp;to&nbsp;Cart</button>
            <button class=" buy-now ">Buy&nbsp;Now</button>
        </div>
                   
                      </div>
                      <div className="product__items--content">
                      <ul className="rating product__rating d-flex">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                        </ul>
                        <h3 className="product__items--content__title h4"><Link to="/product-details">Coral Rectangle 
Studs</Link></h3>
                        <div className="product__items--price">
                          <span className="current__price" style={{fontWeight:'500', color:'#000', fontSize:'16px'}}>₹1234.00</span>
                          {/* <span className="price__divided" />
                          <span className="old__price">₹670</span> */}
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second product */}
            <div className="col-md-4">
            <div className="product-card">
                <div className="image-container">
                  <div className="main-slide-product">
                    <div className="product__items">

                    <div class="wishlist-icon" onclick="toggleWishlist(this)">
          
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="#ffffff" stroke="none" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 5.58 7.86 8.55 11.54L12 21.35l1.45-1.32C16.42 16.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 14.91L12 18.76l-4.1-3.85C5.17 12.86 4 11.25 4 9.5 4 7.5 5.5 6 7.5 6c1.54 0 3.04.99 3.57 2.36h1.87C13.46 6.99 14.96 6 16.5 6c2 0 3.5 1.5 3.5 3.5 0 1.75-1.17 3.36-3.1 5.41z"/>
</svg>



        </div>
                  <div className="product__items--thumbnail">

                        <Link className="product__items--link" to="/product-details">
                          <img className="product__items--img product__primary--img" src={ProductImg3} alt="Oversize Cotton T-shirt" />
                          <img className="product__items--img product__secondary--img" src={ProductImg3} alt="Oversize Cotton T-shirt" />
                        </Link>
                        
                        <div class="buttons-container">
            <button class="add-to-cart">Add&nbsp;to&nbsp;Cart</button>
            <button class=" buy-now ">Buy&nbsp;Now</button>
        </div>
                   
                      </div>
                      <div className="product__items--content">
                      <ul className="rating product__rating d-flex">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                              </svg>
                            </span>
                          </li>
                        </ul>
                        <h3 className="product__items--content__title h4"><Link to="/product-details">Coral Rectangle 
Studs</Link></h3>
                        <div className="product__items--price">
                          <span className="current__price" style={{fontWeight:'500', color:'#000', fontSize:'16px'}}>₹1234.00</span>
                          {/* <span className="price__divided" />
                          <span className="old__price">₹670</span> */}
                        </div>

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
  );
}
