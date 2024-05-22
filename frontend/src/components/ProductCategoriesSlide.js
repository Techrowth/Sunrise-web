import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CustomPrevButton from '../assets/img/icon/left-arrow.png'; // Your custom previous button
import CustomNextButton from '../assets/img/icon/right-arrow.png'; // Your custom next button

import cat1Image from '../assets/img/product/cat-1.png'; // Adjust the image path
import cat2Image from '../assets/img/product/cat-2.png'; // Adjust the image path
import cat3Image from '../assets/img/product/cat-3.png'; // Adjust the image path

export default function ProductCategoriesSlide() {
  const sliderRef = useRef(null);

  const products = [
    { title: 'Product 1', imageUrl: cat1Image },
    { title: 'Product 2', imageUrl: cat2Image },
    { title: 'Product 3', imageUrl: cat3Image },
    { title: 'Product 4', imageUrl: cat2Image },
    // Add more product objects
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed for mobile view
        settings: {
          slidesToShow: 1,
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
    sliderRef.current.slickGoTo(0); // Ensure the slider starts at the first slide
  }, []);

  return (
    <div className="product-categories">
      <style>
        {`
          .product-categories {
            padding: 0px 0px 40px 0px;
          }

          .product-slider-container {
            position: relative;
            margin: 40px 0px;
          }

          .product-categories h3{
            font-family: 'Montserrat', sans-serif !important;
            margin: 30px 0px;
          }

          .product-categories .product-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .product-categories .product-image {
            max-width: 100%;
            height: auto;
          }

          .product-categories .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            /* Your styles for the image container */
          }

          .product-categories .product-image {
            padding: 20px;
            background: #F2F2F2;
            max-width: 100%;
            height: auto;
            /* Your styles for the product images */
          }

          


          .slick-arrow {
            height: 36px !important;
            width: auto !important;
          }
        `}
      </style>
      <div className="container col-lg-10">
        <h3 className="text-center py-4" >Categories</h3>
        <div className="product-slider-container">
          <Slider
            ref={sliderRef}
            {...settings}
            prevArrow={
              <img
                src={CustomPrevButton}
                className="slide-icon"
                alt="Previous"
              />
            } // Custom previous button
            nextArrow={
              <img
                src={CustomNextButton}
                className="slide-icon"
                alt="Next"
              />
            } // Custom next button
          >
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="image-container">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="product-image"
                  />
                </div>
                <h5 className="product-title text-center mt-3">{product.title}</h5>
              </div>
            ))}
          </Slider>
        </div>


        <div className="product-slider-container">
          <Slider
            ref={sliderRef}
            {...settings}
            prevArrow={
              <img
                src={CustomPrevButton}
                className="slide-icon"
                alt="Previous"
              />
            } // Custom previous button
            nextArrow={
              <img
                src={CustomNextButton}
                className="slide-icon"
                alt="Next"
              />
            } // Custom next button
          >
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="image-container">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="product-image"
                  />
                </div>
                <h5 className="product-title text-center mt-3">{product.title}</h5>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </div>
  );
}
