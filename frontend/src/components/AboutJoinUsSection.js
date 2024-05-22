import React from 'react';
import { Link } from 'react-router-dom';
import AboutJoinImg from '../assets/img/banner/about-join.png';

export default function AboutJoinUsSection() {
    return (
        <div className='about-section'>
            <div className='container col-lg-11 col-md-11 col-12 mt-5' >
                <div className='join-us mb-3 text-center' style={{ marginTop: '60px' }}>
                    <img src={AboutJoinImg} className='img-fluid w-100'></img>
                    <h3 className='my-3'>Calling all Designer</h3>
                    <p className='mt-4' style={{ color: '#000' }}>Creative? Like money? Open a shop in minutes. For free. Just upload your art and designs and leave the rest to us. We arrange for all the printing (on over 60 quality products) and shipping to almost anywhere on earth. Ready? Let’s go.</p>
                    <Link style={{ fontWeight: '500', fontSize: '16px' }} class="cart__summary--footer__btn primary__btn checkout" >Join Us</Link>
                </div>
            </div>
        </div>
    )
}
