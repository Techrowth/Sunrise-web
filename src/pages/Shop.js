import React, {useLayoutEffect } from 'react';

import FullLineSearchBox from '../components/FullLineSearchBox';
import ShopFilter from '../components/ShopFilter';
import ShopProducts from '../components/ShopProducts';
import IconBox from '../components/IconBox';

export default function Shop() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
<>

{/* <FullLineSearchBox/> */}
<div className='shop-pg' style={{backgroundColor:'#fcf8f5'}}>

<div className='container ' style={{padding:'50px 0px'}} >
<div className='row' >
<div className="col-xl-3 col-lg-4">
<ShopFilter/>
</div>
<div className="col-xl-9 col-lg-8">
<ShopProducts/>
</div>
</div>
</div>
  
</div>
</>
  )
}
