import React, {  useLayoutEffect } from 'react';
import ProductDetailsTab from '../components/ProductDetailsTab';
import SimilarProductsSlide from '../components/SimilarProductsSlide';
import IconBox from '../components/IconBox';
import ProductDetailsCard from '../components/ProductDetailsCard';

export default function ProductDetails() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
<>
<div style={{marginBottom:'60px'}}>
 <ProductDetailsCard/> 
<ProductDetailsTab/>
 <SimilarProductsSlide title='Sunrise Silversmith’s Exclusives'/>

</div>
</>
  )
}
