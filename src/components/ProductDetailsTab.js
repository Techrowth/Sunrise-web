import React, { useState } from 'react';
import ProductDescription from './ProductDescription';
import CustomerReviews from './CustomerReviews';

export default function ProductDetailsTab() {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container py-3" style={{ marginTop: '80px' }}>
      <ul className="product__details--tab d-flex mb-30">
        <li
          className={`product__details--tab__list ${activeTab === 'description' ? 'active' : ''}`}
          data-toggle="tab"
          onClick={() => handleTabClick('description')}
        >
          Description
        </li>
        <li
          className={`product__details--tab__list ${activeTab === 'reviews' ? 'active' : ''}`}
          data-toggle="tab"
          onClick={() => handleTabClick('reviews')}
        >
          Product Reviews
        </li>
      </ul>

      {activeTab === 'description' ? <ProductDescription /> : null}
      {activeTab === 'reviews' ? <CustomerReviews /> : null}
    </div>
  )
}
