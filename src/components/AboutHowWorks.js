import React from 'react'

import ProcessImg1 from '../assets/img/other/step-1.png';
import ProcessImg2 from '../assets/img/other/step-2.png';
import ProcessImg3 from '../assets/img/other/step-3.png';

export default function AboutHowWorks() {
  return (
    <div className='about-section'>
    <div className='container col-lg-11 col-md-11 col-12 mt-5' >
        <div className='text-center how-design'  style={{ marginTop: '80px' }}>
    <h3 className='my-5'>How Company Works</h3>

    <div className='row' >
        <div className='col-lg-3 col-md-6 col-12'>
            <img src={ProcessImg1} className='img-fluid'></img>
            <h5 className='my-3'>Select the Cloth</h5>

        </div>
        <div className='col-lg-3 col-md-6 col-12'>
            <img src={ProcessImg1} className='img-fluid'></img>
            <h5 className='my-3'>Uplode the your Design</h5>

        </div>
        <div className='col-lg-3 col-md-6 col-12'>
            <img src={ProcessImg2} className='img-fluid'></img>
            <h5 className='my-3'>check the print preview</h5>

        </div>
        <div className='col-lg-3 col-md-6 col-12'>
            <img src={ProcessImg3} className='img-fluid'></img>
            <h5 className='my-3'>Enjoy the your Design</h5>

        </div>
    </div>
    </div>
    </div>
    </div>
  )
}
