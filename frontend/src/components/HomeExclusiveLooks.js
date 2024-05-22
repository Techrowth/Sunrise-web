import React from 'react'
import Look1 from '../assets/img/other/look.png';
import LookSub from '../assets/img/other/looks-sub.png';

import videoSource5 from '../assets/img/video/v5.mp4'
import videoSource6 from '../assets/img/video/v6.mp4'
import videoSource7 from '../assets/img/video/v7.mp4'
import videoSource8 from '../assets/img/video/v8.mp4'
import videoSource9 from '../assets/img/video/v9.mp4'
import videoSource10 from '../assets/img/video/v10.mp4'


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import CustomPrevIcon from '../assets/img/icon/left-arrow.png';
import CustomNextIcon from '../assets/img/icon/right-arrow.png';


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
    <h2 className='' style={{fontWeight: '500', textAlign:'center', color:'#2D2D2D', marginTop:'60px', marginBottom:'45px'}}>Exclusive Looks by Our Customers</h2>
      </div>

        <div className='exclusive-looks desktop-section'>
            <div className='row  no-gutters'>
                <div className='col'>
                    <div className='main-looks' >
                    <video autoPlay muted loop controls className='img-fluid' style={{borderRadius:"1rem 1rem 0rem 0rem"}}>
            <source src={videoSource5} type='video/mp4' />
          
        </video>
                        <div className='look-des'>
                        {/* <img src={LookSub} style={{height:'50px', width:'50px'}} className='img-fluid'/> */}
                        <p className='mt-3 mb-0'>BEYOND TREND</p>
                        <p className='mb-4'>Timeless pieces for you</p>
                        </div>
                    </div>
                </div>




                <div className='col'>
                    <div className='main-looks'>
                    <video autoPlay muted loop controls className='img-fluid' style={{borderRadius:"1rem 1rem 0rem 0rem"}}>
            <source src={videoSource6} type='video/mp4' />
          
        </video>
                        <div className='look-des'>
                        {/* <img src={LookSub} style={{height:'50px', width:'50px'}} className='img-fluid'/> */}
                        <p className='mt-3 mb-0'>MORE THAN AN ACCESSORY</p>
                        <p className='mb-4'>Jewellry as unique as you</p>
                        </div>
                    </div>
                </div>


                <div className='col'>
                    <div className='main-looks'>
                    <video autoPlay muted loop controls className='img-fluid' style={{borderRadius:"1rem 1rem 0rem 0rem"}}>
            <source src={videoSource7} type='video/mp4' />
          
        </video>
                        <div className='look-des'>
                        {/* <img src={LookSub} style={{height:'50px', width:'50px'}} className='img-fluid'/> */}
                        <p className='mt-3 mb-0'>PURE SILVER</p>
                        <p className='mb-4'>Oxidized Collection</p>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className='main-looks'>
                    <video autoPlay muted loop controls className='img-fluid' style={{borderRadius:"1rem 1rem 0rem 0rem"}}>
            <source src={videoSource8} type='video/mp4' />
          
        </video>
                        <div className='look-des'>
                        {/* <img src={LookSub} style={{height:'50px', width:'50px'}} className='img-fluid'/> */}
                        <p className='mt-3 mb-0'>KEMP STONE</p>
                        <p className='mb-4'>Jewellery Collection</p>
                        </div>
                    </div>
                </div>


                <div className='col'>
                    <div className='main-looks'>
                    <video autoPlay muted loop controls className='img-fluid' style={{borderRadius:"1rem 1rem 0rem 0rem"}}>
            <source src={videoSource9} type='video/mp4' />
          
        </video>
                        <div className='look-des'>
                        {/* <img src={LookSub} style={{height:'50px', width:'50px'}} className='img-fluid'/> */}
                        <p className='mt-3 mb-0'>MAKE A STATEMENT</p>
                        <p className='mb-4'>Adorn with Love</p>
                        </div>
                    </div>
                </div>


                <div className='col'>
                    <div className='main-looks'>
                    <video autoPlay muted loop controls className='img-fluid' style={{borderRadius:"1rem 1rem 0rem 0rem"}}>
            <source src={videoSource10} type='video/mp4' />
          
        </video>
                        <div className='look-des'>
                        {/* <img src={LookSub} style={{height:'50px', width:'50px'}} className='img-fluid'/> */}
                        <p className='mt-3 mb-0'>GOLD POLISHED SILVER JEWELLRY</p>
                        <p className='mb-4'>Oxidized Collection</p>
                        </div>
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
                    <div className='main-looks'>
                    <video autoPlay muted loop controls className='img-fluid' style={{borderRadius:"1rem 1rem 0rem 0rem"}}>
            <source src={videoSource5} type='video/mp4' />
          
        </video>
                        <div className='look-des'>
                        {/* <img src={LookSub} style={{height:'50px', width:'50px'}} className='img-fluid'/> */}
                        <p className='mt-3 mb-0'>BEYOND TREND</p>
                        <p className='mb-4'>Timeless pieces for you</p>
                        </div>
                    </div>
              
               
                    <div className='main-looks'>
                    <video autoPlay muted loop controls className='img-fluid' style={{borderRadius:"1rem 1rem 0rem 0rem"}}>
            <source src={videoSource6} type='video/mp4' />
          
        </video>
                        <div className='look-des'>
                        {/* <img src={LookSub} style={{height:'50px', width:'50px'}} className='img-fluid'/> */}
                        <p className='mt-3 mb-0'>MORE THAN AN ACCESSORY</p>
                        <p className='mb-4'>Jewellry as unique as you</p>
                        </div>
                    </div>
                
                
                    <div className='main-looks'>
                    <video autoPlay muted loop controls className='img-fluid' style={{borderRadius:"1rem 1rem 0rem 0rem"}}>
            <source src={videoSource7} type='video/mp4' />
          
        </video>
                        <div className='look-des'>
                        {/* <img src={LookSub} style={{height:'50px', width:'50px'}} className='img-fluid'/> */}
                        <p className='mt-3 mb-0'>PURE SILVER</p>
                        <p className='mb-4'>Oxidized Collection</p>
                        </div>
                    </div>
              
               
                    <div className='main-looks'>
                    <video autoPlay muted loop controls className='img-fluid' style={{borderRadius:"1rem 1rem 0rem 0rem"}}>
            <source src={videoSource8} type='video/mp4' />
          
        </video>
                        <div className='look-des'>
                        {/* <img src={LookSub} style={{height:'50px', width:'50px'}} className='img-fluid'/> */}
                        <p className='mt-3 mb-0'>KEMP STONE</p>
                        <p className='mb-4'>Jewellery Collection</p>
                        </div>
                    </div>

               
                    <div className='main-looks'>
                    <video autoPlay muted loop controls className='img-fluid' style={{borderRadius:"1rem 1rem 0rem 0rem"}}>
            <source src={videoSource9} type='video/mp4' />
          
        </video>
                        <div className='look-des'>
                        {/* <img src={LookSub} style={{height:'50px', width:'50px'}} className='img-fluid'/> */}
                        <p className='mt-3 mb-0'>MAKE A STATEMENT</p>
                        <p className='mb-4'>Adorn with Love</p>
                        </div>
                    </div>
              
               
                    <div className='main-looks'>
                    <video autoPlay muted loop controls className='img-fluid' style={{borderRadius:"1rem 1rem 0rem 0rem"}}>
            <source src={videoSource10} type='video/mp4' />
          
        </video>
                        <div className='look-des'>
                        {/* <img src={LookSub} style={{height:'50px', width:'50px'}} className='img-fluid'/> */}
                        <p className='mt-3 mb-0'>GOLD POLISHED SILVER JEWELLRY</p>
                        <p className='mb-4'>Oxidized Collection</p>
                        </div>
                    </div>
                

      

                    </Slider>
                
            </div>
        </div>
        

  )
}
