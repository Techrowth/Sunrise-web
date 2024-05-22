import React, { useState, lazy, Suspense } from 'react';

const HomeFeatured = lazy(() => import('./HomeFeatured'));
const HomeTrending = lazy(() => import('./HomeTrending'));
const HomeNewArrival = lazy(() => import('./HomeNewArrival'));

const HomeNewProducts = () => {
  const [activeTab, setActiveTab] = useState('Featured');

  return (
    <div>
      <div className='my-5 text-center'>
      <h2 className='mb-4 mt-4' style={{fontWeight: '500', textAlign:'center', color:'#2D2D2D'}}>BEST SELLING PRODUCTS</h2>
        </div>
      <ul className="product__tab--one product__tab--primary__btn d-flex justify-content-center mb-50">
        <li
          className={activeTab === 'Featured' ? 'product__tab--primary__btn__list active' : 'product__tab--primary__btn__list'}
          onClick={() => setActiveTab('Featured')}
        >
         Women’s Silver Collection
        </li>
        <li
          className={activeTab === 'Trending' ? 'product__tab--primary__btn__list active' : 'product__tab--primary__btn__list'}
          onClick={() => setActiveTab('Trending')}
        >
         Women’s Gold Coated Colletion
        </li>
        <li
          className={activeTab === 'New Arrival' ? 'product__tab--primary__btn__list active' : 'product__tab--primary__btn__list'}
          onClick={() => setActiveTab('New Arrival')}
        >
          Men’s Collection
        </li>
      </ul>

      <div className="tab-content">
        <div className={`tab-pane ${activeTab === 'Featured' ? 'active' : ''}`} id="featured">
          <Suspense fallback={<div className='text-center mt-5'>Loading...</div>}>
            {activeTab === 'Featured' && <HomeFeatured />}
          </Suspense>
        </div>
        <div className={`tab-pane ${activeTab === 'Trending' ? 'active' : ''}`} id="trending">
          <Suspense fallback={<div className='text-center mt-5'>Loading...</div>}>
            {activeTab === 'Trending' && <HomeTrending />}
          </Suspense>
        </div>
        <div className={`tab-pane ${activeTab === 'New Arrival' ? 'active' : ''}`} id="newarrival">
          <Suspense fallback={<div className='text-center mt-5'>Loading...</div>}>
            {activeTab === 'New Arrival' && <HomeNewArrival />}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default HomeNewProducts;
