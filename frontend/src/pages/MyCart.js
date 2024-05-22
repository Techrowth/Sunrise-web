import React, { useLayoutEffect } from 'react';

import MyCartProducts from '../components/MyCartProducts';
import MyCartCheckout from '../components/MyCartCheckout';
import IconBox2 from '../components/IconBox2';
import SimilarProductsSlide from '../components/SimilarProductsSlide';


export default function MyCart() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <section className="cart__section section--padding">
                <div className="container">
                    {/* <div className="cart__section--inner">
                        <form action="#">
                            <h3 className="cart__title text-center">My Cart</h3>
                            <div className="row">
                                <div className="col-lg-8">
                                    <MyCartProducts />
                                    <IconBox2/>
                                </div>
                                <div className="col-lg-4">
                                    <MyCartCheckout />
                                </div>
                            </div>
                        </form>
                    </div> */}
                </div>
            </section>

            {/* <SimilarProductsSlide title='Countinue Shopping'/> */}

        </>
    )
}
