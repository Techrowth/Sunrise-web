import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MainProduct from '../assets/img/product/single-product.png';
import ProductImg1 from '../assets/img/product/single-1.png';
import ProductImg2 from '../assets/img/product/single-2.png';
import ProductImg3 from '../assets/img/product/single-3.png';
import ProductImg4 from '../assets/img/product/single-4.png';


import ShoppingIcon1 from '../assets/img/icon/shipping.png';
import ShoppingIcon2 from '../assets/img/icon/securepay.png';
import ShoppingIcon3 from '../assets/img/icon/offers.png';
import ShoppingIcon4 from '../assets/img/icon/dimantions.png';
import ShoppingIcon5 from '../assets/img/icon/share.png';



export default function ProductDetailsCard() {

  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle open/closed state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const ProductImages = [
    MainProduct,
    ProductImg1,
    ProductImg2,
    ProductImg3,
    ProductImg4,
  ];

  const handleThumbnailClick = (index) => {
    setSelectedImage(ProductImages[index]);
  };


  const mainImageSettings = {
    customPaging: function (i) {
      return (
        <Link>
          <img
            src={ProductImages[i]}
            alt={`Thumbnail ${i}`}
            onClick={() => handleThumbnailClick(i)}
          />
        </Link>
      );
    },
    dots: true,
    dotsClass: 'slick-dots product__media--nav',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: ProductImages.length > 5,
    afterChange: (current) => setSelectedImage(ProductImages[current]),
  };



  return (
    <section className="product__details--section section--padding">
      <div className="container">
        <div className="row row-cols-lg-2 row-cols-md-2">
          <div className="col">
            <div className="product__details--media">
              <Slider className="product-slider"  {...mainImageSettings}>
                {ProductImages.map((image, index) => (
                  <div key={index} className="product__media--preview__items">
                    <Link className="product__media--preview__items--link glightbox" data-gallery="product-media-preview" to={selectedImage || ProductImages[0]}>
                      <img className="product__media--preview__items--img" src={selectedImage || ProductImages[0]} alt={`product-media-img-${index}`} />
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="col">
            <div className="product__details--info">
              <form action="#">
             
              <div className="product__details--info__rating d-flex align-items-center mb-15">
                  <ul className="rating d-flex justify-content-center">
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
                  <span className="product__items--rating__count--number" style={{color:'#000'}}>( 4.2/5 ) 725 Reviews</span>
                </div>
                <h3 className="product__details--info__title mb-15">Bracelet And Ring For Girls</h3>
                <div className="product__details--info__price mb-10">
                  <span className="current__price" style={{color:'#7B7B7B'}}>₹ 35,000.00 INR</span>
                  {/* <span className="price__divided" />
                  <span className="old__price">₹ 35,000.00 INR</span> */}
                  <p style={{color:'#000', fontSize:'11px', fontWeight:'500'}}>Tax included. Shipping calculated at checkout.</p>
                </div>

                <h4 className='mb-3'>Description</h4>

                <p className="product__details--info__desc mb-15">92.5 Silver, Victorian Necklace studded with Gem Stones and Pearl Beads. <br/> <br/>

Victorian Jewellery style is constantly perceived and is an everlasting jewellery style. Essentially, Victorian Jewellery is the jewellery style of the Victorian era that remains prominent for its design and composition.  <br/> <br/>

Necklace: Height-83 mm width-170 mm  <br/> <br/>
Note: The price mentioned is only for the Choker. To know the price of the Earrings, please contact Customer Care.</p>
                <div className="product__variant">
   


<h4 className='my-4'>Availability &nbsp; &nbsp; &nbsp; <span style={{color:'#45A29E', fontWeight:'500'}}>In Stock</span></h4>

<h4  className='my-4'>Quantity &nbsp; &nbsp; &nbsp;   &nbsp; <span>
                  <div className="product__variant--list quantity d-flex align-items-center mb-20">
                    <div className="quantity__box">
                      <button type="button" className="quantity__value quickview__value--quantity decrease" aria-label="quantity value" value="Decrease Value">-</button>
                      <label>
                        <input type="number" className="quantity__number quickview__value--number" defaultValue={3} />
                      </label>
                      <button type="button" className="quantity__value quickview__value--quantity increase" aria-label="quantity value" value="Increase Value">+</button>
                    </div>
                  </div></span></h4>

                  <div className='shop-btns'>
                  <button className="quickview__cart--btn primary__btn" type="submit">Buy Now</button>
                  <button className="quickview__cart--btn primary__btn" type="submit">Add To Cart</button>
                  </div>
                
                  <div className="product__variant--list my-3">
                    <Link className="variant__wishlist--icon mb-15" to="/wishlist" title="Add to wishlist">
                      <svg className="quickview__variant--wishlist__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                      Add to Wishlist
                    </Link>
                  </div>

                </div>



                <div className='product-description'>
                  
                <div className="accordion" id="accordionExample">
      {/* Accordion items */}
      <div className="accordion-item">
        {/* Accordion header */}
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           <img src={ShoppingIcon1} style={{width: '22px', height:'22px'}} className='img-fluid mx-3'/> Shipping & Returns
          </button>
        </h2>
        {/* Accordion content */}
        <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Shipping and Returns information here.
          </div>
        </div>
      </div>

      {/* Repeat the above structure for other accordion items */}
      
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <img src={ShoppingIcon2} style={{width: '22px', height:'auto'}} className='img-fluid mx-3'/> Secure Payments
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Secure Payments information here.
          </div>
        </div>
      </div>

      <div className="accordion-item">
  <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <img src={ShoppingIcon3} style={{ width: '22px', height: '22px' }} className='img-fluid mx-3'/> Exclusive Offers
    </button>
  </h2>
  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body">
      Exclusive Offers information here.
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header" id="headingFour">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <img src={ShoppingIcon4} style={{ width: '22px', height: '22px' }} className='img-fluid mx-3'/> Dimensions
    </button>
  </h2>
  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
    <div className="accordion-body">
      Dimensions information here.
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header" id="headingFive">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      <img src={ShoppingIcon5} style={{ width: '22px', height: '22px' }} className='img-fluid mx-3'/> Share
    </button>
  </h2>
  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div className="quickview__social d-flex align-items-center mb-15">

<ul className="quickview__social--wrapper mt-0 d-flex">
  <li className="quickview__social--list">
    <Link className="quickview__social--icon" target="_blank" to="https://www.facebook.com">
      <svg xmlns="http://www.w3.org/2000/svg" width="7.667" height="16.524" viewBox="0 0 7.667 16.524">
        <path data-name="Path 237" d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z" transform="translate(-960.13 -345.407)" fill="currentColor" />
      </svg>
      <span className="visually-hidden">Facebook</span>
    </Link>
  </li>
  <li className="quickview__social--list">
    <Link className="quickview__social--icon" target="_blank" to="https://twitter.com">
      <svg xmlns="http://www.w3.org/2000/svg" width="16.489" height="13.384" viewBox="0 0 16.489 13.384">
        <path data-name="Path 303" d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z" transform="translate(-951.23 -1140.849)" fill="currentColor" />
      </svg>
      <span className="visually-hidden">Twitter</span>
    </Link>
  </li>
  <li className="quickview__social--list">
    <Link className="quickview__social--icon" target="_blank" to="https://www.instagram.com">
      <svg xmlns="http://www.w3.org/2000/svg" width="16.497" height="16.492" viewBox="0 0 19.497 19.492">
        <path data-name="Icon awesome-instagram" d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z" transform="translate(0.004 -1.492)" fill="currentColor" />
      </svg>
      <span className="visually-hidden">Instagram</span>
    </Link>
  </li>
  <li className="quickview__social--list">
    <Link className="quickview__social--icon" target="_blank" to="https://www.youtube.com">
      <svg xmlns="http://www.w3.org/2000/svg" width="16.49" height="11.582" viewBox="0 0 16.49 11.582">
        <path data-name="Path 321" d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z" transform="translate(-951.269 -1359.8)" fill="currentColor" />
      </svg>
      <span className="visually-hidden">Youtube</span>
    </Link>
  </li>
</ul>
</div>
    </div>
  </div>
</div>


      

      {/* Repeat for other accordion items */}

    </div>
                </div>


               
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
