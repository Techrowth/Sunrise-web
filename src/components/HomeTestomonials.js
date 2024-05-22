import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestoImg from '../assets/img/other/testo.png';
// import ProductImg2 from '../assets/img/product/product-2.png';
// import ProductImg3 from '../assets/img/product/product-3.png';

import CustomPrevButton from '../assets/img/icon/left-arrow.png'; // Your custom previous button
import CustomNextButton from '../assets/img/icon/right-arrow.png'; // Your custom next button
import { Link } from 'react-router-dom';

export default function HomeTestomonials() {


  const sliderRef = useRef(null);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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

    <div className="container my-5 col-lg-11 col-md-11 col-12 product-card-design" style={{overflowX:'hidden'}}>

      <style>
        {`
   .testimonial-slider-wrapper {
    position: relative;
  }
  
  
  .slide-icon {
    width: 50px; /* Adjust as needed */
    height: 50px; /* Adjust as needed */
    cursor: pointer;
    transition: opacity 0.3s ease;
    margin-top: 15px;
  }
  
  .slide-icon:hover {
    opacity: 0.8;
  }
  
  .prev {
    margin-right: 10px; /* Adjust spacing between buttons */
  }
  
  .next {
    margin-left: 10px; /* Adjust spacing between buttons */
  }
  
      `}
      </style>

      <div className='testo-main'>
  <div className='row'>
    <div className='col-md-6 col-12'>
      <img src={TestoImg} className='img-fluid' />
    </div> 

    <div className='col-md-6 col-12'>
      <h2 className='my-2' style={{fontWeight:'500', paddingBottom:'10px',paddingTop:'10px'}}>Happy Client Says</h2>

      <div className="testimonial-slider-wrapper">
        <Slider
          ref={sliderRef}
          {...settings}
        >
          <div className='slide-main'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
            <h4>MR. KAREEM JEKNO</h4>
            <h6>Customer</h6>
          </div>

          <div className='slide-main'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
            <h4>MR. KAREEM JEKNO</h4>
            <h6>Customer</h6>
          </div>
        </Slider>
      </div>

      {/* Navigation buttons */}
      <div className="testimonial-slider-nav">
        <img
          src={CustomPrevButton}
          className="slide-icon prev"
          alt="Previous"
          onClick={() => sliderRef.current.slickPrev()}
        />
        <img
          src={CustomNextButton}
          className="slide-icon next"
          alt="Next"
          onClick={() => sliderRef.current.slickNext()}
        />
      </div>
    </div>
  </div>
</div>

     





        
          </div>




  )
}
