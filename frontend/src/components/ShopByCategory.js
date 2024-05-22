import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import CustomPrevIcon from '../assets/img/icon/left-arrow.png';
import CustomNextIcon from '../assets/img/icon/right-arrow.png';

import Category1 from '../assets/img/other/categoy-1.png';

export default function ShopByCategory() {

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
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ],
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };



    return (
        <div className='container' style={{marginTop:'60px', marginBottom:'60px', overflowX:'hidden'}}>
           <div className="row justify-content-center mx-auto">
            <div className="col-12 col-lg-11"> {/* Centering the slider */}
            <h2 className='mb-4' style={{fontWeight: '500', textAlign:'center', color:'#2D2D2D'}}>SHOP BY CATEGORY</h2>

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

                    .slide-category img{
                      padding: 15px;
                    }

                `}
            </style>

           
                <Slider {...settings}>

    <div className="slide-category text-center">
        <img src={Category1} className="img-fluid" alt="Category 1" />
        <p style={{color:'#2D2D2D '}}>Bracelets</p>
    </div>


                
    <div className="slide-category text-center">
        <img src={Category1} className="img-fluid" alt="Category 1" />
        <p style={{color:'#2D2D2D '}}>Bangles</p>
    </div>
                
    <div className="slide-category text-center">
        <img src={Category1} className="img-fluid" alt="Category 1" />
        <p style={{color:'#2D2D2D '}}>Earrings</p>
    </div>
                
    <div className="slide-category text-center">
        <img src={Category1} className="img-fluid" alt="Category 1" />
        <p style={{color:'#2D2D2D '}}>Pendant sets</p>
    </div>
                
    <div className="slide-category text-center">
        <img src={Category1} className="img-fluid" alt="Category 1" />
        <p style={{color:'#2D2D2D '}}>Necklaces</p>
    </div>
                
    <div className="slide-category text-center">
        <img src={Category1} className="img-fluid" alt="Category 1" />
        <p style={{color:'#2D2D2D '}}>Nosepins</p>
    </div>
                
    <div className="slide-category text-center">
        <img src={Category1} className="img-fluid" alt="Category 1" />
        <p style={{color:'#2D2D2D '}}>Bracelets</p>
    </div>

   




                </Slider>
            </div>
        </div>
        </div>

    );
}