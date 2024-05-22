import React, {useLayoutEffect } from 'react';

import ContactSection from '../components/ContactSection';
import ContactMap from '../components/ContactMap';


export default function ContactUs() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
<>
{/* <ContactSection/>
<ContactMap/> */}
</>
  )
}
