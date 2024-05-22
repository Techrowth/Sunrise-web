import React from 'react'
import PaymentIcon from '../assets/img/icon/payment.png';
import SunriseImg from '../assets/img/banner/sunrise.png';
import BottomLine from '../assets/img/icon/bottom-line.png';
import YoutubeIcon from '../assets/img/icon/youtube.png';
import InstaIcon from '../assets/img/icon/instagram.png';
import FacebookIcon from '../assets/img/icon/facebook.png';
import WhatsappIcon from '../assets/img/icon/whatsapp.png';

export default function
  () {
  return (
    <div>
      <div className="footer">
        <div className="first-footer-row">
          <div className="container">

          <div className="row " style={{marginBottom:'66px'}}>
              <div className="col col-md-5 col-12">
              <div className="footer-coloum">
                  <h2 style={{fontWeight: '600'}}>Exquisite Artistic Gallery</h2>
                  
                  <p className='mt-4' style={{lineHeight: '22px'}}>Discover Sunrise SilverSmiths’ world, where intricate and minimalist silver jewelry is crafted with the greatest care to capture the full essence of Indian culture. Wear these timeless sets with delicate patterns, each telling a distinct story about India’s rich history. Allow yourself to celebrate this diversity of our nation’s rich legacy with Sunrise Silversmiths craftsmanship, bringing you the joy and confidence you need every moment.</p>
                </div>
                </div>

                <div className="col col-md-7 col-12">
                <img src={SunriseImg} class="img-fluid" alt="Sunrise" />
</div>
                </div>
            <div className="row">
              <div className="col col-md-3 col-12">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                  <h3>Our Information</h3>
                  <img src={BottomLine} className="img-fluid" style={{width:'85px', marginTop:'-12px'}} alt="Bottom Line" />
                  <div className="row g-2">
    <div className="col-2"> {/* Adjusted to col-1 */}
        <div className="banner-text">
            <i className="fas fa-map-marker-alt" style={{ color: '#66fcf1', fontSize:'18px' }} />
        </div>
    </div>

    <div className="col-10" style={{marginLeft:'-15px'}}> {/* Adjusted to col-11 */}
        <div className="location-details">
            <p style={{lineHeight:'22px'}}>Bukkhad - Hungry For Fashion Next Mahalakshmi Metro Station Bangalore - 560086</p>
        </div>
    </div>
</div>


<div className="row g-2 mt-3">
    <div className="col-2"> {/* Adjusted to col-1 */}
        <div className="banner-text">
            <i className="fas fa-phone-alt" style={{ color: '#66fcf1', fontSize:'18px' }} />
        </div>
    </div>

    <div className="col-10" style={{marginLeft:'-15px'}}> {/* Adjusted to col-11 */}
        <div className="location-details">
            <p>+91 9876543210</p>
        </div>
    </div>
</div>

<div class="social-icons-row">
    <div class="social-icon">
        <img src={WhatsappIcon} alt="Social Icon 1" class="social-icon-img" />
    </div>

    <div class="social-icon">
        <img src={FacebookIcon} alt="Social Icon 2" class="social-icon-img" />
    </div>

    <div class="social-icon">
        <img src={InstaIcon} alt="Social Icon 3" class="social-icon-img" />
    </div>

    <div class="social-icon">
        <img src={YoutubeIcon} alt="Social Icon 4" class="social-icon-img" />
    </div>
</div>


            </div>
              </div>
              <div className="col col-md-3 col-6">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                  <h3>Quick Links</h3>
                  <img src={BottomLine} class="img-fluid" style={{width:'85px', marginTop:'-12px'}} alt="Bottom Line" />
                  <p className="mb-0">About Us</p>
                  <p className="mb-0">Shop</p>
                  <p className="mb-0">Happy Customers</p>
                  <p className="mb-0">Blog</p>
                  <p className="mb-0">Contact us</p>
                </div>
              </div>
              <div className="col col-md-3 col-6">
                {/* Content for Column 1 */}
                <div className="footer-coloum" style={{marginTop:'60px'}}>
                  

                  <p className="mb-0">Privacy Policy</p>
                  <p className="mb-0">Terms & Conditions</p>
                  <p className="mb-0">FAQ</p>
                  <p className="mb-0">Silver Care</p>
                  <p className="mb-0">Refund and Returns Policy</p>
                  <p className="mb-0">Shipping & Delivery Policy</p>
                </div>
              </div>
              <div className="col col-md-3 col-12">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                  <h3>Get Your Latest Update !</h3>
                  <img src={BottomLine} class="img-fluid" style={{width:'85px', marginTop:'-12px'}} alt="Bottom Line" />
                <p style={{lineHeight:'22px'}}>Subscribe to our latest newsletter to get news about special discounts</p>
                <div className='newslator-form'>
                <input type='email' className='form-control' placeholder='Email'></input>
                </div>
                <div className='suscribe-btn mt-3'>
                  <button className='btn px-5'>Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="middle-border" />
            <div className="row" style={{marginBottom:'-25px'}}>
              <div className="col col-md-3 col-6">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                  <h4>Gold Polished Silver Jewellry</h4>
                  <img src={BottomLine} class="img-fluid" style={{width:'85px', marginTop:'-12px'}} alt="Bottom Line" />
                  <p className="mb-0">Neck Chain</p>
                  <p className="mb-0">Pendant Set</p>
                  <p className="mb-0">Toe Rings</p>
                  <p className="mb-0">Anklet</p>
                  <p className="mb-0">Bangles</p>
                  <p className="mb-0">Earrings</p>
                </div>
              </div>
              <div className="col col-md-3 col-6">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                <h4>Silver Jewellry</h4>
                  <img src={BottomLine} class="img-fluid" style={{width:'85px', marginTop:'-12px'}} alt="Bottom Line" />
                  <p className="mb-0">Neck Chain</p>
                  <p className="mb-0">Pendant Set</p>
                  <p className="mb-0">Toe Rings</p>
                  <p className="mb-0">Anklet</p>
                  <p className="mb-0">Bangles</p>
                  <p className="mb-0">Earrings</p>
                </div>
              </div>
              <div className="col col-md-3 col-6">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                <h4>Men’s Silver Collections</h4>
                  <img src={BottomLine} class="img-fluid" style={{width:'85px', marginTop:'-12px'}} alt="Bottom Line" />
                  <p className="mb-0">Men Cloths</p>
                  <p className="mb-0">Pendant Set</p>
                  <p className="mb-0">Toe Rings</p>
                  <p className="mb-0">Anklet</p>
                  <p className="mb-0">Bangles</p>
                  <p className="mb-0">Earrings</p>
                </div>
              </div>
              <div className="col col-md-3 col-12">
                {/* Content for Column 1 */}
                <div className="footer-coloum">
                <h4>100% Secure Payment</h4>
                  <img src={BottomLine} class="img-fluid" style={{width:'85px', marginTop:'-12px'}} alt="Bottom Line" />
                  <img src={PaymentIcon} alt className="img-fluid mt-4" />
                </div>
              </div>
            </div>

            <div className="middle-border" />

            <div className="col-12 text-center mt-5 colpywright-line">
              <p>Copyright © 2024 Sunrise Sliver Smiths | Powered by Techrowth</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
