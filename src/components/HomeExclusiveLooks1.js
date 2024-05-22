import React from 'react'
import Look1 from '../assets/img/other/look.png';
import LookSub from '../assets/img/other/looks-sub.png';


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import CustomPrevIcon from '../assets/img/icon/left-arrow.png';
import CustomNextIcon from '../assets/img/icon/right-arrow.png';
import videoSource1 from '../assets/img/video/v1.mp4'
import videoSource2 from '../assets/img/video/v2.mp4'
import videoSource3 from '../assets/img/video/v3.mp4'
import videoSource4 from '../assets/img/video/v4.mp4'


export default function HomeExclusiveLooks() {

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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ],
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };

    
  return (
    <div className='container' style={{overflowX:'hidden'}}>

    <div className='my-5 text-center'>
    <h2 className='' style={{fontWeight: '500', textAlign:'center', color:'#2D2D2D', marginTop:'60px', marginBottom:'45px'}}>Elite Designs - Explained in Minutes</h2>
      </div>

        <div className='exclusive-looks desktop-section'>
            <div className='row  no-gutters'>
 


                <div className='col'>
                    <div className='main-looks text-center' style={{borderRadius:"0", boxShadow:"none"}}>
                    <video controls className='img-fluid' style={{borderRadius:"1rem"}}>
            <source src={videoSource1} type='video/mp4' />
          
        </video>
                   
                    </div>
                </div>

                <div className='col'>
                    <div className='main-looks text-center' style={{borderRadius:"0", boxShadow:"none"}}>
                    <video controls className='img-fluid' style={{borderRadius:"1rem"}}>
            <source src={videoSource2} type='video/mp4' />
          
        </video>
                  
                    </div>
                </div>


                <div className='col'>
                    <div className='main-looks text-center' style={{borderRadius:"0", boxShadow:"none"}}>
                    <video controls className='img-fluid' style={{borderRadius:"1rem"}}>
            <source src={videoSource3} type='video/mp4' />
          
        </video>
                 
                    </div>
                </div>


                <div className='col'>
                    <div className='main-looks text-center' style={{borderRadius:"0", boxShadow:"none"}}>
                    <video controls className='img-fluid' style={{borderRadius:"1rem"}}>
            <source src={videoSource4} type='video/mp4' />
          
        </video>
                 
                    </div>
                </div>
            </div>
        </div>



        <div className='exclusive-looks mobile-section'>
           
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

            <Slider {...settings} >
                    <div className='main-looks' style={{borderRadius:"0", boxShadow:"none"}}>
                    <video controls className='img-fluid' style={{borderRadius:"1rem"}}>
            <source src={videoSource1} type='video/mp4' />
          
        </video>
                       
                    </div>
              
               
                    <div className='main-looks' style={{borderRadius:"0", boxShadow:"none"}}>
                    <video controls className='img-fluid' style={{borderRadius:"1rem"}}>
            <source src={videoSource2} type='video/mp4' />
          
        </video>
                       
                    </div>
                
                
                    <div className='main-looks' style={{borderRadius:"0", boxShadow:"none"}}>
                    <video controls className='img-fluid' style={{borderRadius:"1rem"}}>
            <source src={videoSource3} type='video/mp4' />
          
        </video>
                       
                    </div>
              
               
                    <div className='main-looks' style={{borderRadius:"0", boxShadow:"none"}}>
                    <video controls className='img-fluid' style={{borderRadius:"1rem"}}>
            <source src={videoSource4} type='video/mp4' />
          
        </video>
                     
                    </div>

               
              
              
               
               

                    </Slider>
                
            </div>
        </div>
        

  )
}
