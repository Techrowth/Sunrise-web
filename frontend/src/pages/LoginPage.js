import React, {useLayoutEffect } from 'react';

import LoginRagistrationTab from '../components/LoginRagistrationTab';


export default function LoginPage() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
<>
<LoginRagistrationTab/> 
</>
  )
}
