import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Banner1 from '../assets/img/banner/1.png';
import Banner2 from '../assets/img/banner/2.png';
import Banner3 from '../assets/img/banner/3.png';
import Banner4 from '../assets/img/banner/4.png';

import CustomPrevButton from '../assets/img/icon/left-side-icon.png'; // Import your custom previous button
import CustomNextButton from '../assets/img/icon/right-side-icon.png'; // Import your custom next button

export default function HeroBanner() {
  return (
    <>
    <div className="banner-slider-container desktop-section">
      <Carousel
        showStatus={false}  // Hide status indicators
        showThumbs={false}  // Hide thumbnail navigation
        infiniteLoop     // Enable infinite loop
        autoPlay         // Enable auto-play
        interval={5000}  // Set the auto-play interval (in milliseconds)
        stopOnHover      // Stop auto-play on hover
        transitionTime={1000}  // Set slide transition time (in milliseconds)
        dynamicHeight    // Adjust slide height based on content
        emulateTouch     // Emulate touch events on non-touch devices
        swipeable        // Enable swipe gestures
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ position: 'absolute', top: '45%', left: '2%', backgroundColor: 'transparent', border: 'none', boxShadow: 'none', zIndex: 2 }}
            >
              <img style={{ width: '36px', height: 'auto' }} src={CustomPrevButton} alt="Previous" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ position: 'absolute', top: '45%', right: '2%', backgroundColor: 'transparent', border: 'none', boxShadow: 'none', zIndex: 2 }}
            >
              <img style={{ width: '36px', height: 'auto' }} src={CustomNextButton} alt="Next" />
            </button>
          )
        }
      >
        
        <div>
          <img src={Banner1} alt="Banner 1" />
        </div>

        <div>
          <img src={Banner4} alt="Banner 4" />
        </div>
 
        {/* Add more banner slides as needed */}
      </Carousel>
    </div>
      <div className="banner-slider-container mobile-section">
      <Carousel
        showStatus={false}  // Hide status indicators
        showThumbs={false}  // Hide thumbnail navigation
        infiniteLoop     // Enable infinite loop
        autoPlay         // Enable auto-play
        interval={5000}  // Set the auto-play interval (in milliseconds)
        stopOnHover      // Stop auto-play on hover
        transitionTime={1000}  // Set slide transition time (in milliseconds)
        dynamicHeight    // Adjust slide height based on content
        emulateTouch     // Emulate touch events on non-touch devices
        swipeable        // Enable swipe gestures
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ position: 'absolute', top: '45%', left: '2%', backgroundColor: 'transparent', border: 'none', boxShadow: 'none', zIndex: 2 }}
            >
              <img style={{ width: '36px', height: 'auto' }} src={CustomPrevButton} alt="Previous" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ position: 'absolute', top: '45%', right: '2%', backgroundColor: 'transparent', border: 'none', boxShadow: 'none', zIndex: 2 }}
            >
              <img style={{ width: '36px', height: 'auto' }} src={CustomNextButton} alt="Next" />
            </button>
          )
        }
      >
        
  
        <div>
          <img src={Banner2} alt="Banner 2" />
        </div>
        <div>
          <img src={Banner3} alt="Banner 3" />
        </div>
        {/* Add more banner slides as needed */}
      </Carousel>
    </div></>
  )
}
