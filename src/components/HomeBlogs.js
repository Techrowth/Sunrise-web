import React from 'react'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Blog1Img from '../assets/img/blog/1.png';
import Blog2Img from '../assets/img/blog/2.png';
import Blog3Img from '../assets/img/blog/3.png';

import CustomPrevIcon from '../assets/img/icon/left-arrow.png';
import CustomNextIcon from '../assets/img/icon/right-arrow.png';

export default function HomeBlogs() {

      // Custom previous arrow component
      const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-prev-arrow" onClick={onClick}>
                <img src={CustomPrevIcon} alt="Previous" />
            </div>
        );
    }

    // Custom next arrow component
    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-next-arrow" onClick={onClick}>
                <img src={CustomNextIcon} alt="Next" />
            </div>
        );
    }

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
};



  return (
    
    <div className='container' style={{marginTop:'60px', marginBottom:'20px', overflowX:'hidden'}}>
    <div className="row justify-content-center mx-auto">
    <style>
                {`
                    .custom-prev-arrow,
                    .custom-next-arrow {
                        position: absolute;
                       
                        top: 50%;
                        transform: translateY(-50%);
                        cursor: pointer;
                    }

                    .custom-prev-arrow img,
                    .custom-next-arrow img {
                        display: block;
                        width: 40px; /* Adjust width as needed */
                        height: auto; /* Maintain aspect ratio */
                    }

                    .custom-prev-arrow {
                        left: -33px; /* Adjust left position */
                    }

                    .custom-next-arrow {
                        right: -33px; /* Adjust right position */
                    }


                `}
            </style>

     <div className="col-12 col-lg-12"> {/* Centering the slider */}
     <h2 className='mb-4' style={{fontWeight: '500', textAlign:'center', color:'#2D2D2D'}}>LATEST BLOG</h2>

     <Slider {...settings}>
        <div className='blog-container'>
    <div className='blog-date'>
        Nov 16, 2022
    </div>
    <div className='blog-content'>
        <div className='blog-image'>
            <img src={Blog1Img} className='img-fluid' alt='Blog Image' />
        </div>
        <div className='blog-text'>
            <h3 className='blog-title'>Hollands Dazzling Jewelry</h3>
            <p className='blog-description'>Sed mauris Pellentesque elit Aliquam at lacus interdum nascetur elit ipsum. Enim ipsum</p>
            <p className='blog-read-more'>
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className='mx-2' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
            </p>
        </div>
    </div>
</div>


<div className='blog-container'>
    <div className='blog-date'>
        Nov 16, 2022
    </div>
    <div className='blog-content'>
        <div className='blog-image'>
            <img src={Blog2Img} className='img-fluid' alt='Blog Image' />
        </div>
        <div className='blog-text'>
            <h3 className='blog-title'>Hollands Dazzling Jewelry</h3>
            <p className='blog-description'>Sed mauris Pellentesque elit Aliquam at lacus interdum nascetur elit ipsum. Enim ipsum</p>
            <p className='blog-read-more'>
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className='mx-2' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
            </p>
        </div>
    </div>
</div>



<div className='blog-container'>
    <div className='blog-date'>
        Nov 16, 2022
    </div>
    <div className='blog-content'>
        <div className='blog-image'>
            <img src={Blog3Img} className='img-fluid' alt='Blog Image' />
        </div>
        <div className='blog-text'>
            <h3 className='blog-title'>Hollands Dazzling Jewelry</h3>
            <p className='blog-description'>Sed mauris Pellentesque elit Aliquam at lacus interdum nascetur elit ipsum. Enim ipsum</p>
            <p className='blog-read-more'>
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className='mx-2' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
            </p>
        </div>
    </div>
</div>


<div className='blog-container'>
    <div className='blog-date'>
        Nov 16, 2022
    </div>
    <div className='blog-content'>
        <div className='blog-image'>
            <img src={Blog1Img} className='img-fluid' alt='Blog Image' />
        </div>
        <div className='blog-text'>
            <h3 className='blog-title'>Hollands Dazzling Jewelry</h3>
            <p className='blog-description'>Sed mauris Pellentesque elit Aliquam at lacus interdum nascetur elit ipsum. Enim ipsum</p>
            <p className='blog-read-more'>
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className='mx-2' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
            </p>
        </div>
    </div>
</div>
</Slider>

<div className='view-more-button d-flex justify-content-center mt-4'>
    <button className='btn'>View More</button>
</div>
     </div>
</div>
    </div>

  )
}
