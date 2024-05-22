import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Mensec from '../assets/img/banner/men-sec.png';
import WomanSec from '../assets/img/banner/woman-sec.png';

// Import your custom button images
import customPrevButton from '../assets/img/icon/left-arrow.png';
import customNextButton from '../assets/img/icon/right-arrow.png';

const columnStyle = {
  backgroundImage: `url(${Mensec})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '420px',
};

const centerBoxStyle = {
  background: '#F97A9F',
  padding: '33px',
  color: '#fff',
  fontFamily: 'Montserrat',
};

const paragraphStyle = {
  color: '#fff',
};

const offersOnBannerStyle = {
  marginTop: '-300px',
  position: 'relative',
};

const customSectionStyle = {
  marginTop: '160px', // Add margin to move the section back down
};

const hidePhoneView = {
  '@media (max-width: 767px)': {
    '.row': {
      display: 'none !important',
    },
  },
};

// Custom button component
const CustomNextButton = ({ onClick }) => (
  <button className="custom-next-button" onClick={onClick} style={{
    background: 'none',
    border: 'none',
    boxShadow: 'none',
    position: 'absolute',
    top: '50%', // Vertically centered
    right: '-10px', // Adjust the right positioning as needed
    transform: 'translateY(-50%)', // Vertically center the button
    width: '36px',
    height: '36px',
  }}
  >
    <img src={customNextButton} alt="Next" />
  </button>
);

const CustomPrevButton = ({ onClick }) => (
  <button className="custom-prev-button" onClick={onClick} style={{
    background: 'none',
    border: 'none',
    boxShadow: 'none',
    position: 'absolute',
    top: '50%', // Vertically centered
    left: '-10px', // Adjust the left positioning as needed
    transform: 'translateY(-50%)', // Vertically center the button
    width: '36px',
    height: '36px',
  }}
  >
    <img src={customPrevButton} alt="Previous" />
  </button>
);

export default function OffersSlideSec() {
  const sliderSettings = {
    dots: false, // Hide pagination dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextButton />, // Custom Next button
    prevArrow: <CustomPrevButton />, // Custom Previous button
  };

  return (
    <div className="container my-4">
      <div className="row hide-in-mobile-view" style={hidePhoneView}>
        <div className="col-md-6">
          <div className="column-sec" style={columnStyle}>
            {/* Your content for the first column */}
          </div>
        </div>
        <div className="col-md-6">
          <div className="column-sec" style={{ ...columnStyle, backgroundImage: `url(${WomanSec})` }}>
            {/* Your content for the second column */}
          </div>
        </div>
      </div>
      <div className="offers-on-banner" style={offersOnBannerStyle}>
        <div className="row">
          <div className="col-lg-5 mx-auto text-center">
            <div className="center-box" style={centerBoxStyle}>
              <Slider {...sliderSettings}>
                <div>
                  <h3>New Collection T-shirts for Women</h3>
                  <p style={paragraphStyle}>Get 35% Discount For Couple Special</p>
                  <h5>Shop Now</h5>
                </div>
                <div>
                  <h3>New Collection T-shirts for Men</h3>
                  <p style={paragraphStyle}>Get 65% Discount For Couple Special</p>
                  <h5>Shop Now</h5>
                </div>
                {/* Add more slides here */}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-section" style={customSectionStyle}> </div>
    </div>
  );
}
