import React from 'react'
import Icon1 from '../assets/img/icon/1.png';
import Icon2 from '../assets/img/icon/2.png';
import Icon3 from '../assets/img/icon/3.png';
import Icon4 from '../assets/img/icon/4.png';

export default function IconBox2() {
    return (
        <section className="shipping__section2 shipping__style3 py-5">
            <div className="container">
                <div className="shipping__section2--inner shipping__style3--inner">
                    <div className='row'>

                        <div className='col-md-6'>

                            <div className="shipping__items2 d-flex align-items-center" style={{ margin: '15px' }}>
                                <div className="shipping__items2--icon">
                                    <img src={Icon1} alt />
                                </div>
                                <div className="shipping__items2--content">
                                    <h2 className="shipping__items2--content__title h3">Shipping</h2>
                                    <p className="shipping__items2--content__desc">From handpicked sellers</p>
                                </div>
                            </div>

                            <div className="shipping__items2 d-flex align-items-center" style={{ margin: '15px' }}>
                                <div className="shipping__items2--icon">
                                    <img src={Icon3} alt />
                                </div>
                                <div className="shipping__items2--content">
                                    <h2 className="shipping__items2--content__title h3">Return</h2>
                                    <p className="shipping__items2--content__desc">From handpicked sellers</p>
                                </div>
                            </div>

                        </div>

                        <div className='col-md-6'>

                            <div className="shipping__items2 d-flex align-items-center" style={{ margin: '15px' }}>
                                <div className="shipping__items2--icon">
                                    <img src={Icon2} alt />
                                </div>
                                <div className="shipping__items2--content">
                                    <h2 className="shipping__items2--content__title h3">Payment</h2>
                                    <p className="shipping__items2--content__desc">From handpicked sellers</p>
                                </div>
                            </div>

                            <div className="shipping__items2 d-flex align-items-center" style={{ margin: '15px' }}>
                                <div className="shipping__items2--icon">
                                    <img src={Icon4} alt />
                                </div>
                                <div className="shipping__items2--content">
                                    <h2 className="shipping__items2--content__title h3">Support</h2>
                                    <p className="shipping__items2--content__desc">From handpicked sellers</p>
                                </div>
                            </div>

                        </div>

                    </div>




                </div>
            </div>
        </section>


    )
}
