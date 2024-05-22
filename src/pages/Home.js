import React, {useState, useLayoutEffect} from 'react'

import HomeNewProducts from '../components/HomeNewProducts';
import CtaOfferImg from '../components/CtaOfferImg';
import CustomizeBtnCta from '../components/CustomizeBtnCta';
import CustomizeSectionImg from '../components/CustomizeSectionImg';
import HeroBanner from '../components/HeroBanner';
import IconBox from '../components/IconBox';
import OffersSlideSec from '../components/OffersSlideSec';
import ProductCategoriesSlide from '../components/ProductCategoriesSlide';
import ShopByCategory from '../components/ShopByCategory';
import HomeBlogs from '../components/HomeBlogs';
import VideoCta from '../components/VideoCta';
import HomeGoldPolishSliverJewlary from '../components/HomeGoldPolishSliverJewlary';
import HomeExclusiveSilverJewalry from '../components/HomeExclusiveSilverJewalry';
import HomeWhatsNewOurStore from '../components/HomeWhatsNewOurStore';
import HomeMensCollections from '../components/HomeMensCollections';
import HomeWhySunrise from '../components/HomeWhySunrise';
import HomeExclusiveLooks from '../components/HomeExclusiveLooks';
import HomeExclusiveLooks1 from '../components/HomeExclusiveLooks1';

import HomeTestomonials from '../components/HomeTestomonials';

export default function Home() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Featured');

  return (
<>
<HeroBanner />
        <ShopByCategory/>
        
        <CtaOfferImg />
     <HomeNewProducts activeTab={activeTab} setActiveTab={setActiveTab} />  
        <HomeGoldPolishSliverJewlary/>
        <HomeExclusiveSilverJewalry/> 
        <VideoCta/>
        <HomeWhatsNewOurStore/> 
        <HomeMensCollections/>
        <HomeWhySunrise/>
         <HomeExclusiveLooks/> 
         <HomeTestomonials/>
         <HomeExclusiveLooks1/> 

        <HomeBlogs/>
</>
  )
}
