import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductImg from '../assets/img/product/tab-1.png';
import CustomPrevButton from '../assets/img/icon/left-arrow.png';
import CustomNextButton from '../assets/img/icon/right-arrow.png';
import { Link } from 'react-router-dom';

export default function HomeExclusiveSilverJewalry() {
    const sliderRef = useRef(null);

    const products = [
      { title: 'Coral Rectangle Studs', imageUrl: ProductImg, category: 'Women’s Silver Collection', offerprice: '1234.00'  },
      { title: 'Coral Rectangle Studs', imageUrl: ProductImg, category: 'Women’s Silver Collection', offerprice: '1234.00' },
      { title: 'Coral Rectangle Studs', imageUrl: ProductImg, category: 'Women’s Silver Collection', offerprice: '1234.00' },
      { title: 'Coral Rectangle Studs', imageUrl: ProductImg, category: 'Women’s Silver Collection', offerprice: '1234.00' },
      { title: 'Coral Rectangle Studs', imageUrl: ProductImg, category: 'Women’s Silver Collection', offerprice: '1234.00' },
    ];
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
  
    const next = () => {
      sliderRef.current.slickNext();
    };
  
    const previous = () => {
      sliderRef.current.slickPrev();
    };
  
    useEffect(() => {
      sliderRef.current.slickGoTo(0);
    }, []);
  
    return (
        <div className="container col-lg-10 col-md-11 col-12 product-card-design" style={{overflowX:'hidden'}}>
          <style>
            {`
              .slick-arrow {
                height: 36px !important;
                width: 36px !important;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 999 !important;
              }
            `}
          </style>
    
    <div className='mt-5'>
    
          <h2 className='mb-4 mt-4' style={{fontWeight: '500', textAlign:'center', color:'#2D2D2D'}}>EXCLUSIVE SILVER JEWELLERY</h2>
          <div className="product__section--inner">
            <Slider
              ref={sliderRef}
              {...settings}
              prevArrow={<img src={CustomPrevButton} className="slide-icon" alt="Previous" />}
              nextArrow={<img src={CustomNextButton} className="slide-icon" alt="Next" />}
            >
              {products.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="image-container">
                    <div className="col mb-30 main-slide-product">
                      <div className="product__items ">
                        <div className="product__items--thumbnail">
                          <Link to='/product-details' className="product__items--link" >
                            <img className="product__items--img product__primary--img" src={product.imageUrl} alt={product.title} />
                            <img className="product__items--img product__secondary--img" src={product.imageUrl} alt={product.title} />
                          </Link>
                          <div class="buttons-container">
                            <button class="add-to-cart">Add&nbsp;to&nbsp;Cart</button>
                            <button class=" buy-now ">Buy&nbsp;Now</button>
                          </div>
                        </div>
                        
                        <div className="product__items--content">
                          <ul className="rating product__rating d-flex">
                            {[...Array(5)].map((_, i) => (
                              <li key={i} className="rating__list">
                                <span className="rating__list--icon">
                                  <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                    <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                                  </svg>
                                </span>
                              </li>
                            ))}
                          </ul>
                          <h3 className="product__items--content__title h4"><Link to='/product-details'>{product.title}</Link></h3>
                          <div className="product__items--price">
                            <span className="current__price">₹{product.offerprice}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className='view-more-button d-flex justify-content-center mt-4'>
        <button className='btn'>View More</button>
    </div>
        </div>
            
    </div>
      );
    }
    