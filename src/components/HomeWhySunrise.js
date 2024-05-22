import React from 'react';

import Iocn1 from '../assets/img/icon/why-sunrise-1.png';
import Iocn2 from '../assets/img/icon/why-sunrise-2.png';
import Iocn3 from '../assets/img/icon/why-sunrise-3.png';
import Iocn4 from '../assets/img/icon/why-sunrise-4.png';
import Iocn5 from '../assets/img/icon/why-sunrise-5.png';
import Iocn6 from '../assets/img/icon/why-sunrise-6.png';

export default function HomeWhySunrise() {
  return (
   <div className='why-sunrise-main'>
    <div className='container'>
        <div className='why-surise-banner'>
        <h2 className='mb-4 mt-4' style={{fontWeight: '500', textAlign:'center', color:'#fff', paddingBottom:'30px'}}>Why Sunrise silversmith’s Jewellery</h2>

<div className='d-flex justify-content-center'>

        <div className='col-lg-9 col-lg-10 col-12 '>
            <div className='row'>
            <div className="col col-lg-4 col-md-4 col-12">
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <div className="col-3">
               <img src={Iocn1} className='img-fluid p-3'/>
              </div>
              <div className="col-9">
                <p className="card-text">Bengaluru’s
Silver Finery</p> {/* Text on the right */}
              </div>
            </div>
          </div>
        </div>
        <div className="col col-lg-4 col-md-4 col-12">
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <div className="col-3">
              <img src={Iocn2} className='img-fluid p-3'/>
              </div>
              <div className="col-9">
                <p className="card-text">Unique Indian
Legacy</p> {/* Text on the right */}
              </div>
            </div>
          </div>
        </div>
        <div className="col col-lg-4 col-md-4 col-12">
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <div className="col-3">
              <img src={Iocn3} className='img-fluid p-3'/>
              </div>
              <div className="col-9">
                <p className="card-text">Timeless Silver
Elegance</p> {/* Text on the right */}
              </div>
            </div>
          </div>
        </div>
            </div>

            <div className='row'>
            <div className="col col-lg-4 col-md-4 col-12">
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <div className="col-3">
               <img src={Iocn4} className='img-fluid p-3'/>
              </div>
              <div className="col-9">
                <p className="card-text">Handcrafted Artisanal Bliss</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-lg-4 col-md-4 col-12">
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <div className="col-3">
              <img src={Iocn5} className='img-fluid p-3'/>
              </div>
              <div className="col-9">
                <p className="card-text">Heritage in 
Every Link</p> {/* Text on the right */}
              </div>
            </div>
          </div>
        </div>
        <div className="col col-lg-4 col-md-4 col-12">
          <div className="card">
            <div className="card-body d-flex align-items-center">
              <div className="col-3">
              <img src={Iocn6} className='img-fluid p-3'/>
              </div>
              <div className="col-9">
                <p className="card-text">Joyful Silver
Celebrations</p> {/* Text on the right */}
              </div>
            </div>
          </div>
        </div>
            </div>
        </div>
</div>
   </div>
   </div>
       
</div>
  )
}
