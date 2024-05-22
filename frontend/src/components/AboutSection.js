import React from 'react'
import AboutImg from '../assets/img/banner/about.png';

export default function AboutSection() {
  return (
    <div className='about-section'>
      <div className="container col-lg-11 col-md-11 col-12 mt-5">
        <h2 className='text-center' style={{ marginBottom: '50px', fontWeight: '600' }}>About Us</h2>
        <div className="row">
          {/* Image on the Left */}
          <div className="col-lg-5 mb-3">
            <img src={AboutImg} className="img-fluid" alt="About Us Image" />
          </div>
          {/* Text on the Right */}
          <div className="col-lg-7">
            <h4 className='mb-3' style={{
              color: '#EE2761',
            }}>Why Choose us</h4>
            <h3 className='mb-3'>We do not buy from the open market & traders.</h3>
            <p style={{ color: '#6B6B6B', fontWeight: '500' }}>
              Lorem ipsum dolor sit labore maiores cum, hic ducimus ad a dolorem soluta consectetur adipisci. Perspiciatis quas ab quibusdam is. Itaque accusantium eveniet a laboriosam dolorem? Magni suscipit est corrupti explicabo non perspiciatis, <br /><br /> excepturi ut asperiores assumenda rerum? Perspiciatis quas ab quibusdam is. Provident ab corrupti sequi, voluptate neque reiciendis ea placeat labore maiores cum, hic ducimus ad a dolorem soluta consectetur adipisci. Perspiciatis quas ab quibusdam is. <br /> Itaque accusantium eveniet a laboriosam dolorem? Magni suscipit est corrupti explicabo non perspiciatis, excepturi ut asperiores assumenda rerum? Provident ab corrupti sequi, voluptates repudiandae eius odit aut.
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}
